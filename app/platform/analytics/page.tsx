"use client";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import { useGetStudentsQuery } from "@/lib/store/api/studentApi";

import { useEffect } from "react";
import { Lesson } from "@/types/lessons";
import { SectionCards } from "@/components/section-cards";

const Analytics = () => {
  const { login, percentage } = useAppSelector(selectCurrentUser);
  const { data: students } = useGetStudentsQuery(login);

  const now = new Date();
  const currentMonth = now.getMonth();
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  const total = students?.reduce(
    (acc: Record<string, number>, student: any) => {
      student.lessons.forEach((lesson: Lesson) => {
        const [day, month, year] = lesson.date.split(".").map(Number);
        const lessonMonth = month - 1;

        if (lessonMonth === currentMonth) {
          acc.currentMonth =
            (acc.currentMonth || 0) + lesson.price * lesson.duration;
        }

        if (lessonMonth === previousMonth) {
          acc.previousMonth =
            (acc.previousMonth || 0) + lesson.price * lesson.duration;
        }
      });

      return acc;
    },
    {}
  );

  console.log(total);

  const data = [
    { month: "Поточний місяць", value: total?.currentMonth || 0 },
    { month: "Попередній місяць", value: total?.previousMonth || 0 },
  ];
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards data={data} percentage={percentage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
