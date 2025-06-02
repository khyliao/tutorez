"use client";
import { useState } from "react";
import Button from "@components/Button";
import SettingsUserModal from "@/app/components/SettingsUserModal";

const SuspiciousActivity = () => {
  const [isAddRecordFormActive, setIsAddRecordFormActive] = useState(false);
  const [isPrimaryBtnHidden, setIsPrimaryBtnHidden] = useState(false);

  const handleAddStudentFormClose = () => {
    setIsAddRecordFormActive(false);
    setIsPrimaryBtnHidden(false);
  };

  const activateAddStudentForm = () => {
    setIsAddRecordFormActive(true);
  };

  return (
    <div className='p-2'>
      <Button type='primaryBtnMode' onClick={activateAddStudentForm}>
        Add record
      </Button>
      <SettingsUserModal
        isOpen={isAddRecordFormActive}
        onSecondaryBtnClick={handleAddStudentFormClose}
        isPrimaryBtnHidden={isPrimaryBtnHidden}
        formLink='addSuspiciousRecord'
        primaryBtnCaption='Створити запис'
      >
        {/* <AddStudentForm
          onAddStudent={() => {
            setIsPrimaryBtnHidden(true);
          }}
          isSettingsModalOpen={isAddRecordFormActive}
        /> */}
      </SettingsUserModal>
    </div>
  );
};

export default SuspiciousActivity;
