import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "../Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QrModal from "../QrModal";
import PlusIcon from "@assets/plus.svg";
import { motion } from "framer-motion";
import { useLang } from "@hooks/useLang";
import {
  convertToTimeString,
  getCurrentDateAndTime,
} from "@/lib/utils/timeFormatter";

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

interface IPaymentModal {
  balance: number;
  price: number;
  userLogin: string;
}

export const PaymentModal = ({ balance, price, userLogin }: IPaymentModal) => {
  const [isPaymentModalFormActive, setIsPaymentModalFormActive] =
    useState(false);
  const { lang, t } = useLang();
  const [totalLessonsToPay, setTotalLessonsToPay] = useState(Math.abs(balance));
  const [lessonsToPay, setLessonsToPay] = useState(0);
  const indebtedLessons = convertToTimeString(Math.abs(balance));

  const handleOpen = () => setIsPaymentModalFormActive(true);
  const handleClose = () => setIsPaymentModalFormActive(false);

  const handleDecreaseLessonsToPay = () => {
    setLessonsToPay(lessonsToPay - 1);
    setTotalLessonsToPay((totalLessonsToPay) =>
      totalLessonsToPay > 0 ? totalLessonsToPay - 1 : totalLessonsToPay
    );
  };

  const handleIncreaseLessonsToPay = () => {
    setLessonsToPay(lessonsToPay + 1);
    setTotalLessonsToPay((totalLessonsToPay) => totalLessonsToPay + 1);
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
      console.log(res.ok);
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
          <div className='relative m-4 bg-white p-6 pt-7 rounded-lg shadow-lg max-w-sm text-center'>
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
            <div className='flex flex-col font-bold font-sans items-start justify-start text-left text-xl'>
              <span className='text-sm text-[#5e5e5e]'>
                Станом на {getCurrentDateAndTime()}
              </span>
              {balance < 0 && (
                <div className='mb-4 mt-1'>
                  У вас <span className='text-red-500'>заборговано</span>{" "}
                  {indebtedLessons}
                </div>
              )}
              <div className='mb-2'>
                <p>
                  Оплатіть <span className='font-extrabold'>години</span>{" "}
                  завчасно
                </p>
                <p className='text-sm text-[#3c3c3c]'>
                  (рекомендується оплачувати завчасно увесь тиждень занять)
                </p>
              </div>
              <p className='font-sans font-medium'>Оберіть кількість годин</p>
              <div className='flex gap-2 items-center'>
                <button
                  onClick={handleDecreaseLessonsToPay}
                  type='button'
                  className='p-2 px-4 rounded-md border'
                >
                  -
                </button>
                <span>{lessonsToPay}</span>
                <button
                  onClick={handleIncreaseLessonsToPay}
                  type='button'
                  className='p-2 px-4 rounded-md border'
                >
                  +
                </button>
              </div>
              <div className='mt-4 font-sans border w-full text-lg rounded p-2 bg-[#e3e3e3]'>
                Очікуваний результат: <br /> Оплачено боргу: {indebtedLessons}
                <br />
                <p>
                  Оплачено годин завчасно:{" "}
                  {convertToTimeString(lessonsToPay) || 0}
                </p>
              </div>
              <div className='text-2xl text-center my-4'>
                Разом до сплати:{" "}
                <span className='text-[#8b25ff]'>
                  {totalLessonsToPay * price} грн
                </span>
              </div>
            </div>
            <motion.button
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
              className='w-[164px] md:w-[176px] xl:w-[200px] inline-block p-3 xl:p-4 text-center font-semibold text-lg tracking-wide font-open-sans md:-tracking-tight leading-6 transition-colors duration-300 text-white bg-[#000000] hover:bg-[#19191b]  rounded-lg'
              type='button'
              onClick={handlePay}
            >
              {t[lang].payment.payBtn}
            </motion.button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
