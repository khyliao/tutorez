"use client";

import Button from "@components/Button";
import AdminTable from "@components/AdminTable";
import { useState } from "react";
import SettingsUserModal from "@components/SettingsUserModal";
import AddStudentForm from "@components/forms/AddStudentForm";
import { useGetStudentsQuery } from "@store/api/studentApi";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import EditStudentForm from "@components/forms/EditStudentForm";
import AddPaymentForm from "@components/forms/AddPaymentForm";
import WarningConfirmDialog from "@components/SettingsUserModal/components/WarningConfirmDialog";
import AddLessonForm from "@components/forms/AddLessonForm";
import { useDeleteStudentMutation } from "@store/api/studentApi";
import { showErrorToast, showSuccessToast } from "@utils/toastUtils";
import SearchBar from "@/app/components/SearchBar";

const Dashboard = () => {
  const [isAddStudentFormActive, setIsAddStudentFormActive] = useState(false);
  const [isEditStudentFormActive, setIsEditStudentFormActive] = useState(false);
  const [isAddPaymentStudentFormActive, setIsAddPaymentStudentFormActive] =
    useState(false);
  const [isAddLessonStudentFormActive, setIsAddLessonStudentFormActive] =
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
    setIsAddLessonStudentFormActive(false);
  };

  const activateAddPaymentStudentForm = () => {
    setIsAddPaymentStudentFormActive(true);
    setIsEditStudentFormActive(false);
  };

  const activateAddLessonStudentForm = () => {
    setIsAddLessonStudentFormActive(true);
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

  const handleAddLessonStudentFormClose = () => {
    setIsEditStudentFormActive(false);
    setSelectedStudentLogin(null);
    setIsAddLessonStudentFormActive(false);
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
        <header className="p-2 pt-4 md:p-4 flex flex-col md:flex-row gap-2 md:gap-0 transition-colors justify-between dark:bg-[#1D1E42]">
          <SearchBar />
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
        formLink="addStudent"
        primaryBtnCaption="Створити студента"
      >
        <AddStudentForm
          onAddStudent={handleAddStudentFormClose}
          isSettingsModalOpen={isAddStudentFormActive}
        />
      </SettingsUserModal>
      <SettingsUserModal
        isOpen={isEditStudentFormActive}
        onSecondaryBtnClick={handleEditStudentFormClose}
        formLink="editStudent"
        primaryBtnCaption="Зберегти"
      >
        <EditStudentForm
          onAddLesson={activateAddLessonStudentForm}
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
        primaryBtnCaption="Додати платіж"
      >
        <AddPaymentForm
          onBack={backToEditStudentForm}
          isSettingsModalOpen={isAddPaymentStudentFormActive}
          onClose={handleAddPaymentStudentFormClose}
          oldLogin={selectedStudentLogin}
        />
      </SettingsUserModal>
      <SettingsUserModal
        isOpen={isAddLessonStudentFormActive}
        onSecondaryBtnClick={handleAddLessonStudentFormClose}
        formLink="addLessonStudent"
        primaryBtnCaption="Додати заняття"
      >
        <AddLessonForm
          onBack={backToEditStudentForm}
          isSettingsModalOpen={isAddLessonStudentFormActive}
          onClose={handleAddLessonStudentFormClose}
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
