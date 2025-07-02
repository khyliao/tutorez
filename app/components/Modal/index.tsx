import { useState } from "react";
import Modal from "@mui/material/Modal";
import PlusIcon from "@assets/plus.svg";
import { motion } from "framer-motion";
import { useLang } from "@hooks/useLang";
import {
  convertToTimeString,
  getCurrentDateAndTime,
} from "@/lib/utils/timeFormatter";
import Button from "../Button";
import QrModal from "../QrModal";

// AdvertModal untouched as you requested
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

interface IPaymentModal {
  balance: number;
  price: number;
  userLogin: string;
}

// Only PaymentModal modified with motion
export const PaymentModal = ({ balance, price, userLogin }: IPaymentModal) => {
  const [isPaymentModalFormActive, setIsPaymentModalFormActive] =
    useState(false);
  const { lang, t } = useLang();
  const [totalLessonsToPay, setTotalLessonsToPay] = useState(
    balance < 0 ? Math.abs(balance) : 1
  );
  const indebtedLessons = balance < 0 ? Math.abs(balance) : 0;
  const [lessonsToPay, setLessonsToPay] = useState(indebtedLessons || 1);

  const handleOpen = () => setIsPaymentModalFormActive(true);
  const handleClose = () => setIsPaymentModalFormActive(false);

  const handleDecreaseLessonsToPay = () => {
    if (totalLessonsToPay - 1 < indebtedLessons) return;
    if (totalLessonsToPay - 1 < 1) return;

    setLessonsToPay(lessonsToPay - 1);
    setTotalLessonsToPay((total) => (total > 0 ? total - 1 : total));
  };

  const handleIncreaseLessonsToPay = () => {
    setLessonsToPay(lessonsToPay + 1);
    setTotalLessonsToPay((total) => total + 1);
  };

  const handlePay = async () => {
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalLessonsToPay * price,
          price,
          totalLessonsToPay,
          description: `${userLogin}. Оплата за освітні послуги`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.pageUrl) {
        window.location.href = data.pageUrl;
      } else {
        alert(`Помилка: ${data.errText || "невідомо"}`);
      }
    } catch (err) {
      console.error("handlePay error:", err);
      alert("Не вдалося ініціювати платіж.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.12, duration: 0.6, ease: "easeOut" },
    },
  };

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
          <motion.div
            className='relative dark:text-black m-4 bg-white p-6 pt-7 rounded-lg shadow-lg max-w-sm text-center'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.button
              onClick={handleClose}
              className='absolute right-2 top-1 leading-4 text-xl p-2 bg-white rounded-full text-black'
            >
              x
            </motion.button>
            <motion.div className='flex flex-col font-bold font-sans items-start justify-start text-left text-xl'>
              <motion.span className='text-sm text-[#5e5e5e]'>
                Станом на {getCurrentDateAndTime()}
              </motion.span>
              {balance < 0 && (
                <motion.div className='mb-4 mt-1'>
                  У вас <span className='text-red-500'>заборговано</span>{" "}
                  {convertToTimeString(indebtedLessons)}
                </motion.div>
              )}
              <motion.div className='mb-2'>
                <p>
                  Оплатіть <span className='font-extrabold'>години</span>{" "}
                  завчасно
                </p>
                <p className='text-sm text-[#3c3c3c]'>
                  (рекомендується оплачувати завчасно увесь тиждень занять)
                </p>
              </motion.div>
              <motion.p className='font-sans font-medium'>
                Оберіть кількість годин
              </motion.p>
              <motion.span className='text-sm mb-2 text-[#3c3c3c]'>
                (Включно з годинами для оплати боргу)
              </motion.span>
              <motion.div className='flex gap-2 items-center'>
                <button
                  onClick={handleDecreaseLessonsToPay}
                  type='button'
                  className='p-2 px-4 rounded-md border'
                >
                  -
                </button>
                <span>{convertToTimeString(lessonsToPay)}</span>
                <button
                  onClick={handleIncreaseLessonsToPay}
                  type='button'
                  className='p-2 px-4 rounded-md border'
                >
                  +
                </button>
              </motion.div>
              <motion.div className='mt-4 font-sans border w-full text-lg rounded p-2 bg-[#e3e3e3]'>
                Очікуваний результат: <br /> Оплачено боргу:{" "}
                {lessonsToPay >= indebtedLessons
                  ? convertToTimeString(indebtedLessons)
                  : convertToTimeString(0)}
                <br />
                <p>
                  Оплачено годин завчасно:{" "}
                  {lessonsToPay - indebtedLessons > 0
                    ? convertToTimeString(lessonsToPay - indebtedLessons)
                    : convertToTimeString(0)}
                </p>
              </motion.div>
              <motion.div className='text-2xl text-center my-4'>
                Разом до сплати:{" "}
                <span className='text-[#8b25ff]'>
                  {totalLessonsToPay * price} грн
                </span>
              </motion.div>
            </motion.div>
            <button
              className='w-[164px] md:w-[176px] xl:w-[200px] inline-block p-3 xl:p-4 text-center font-semibold text-lg tracking-wide font-open-sans md:-tracking-tight leading-6 transition-colors duration-300 text-white bg-[#000000] hover:bg-[#19191b] rounded-lg'
              type='button'
              onClick={handlePay}
            >
              {t[lang].payment.payBtn}
            </button>
          </motion.div>
        </div>
      </Modal>
    </div>
  );
};
