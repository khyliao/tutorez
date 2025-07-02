"use client";
import LessonCardInfo from "@/app/components/LessonCardInfo";
import { convertToTimeString } from "@utils/timeFormatter";
import { useGetStudentByLoginQuery } from "@store/api/studentApi";
import { useParams } from "next/navigation";
import BalanceBar from "@/app/components/BalanceBar";

const StudentPage = () => {
  const { login } = useParams();
  const { data: studentInfo, isLoading } = useGetStudentByLoginQuery(login);

  if (isLoading) {
    return (
      <div className='m-4 font-bold montserrat dark:text-white'>
        Завантаження...
      </div>
    );
  }

  const actions = [
    ...(studentInfo.lessons ?? []),
    ...(studentInfo.payments ?? []),
  ].sort((a, b) => a.id - b.id);

  return (
    <>
      <div className='py-2 px-2 md:px-4 md:py-4 w-full font-montserrat max-h-screen overflow-scroll'>
        <div className='xl:flex justify-between xl:items-center mb-2 xl:mb-4'>
          <div className='mb-2'>
            <h1 className='text-[#211C37] font-bold text-lg md:text-3xl dark:text-white'>
              Поточна успішність &quot;{login}&quot;
            </h1>
            <span className='block text-[#85878D] text-sm md:text-lg dark:text-[#e0e0e0]'>
              Архів усіх проведених занять та платежів.
            </span>
          </div>
          <BalanceBar balance={studentInfo.balance} />
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 md:gap-6'>
          {actions
            .map((action) => <LessonCardInfo key={action.id} action={action} />)
            .reverse()}
        </ul>
      </div>
    </>
  );
};

export default StudentPage;
