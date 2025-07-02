"use client";

import { useState } from "react";
import StudentStats from "../../StudentStats";
import { DayPicker } from "react-day-picker";
import { uk } from "react-day-picker/locale";
import "react-day-picker/style.css";
import LessonCardInfo from "../../LessonCardInfo";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import { useAppSelector } from "@hooks/reduxHooks";
import AdvertBanner from "@components/AdvertBanner";
import EnglishAdvertIcon from "@assets/english-advert.svg";
import MathsAdvertIcon from "@assets/maths-advert.svg";
import HistoryIcon from "@assets/history-advert.svg";
import BiologyIcon from "@assets/biology-advert.svg";
import UkrainianIcon from "@assets/ukrainian-advert.svg";
import ProgrammingIcon from "@assets/programming-advert.svg";
import Title from "../../AnalyticsPageComponents/Title";
import { AdvertModal, PaymentModal } from "../../Modal";
import { convertToTimeString } from "@/lib/utils/timeFormatter";
import BalanceBar from "../../BalanceBar";

const StudentDashboard = () => {
  // const [selected, setSelected] = useState<Date>(new Date());

  const currentUser = useAppSelector(selectCurrentUser);
  const lastLessonDate =
    (currentUser.lessons &&
      currentUser.lessons[currentUser.lessons.length - 1].date) ||
    0;

  // const MONO_API_URL = "https://api.monobank.ua/api/merchant/invoice/create";
  // fetch(`${MONO_API_URL}`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     amount: 400,
  //     saveCardData: {
  //       saveCard: true,
  //     },
  //     agentFeePercent: 1.3,
  //   }),
  //   headers: {
  //     "X-token": "uAtocRfx7sJ8weZt6JtWkIKZvdcTBFhXfNwBZ7Q7NVP8",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then(console.log);

  return (
    <div className='flex flex-col gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-4 justify-start items-start md:flex-row md:justify-between md:items-center'>
        <p className='text-xl md:text-2xl lg:text-4xl font-bold'>
          Вітаємо, {currentUser.name}!
        </p>
        <BalanceBar balance={currentUser.balance}>
          <PaymentModal
            userLogin={currentUser.login}
            price={currentUser.price}
            balance={currentUser.balance}
            lastLessonDate={lastLessonDate}
          />
        </BalanceBar>
      </div>
      <StudentStats />

      {/* <div className='hidden md:block max-w-[330px] p-4 rounded-lg bg-purple-500/10  dark:bg-black/70'>
        <DayPicker
          locale={uk}
          animate
          mode='single'
          selected={selected}
          onSelect={setSelected}
          required
          classNames={{
            selected: `bg-[#4e18d8] border-[#4e18d8] text-white rounded-full dark:bg-[#d81818]`,
            today: "",
            day: "dark:text-white",
            weekdays: "dark:text-white",
            month_caption: "font-bold py-2 text-lg dark:text-white capitalize",
          }}
          styles={{
            nav_button: { backgroundColor: "white", color: "black" },
          }}
        />
      </div> */}
      <Title className='text-left text-2xl md:text-4xl'>Цікаві курси</Title>
      <AdvertBanner
        title='Англійська мова'
        subtitle='Практика, актуальні теми, швидкий прогрес для кожного рівня'
        description='Курс побудований так, аби за короткий час систематизувати знання й навчитися користуватись мовою впевнено. Тут буде багато практики, робота в парах, інтерактивні вправи й теми, що справді цікаві. Ніяких перевантажень, лише потрібне. Відчутний результат вже через 2 місяці занять!'
        img={
          <EnglishAdvertIcon className='lg:max-h-[320px] xl:max-h-[280px]' />
        }
        className='bg-[#bfd1f8] dark:bg-[#5b8efe]'
        btn={<AdvertModal />}
      />
      <AdvertBanner
        title='Математика'
        subtitle='Можливий перегляд програм різних країн (викладання англійською)'
        description='Курс побудований так, аби за короткий час систематизувати знання й навчитися користуватись мовою впевнено. Тут буде багато практики, робота в парах, інтерактивні вправи й теми, що справді цікаві. Ніяких перевантажень, лише потрібне.'
        img={<MathsAdvertIcon className='lg:max-h-[320px] xl:max-h-[280px]' />}
        className='bg-[#f2f668] dark:bg-[#f2f74e]'
        btn={<AdvertModal />}
      />
      <AdvertBanner
        title='Українська мова'
        subtitle='Для школярів, студентів та всіх, хто хоче впевнено говорити та писати'
        description='Курс допоможе не лише розібратися в складних темах, а й навчитися застосовувати знання на практиці. У програмі — сучасні приклади, інтерактивні вправи, підготовка до ЗНО/НМТ, а також розвиток мовлення та грамотності.'
        img={<UkrainianIcon className='lg:max-h-[320px] xl:max-h-[280px]' />}
        className='bg-[#d6f5f7] dark:bg-[#8df3fa]'
        btn={<AdvertModal />}
      />
      <AdvertBanner
        title='Історія України'
        subtitle='Для тих, хто хоче глибше зрозуміти минуле та краще орієнтуватися в сучасності'
        description='Поглиблюємо знання про ключові події та героїв України, вивчаємо хронологію і контексти, щоб краще розуміти сучасність. Практичні завдання та обговорення допоможуть зробити історію живою і цікавою.'
        img={<HistoryIcon className='lg:max-h-[320px] xl:max-h-[280px]' />}
        className='bg-[#f9e4de] dark:bg-[#fe9274]'
        btn={<AdvertModal />}
      />
      <AdvertBanner
        title='Біологія'
        subtitle='Включно з програмою ЄС'
        description='Курс допоможе зрозуміти основи живої природи, будову організмів та їх функції. Заняття з лабораторними завданнями та інтерактивними моделями розкриють таємниці природи.'
        img={<BiologyIcon className='lg:max-h-[320px] xl:max-h-[280px]' />}
        className='bg-[#d9f0e3] dark:bg-[#a2f4c5]'
        btn={<AdvertModal />}
      />
      <AdvertBanner
        title='Програмування'
        subtitle='Frontend / Backend / Fullstack / Scratch / Для дітей'
        description='Навчання логіці програмування, алгоритмам та створенню власних проєктів. Практичні вправи на популярних мовах допоможуть швидко закріпити знання і почати писати код.'
        img={<ProgrammingIcon className='lg:max-h-[320px] xl:max-h-[280px]' />}
        className='bg-[#d9e9f7] dark:bg-[#86c3f9]'
        btn={<AdvertModal />}
      />
    </div>
  );
};

export default StudentDashboard;
