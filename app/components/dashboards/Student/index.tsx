"use client";

import { useState } from "react";
import StudentStats from "../../StudentStats";
import { DayPicker } from "react-day-picker";
import { uk } from "react-day-picker/locale";
import "react-day-picker/style.css";
import LessonCardInfo from "../../LessonCardInfo";

const StudentDashboard = () => {
  const [selected, setSelected] = useState<Date>(new Date());

  return (
    <div className="flex flex-col gap-4 p-5">
      <StudentStats />
      <div className="hidden md:block max-w-[330px] p-4 rounded-lg bg-purple-500/10  dark:bg-black/70">
        <DayPicker
          locale={uk}
          animate
          mode="single"
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 md:gap-6">
          {/* {actions
            .map((action) => <LessonCardInfo key={action.id} action={action} />)
            .reverse()} */}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
