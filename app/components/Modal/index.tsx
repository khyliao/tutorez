import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "../Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QrModal from "../QrModal";
import PlusIcon from "@assets/plus.svg";
import { motion } from "framer-motion";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export const AdvertModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button type='advert' onClick={handleOpen}>
        Залишити заявку
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <QrModal onClose={handleClose} />
      </Modal>
    </div>
  );
};

export const PaymentModal = () => {
  const [isPaymentModalFormActive, setIsPaymentModalFormActive] =
    useState(false);

  const handleOpen = () => setIsPaymentModalFormActive(true);
  const handleClose = () => setIsPaymentModalFormActive(false);

  return (
    <div>
      <button
        className='flex items-center justify-center border-[2px] border-[#a0a0a0] dark:border-[#dbdbdb] rounded-full w-6 h-6 transition-all hover:scale-[1.1] cursor-pointer'
        type='button'
        onClick={handleOpen}
      >
        <PlusIcon />
      </button>
      <Modal
        open={isPaymentModalFormActive}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
          <div className='relative bg-white p-6 pt-7 rounded-lg shadow-lg max-w-sm text-center'>
            <motion.button
              initial={{
                y: -5,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                },
              }}
              viewport={{ once: true }}
              onClick={handleClose}
              className='absolute right-2 top-1 leading-4 text-xl p-2 bg-white rounded-full text-black'
            >
              x
            </motion.button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
