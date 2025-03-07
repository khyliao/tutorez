"use client";

import Button from "@components/Button";
import { useState } from "react";
import { createPortal } from "react-dom";

type SettingsUserModalProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  onSecondaryBtnClick?: () => void;
  onPrimaryBtnClick?: () => void;
  primaryBtnCaption?: string;
  formLink: string;
  isPrimaryBtnHidden?: boolean;
};

const SettingsUserModal = ({
  isOpen,
  onSecondaryBtnClick,
  onPrimaryBtnClick,
  children,
  primaryBtnCaption = "Зберегти зміни",
  formLink,
  isPrimaryBtnHidden,
}: SettingsUserModalProps) => {
  return createPortal(
    <div
      className={`fixed top-3 left-3 md:left-auto right-0 bottom-3 z-20 flex flex-col rounded-md overflow-hidden duration-300 transition-all lg:min-w-[576px] lg:max-w-[576px] border border-[#e2e2e2] dark:border-[#272774] ${
        isOpen ? "-translate-x-0 mr-3" : "translate-x-full"
      }`}
    >
      <div className="p-3 py-4 transition-colors bg-[#EBEEF2] dark:bg-[#141432] dark:text-white font-montserrat font-bold">
        Загальна інформація про користувача
      </div>
      <div className="grow flex flex-col justify-between p-3 overflow-y-scroll transition-colors bg-white dark:bg-[#1D1E42]">
        {children}
      </div>
      <div className="flex justify-between p-3 transition-colors bg-[#EBEEF2] dark:bg-[#141432]">
        <Button onClick={onSecondaryBtnClick} type="secondaryBtnMode">
          Закрити
        </Button>
        <Button
          className={`${isPrimaryBtnHidden && "hidden"}`}
          form={formLink}
          btnType="submit"
          onClick={onPrimaryBtnClick}
          type="primaryBtnMode"
        >
          {primaryBtnCaption}
        </Button>
      </div>
    </div>,
    document.body
  );
};

export default SettingsUserModal;
