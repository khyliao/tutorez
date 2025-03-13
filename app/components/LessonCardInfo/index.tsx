import { convertToTimeString } from "@/lib/utils/timeFormatter";
import DeleteCardBtn from "@assets/deleteCardBtn.svg";
import sadIconHW from "@assets/student/sad.png";
import coolIconHW from "@assets/student/cool.png";
import FilledStar from "@assets/student/filledStar.svg";
import EmptyStar from "@assets/student/emptyStar.svg";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  useDeleteLessonMutation,
  useDeletePaymentMutation,
  useUpdateDateMutation,
} from "@store/api/studentApi";
import { showErrorToast, showSuccessToast } from "@/lib/utils/toastUtils";

interface Lesson {
  date: string;
  type: string;
  paid: boolean;
  tutorReview: number;
  duration: number;
  isHomeworkCompleted: boolean;
  id: number;
  comment: string;
}

interface Payment {
  date: string;
  price: number;
  type: string;
  id: number;
  amount: number;
}

interface IPaymentCardInfoProps {
  action: Payment | Lesson;
}

const LessonCardInfo = ({ action }: IPaymentCardInfoProps) => {
  const { login } = useParams() as { login: string };
  const { id, type } = action;
  const [newSelectedDate, setNewSelectedDate] = useState(action.date);
  const [deleteLesson] = useDeleteLessonMutation();
  const [deletePayment] = useDeletePaymentMutation();
  const [updateDate] = useUpdateDateMutation();

  const deleteCardLesson = async (id: number, duration: number) => {
    try {
      await deleteLesson({ login, id, duration });
      showSuccessToast("Заняття успішно видалено! Баланс годин оновився!");
    } catch (error) {
      console.error("Error removing lesson:", error);
    }
  };

  const deleteCardPayment = async (id: number, amount: number) => {
    try {
      showSuccessToast("Платіж успішно видалено! Баланс годин оновився!");
      await deletePayment({ login, id, amount });
    } catch (error) {
      console.error("Error removing lesson:", error);
    }
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSelectedDate(e.target.value);
  };

  const onDateSubmit = async () => {
    if (action.date === newSelectedDate) return;
    try {
      await updateDate({ login, id, type: type + "s", date: newSelectedDate });
      showSuccessToast("Дата успішно оновлена!");
    } catch (e) {
      showErrorToast("Помилка оновлення дати! Спробуйте пізніше!");
      console.error(e);
    }
  };

  const onPressEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  if ("isHomeworkCompleted" in action) {
    const { isHomeworkCompleted, tutorReview, duration, paid, id } = action;

    return (
      <div className="w-full transition-colors shadow-lessonCardInfoMobile md:shadow-lessonCardInfoTabletAndMore dark:shadow-lessonCardInfoMobileDark md:dark:shadow-lessonCardInfoTabletAndMoreDark leading-6 px-4 py-3 md:px-6 md:py-5 rounded-[20px] border-[4px] md:border-[5px] bg-[#f4c9f775] border-[#50135673] dark:bg-[#d6aee9] dark:border-[#6b4e6c]">
        <div className="flex mb-2 pb-[10px] border-b border-b-[#b48888] items-center justify-between">
          <h2 className=" text-base lg:text-lg font-bold tracking-wider text-[#0f0f0f] ">
            Деталі заняття
          </h2>
          <button onClick={() => deleteCardLesson(id, duration)}>
            <DeleteCardBtn />
          </button>
        </div>
        <div className="font-semibold flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <span className="text-xs md:text-sm font-montserrat">
              Дата заняття
            </span>
            <input
              className="text-xs focus:outline-none text-center max-w-[70px] md:text-sm md:max-w-[81px] bg-transparent transition-colors cursor-pointer rounded border-none hover:bg-[#dfd3fd] focus:bg-[#bbb9fd]"
              type="text"
              defaultValue={newSelectedDate}
              onChange={handleDate}
              onKeyDown={onPressEnterKey}
              onBlur={onDateSubmit}
              maxLength={10}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs md:text-sm font-semibold">Тривалість</span>
            <span className="text-xs md:text-sm font-semibold ">
              {convertToTimeString(duration)}
            </span>
          </div>
          {/* <div className="flex items-center justify-between gap-2">
            <span className="text-xs md:text-sm font-semibold ">Оплачено</span>
            <span className="text-xs md:text-sm font-semibold ">
              {paid ? "Так" : "Ні"}
            </span>
          </div> */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs md:text-sm font-semibold ">
              Виконання д/з
            </span>
            <span className="text-xs md:text-sm font-semibold ">
              <Image
                width={24}
                src={isHomeworkCompleted ? coolIconHW : sadIconHW}
                alt="homework"
              />
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs md:text-sm font-semibold ">
              Відгук за заняття
            </span>
            <div className="flex h-5 py-[2px] px-[5px] bg-[#0F0C0C] rounded">
              {[...Array(5)].map((_, index) =>
                index < tutorReview ? (
                  <FilledStar key={index} />
                ) : (
                  <EmptyStar key={index} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if ("amount" in action) {
    const { amount, id } = action;

    return (
      <div className="w-full transition-colors shadow-lessonCardInfoMobile md:shadow-lessonCardInfoTabletAndMore dark:shadow-lessonCardInfoMobileDark md:dark:shadow-lessonCardInfoTabletAndMoreDark leading-6 px-4 py-3 md:px-6 md:py-5 rounded-[20px] border-[4px] md:border-[6px] bg-[#f9f2c274] border-[#716c0273] dark:bg-[#f2ebc9] dark:border-[#aea830]">
        <div className="flex mb-2 pb-[10px] border-b border-b-[#b48888] items-center justify-between">
          <h2 className=" text-base lg:text-lg font-bold tracking-wider text-[#0f0f0f] ">
            Платіж
          </h2>
          <button onClick={() => deleteCardPayment(id, amount)}>
            <DeleteCardBtn />
          </button>
        </div>
        <div className="font-semibold flex flex-col gap-[10px]">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs md:text-sm font-montserrat">
              Дата платежу
            </span>
            <input
              className="text-xs focus:outline-none text-center max-w-[70px] md:text-sm md:max-w-[81px] bg-transparent transition-colors cursor-pointer rounded border-none hover:bg-[#dfd3fd] focus:bg-[#bbb9fd]"
              type="text"
              defaultValue={newSelectedDate}
              onChange={handleDate}
              onKeyDown={onPressEnterKey}
              onBlur={onDateSubmit}
              maxLength={10}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs md:text-sm font-semibold ">
              Оплачено занять
            </span>
            <span className="text-xs md:text-sm font-semibold ">
              {convertToTimeString(amount)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default LessonCardInfo;
