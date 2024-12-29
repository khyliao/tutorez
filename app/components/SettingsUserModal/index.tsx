"use client";

import Button from "@components/Button";
import { createPortal } from "react-dom";

type SettingsUserModalProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  onSecondaryBtnClick?: () => void;
  onPrimaryBtnClick?: () => void;
};

const SettingsUserModal = ({
  isOpen,
  onSecondaryBtnClick,
  onPrimaryBtnClick,
  children,
}: SettingsUserModalProps) => {
  return createPortal(
    <div
      className={`fixed top-3 left-3 md:left-auto right-0 bottom-3 z-20 flex flex-col rounded-md overflow-hidden transition-transform lg:min-w-[576px] border border-[#e2e2e2] ${
        isOpen ? "-translate-x-0 mr-3" : "translate-x-full"
      }`}
    >
      <div className="p-3 py-4 bg-[#EBEEF2] font-montserrat font-bold">
        Загальна інформація про користувача
      </div>
      <div className="grow p-3 overflow-y-scroll bg-white">{children}</div>
      <div className="flex justify-between p-3 bg-[#EBEEF2]">
        <Button onClick={onSecondaryBtnClick} type="secondaryBtnMode">
          Закрити
        </Button>
        <Button
          form="addUser"
          btnType="submit"
          onClick={onPrimaryBtnClick}
          type="primaryBtnMode"
        >
          Зберегти зміни
        </Button>
      </div>
    </div>,
    document.body
  );
};

export default SettingsUserModal;
