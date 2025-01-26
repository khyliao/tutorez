"use client";

import LoupeIcon from "@assets/loupe.svg";
import Button from "@components/Button";
import AdminTable from "@components/AdminTable";
import { useState } from "react";
import SettingsUserModal from "@components/SettingsUserModal";
import AddStudentForm from "@components/forms/AddStudentForm";
import { useGetStudentsQuery } from "@store/api/studentApi";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import EditStudentForm from "@components/forms/EditStudentForm";
import AddPaymentForm from "@/app/components/forms/AddPaymentForm";
import WarningConfirmDialog from "@/app/components/SettingsUserModal/components/WarningConfirmDialog";
import { useDeleteStudentMutation } from "@/lib/store/api/studentApi";
import { showErrorToast, showSuccessToast } from "@/lib/utils/toastUtils";

const Dashboard = () => {
  const [isAddStudentFormActive, setIsAddStudentFormActive] = useState(false);
  const [isEditStudentFormActive, setIsEditStudentFormActive] = useState(false);
  const [isAddPaymentStudentFormActive, setIsAddPaymentStudentFormActive] =
    useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedStudentLogin, setSelectedStudentLogin] = useState<
    string | null
  >(null);
  const user = useAppSelector(selectCurrentUser);
  const { data: students } = useGetStudentsQuery(user.login);
  const [deleteStudent] = useDeleteStudentMutation();

  const activateDeleteDialog = (login: string) => {
    setIsDeleteDialogOpen(true);
    setSelectedStudentLogin(login);
  };

  const disactivateDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedStudentLogin("");
  };

  const activateAddStudentForm = () => {
    setIsAddStudentFormActive(true);
  };

  const activateEditStudentForm = (login: string) => {
    setIsEditStudentFormActive(true);
    setSelectedStudentLogin(login);
  };

  const backToEditStudentForm = () => {
    setIsEditStudentFormActive(true);
    setIsAddPaymentStudentFormActive(false);
  };

  const activateAddPaymentStudentForm = () => {
    setIsAddPaymentStudentFormActive(true);
    setIsEditStudentFormActive(false);
  };

  const handleAddStudentFormClose = () => {
    setIsAddStudentFormActive(false);
  };

  const handleEditStudentFormClose = () => {
    setIsEditStudentFormActive(false);
    setSelectedStudentLogin(null);
  };

  const handleAddPaymentStudentFormClose = () => {
    setIsEditStudentFormActive(false);
    setSelectedStudentLogin(null);
    setIsAddPaymentStudentFormActive(false);
  };

  const handleDeleteStudent = async () => {
    try {
      await deleteStudent(selectedStudentLogin).unwrap();
      showSuccessToast(`Студент ${selectedStudentLogin} успішно видалений!`);
    } catch (error) {
      console.error("Помилка видалення студента:", error);
      showErrorToast("Помилка видалення студента. Спробуйте ще раз!");
    }
    disactivateDeleteDialog();
  };

  return (
    <>
      <div className="grid grid-rows-[auto_1fr] grow">
        <header className="p-4 flex flex-col md:flex-row gap-4 md:gap-0 transition-colors justify-between dark:bg-[#1D1E42]">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* <div className="flex gap-2 items-center font-montserrat font-medium text-sm">
              <span className="transition-colors dark:text-white">
                Показати
              </span>
              <Dropdown options={["10", "20", "30"]} />
              <span className="transition-colors dark:text-white">записів</span>
            </div> */}
            <div>
              <div className="relative">
                <LoupeIcon className="absolute top-1/2 -translate-y-1/2 left-2 dark:text-white" />
                <input
                  className="p-2 pl-8 font-montserrat transition-colors text-[#9E9E9E] border border-[#9E9E9E] focus:outline-[#9E9E9E] rounded-lg dark:border-white dark:bg-transparent dark:placeholder:text-white"
                  type="text"
                  placeholder="Пошук..."
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <Button type="purpleIcon" onClick={activateAddStudentForm}>
              Додати студента
            </Button>
          </div>
        </header>
        <AdminTable
          users={students}
          onEditClick={activateEditStudentForm}
          onDeleteClick={activateDeleteDialog}
        />
      </div>
      <SettingsUserModal
        isOpen={isAddStudentFormActive}
        onSecondaryBtnClick={handleAddStudentFormClose}
        onPrimaryBtnClick={handleAddStudentFormClose}
        formLink="addStudent"
        primaryBtnCaption="Створити студента"
      >
        <AddStudentForm isSettingsModalOpen={isAddStudentFormActive} />
      </SettingsUserModal>
      <SettingsUserModal
        isOpen={isEditStudentFormActive}
        onSecondaryBtnClick={handleEditStudentFormClose}
        formLink="editStudent"
        primaryBtnCaption="Зберегти"
      >
        <EditStudentForm
          onAddPayment={activateAddPaymentStudentForm}
          isSettingsModalOpen={isEditStudentFormActive}
          onClose={handleEditStudentFormClose}
          oldLogin={selectedStudentLogin}
        />
      </SettingsUserModal>
      <SettingsUserModal
        isOpen={isAddPaymentStudentFormActive}
        onSecondaryBtnClick={handleAddPaymentStudentFormClose}
        formLink="addPaymentStudent"
        primaryBtnCaption="Зберегти"
      >
        <AddPaymentForm
          onBack={backToEditStudentForm}
          isSettingsModalOpen={isAddPaymentStudentFormActive}
          onClose={handleAddPaymentStudentFormClose}
          oldLogin={selectedStudentLogin}
        />
      </SettingsUserModal>
      <WarningConfirmDialog
        isDialogOpen={isDeleteDialogOpen}
        title="Видалення студента"
        label={`Ви впевнені що бажаєте видалити студента ${selectedStudentLogin}?`}
        onCancel={disactivateDeleteDialog}
        onConfirm={handleDeleteStudent}
      />
    </>
  );
};

export default Dashboard;
