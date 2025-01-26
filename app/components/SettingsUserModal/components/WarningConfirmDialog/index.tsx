"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@assets/close.svg";
import ConfirmDeleteIcon from "@assets/confirm-delete.svg";

interface IWarningConfirmDialogProps {
  title: string;
  label: string;
  isDialogOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const WarningConfirmDialog = ({
  title,
  label,
  isDialogOpen,
  onConfirm,
  onCancel,
}: IWarningConfirmDialogProps) => {
  return createPortal(
    <AnimatePresence>
      {isDialogOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex mx-3 flex-col gap-6 relative p-6 md:p-10 rounded-lg border  border-[#DEE2E6] dark:border-[#0d0d23] bg-white dark:bg-[#191b4f] shadow-lg"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              className="group absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 flex items-center justify-center rounded-full p-1 bg-[#E5E5E5] dark:bg-[#0e0f2d] hover:bg-[#dde4f6]"
              onClick={onCancel}
            >
              <CloseIcon className="transition-colors duration-300 dark:text-[#929292] group-hover:text-[#516cb1] group-hover:dark:text-[#f0efef]" />
            </button>

            <div className="flex gap-3 items-center md:gap-6 ">
              <div className="flex items-center justify-center min-w-12 h-12 md:w-14 md:h-14 bg-[#FF6060] dark:bg-[#FF6060] rounded-lg">
                <ConfirmDeleteIcon />
              </div>
              <div>
                <h3 className="text-base md:text-xl md:mb-2 font-semibold font-montserrat text-[#54595E] dark:text-[#d8d8d8]">
                  {title}
                </h3>
                <span className="text-sm md:text-base text-[#54595E] dark:text-[#c7c0c0]">
                  {label}
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-6">
              <button
                className="py-2 px-4 text-sm md:text-base rounded-lg font-medium text-[#4F4F4F] border border-[#4F4F4F] dark:text-white transition-colors dark:bg-[#151642] hover:bg-[#dde4f6] hover:border-[#d8e1f7] dark:hover:bg-[#2d367a] dark:hover:border-[#2d367a] grow"
                onClick={onCancel}
              >
                Ні, відмінити
              </button>
              <button
                className="py-2 px-4 text-sm md:text-base rounded-lg font-medium transition-colors bg-[#F00] hover:bg-[#f00000e2] text-white grow"
                onClick={onConfirm}
              >
                Так, підтвердити
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default WarningConfirmDialog;
