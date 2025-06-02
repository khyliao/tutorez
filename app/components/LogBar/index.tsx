"use client";
import { useGetDaysForLogsQuery } from "@store/api/logsApi";
import { CookingPot } from "lucide-react";

const LogBar = ({ onChangeDate }: ILogBarProps) => {
  const { data: daysForLogs, isLoading } = useGetDaysForLogsQuery(null);

  if (isLoading) return <>loading</>;

  return (
    <nav>
      <ul className='flex gap-2 flex-wrap'>
        {daysForLogs.map((day: string) => (
          <li
            className='p-1 px-2 bg-[#b8a8ff] dark:bg-[#5f3df6] dark:hover:bg-[#000000] dark:text-white font-noto-sans tracking-wider text-[#000] hover:bg-[#000000] hover:text-white transition-colors cursor-pointer font-medium inline-block rounded-md text-sm md:text-base'
            key={day}
            onClick={() => {
              onChangeDate(day);
            }}
          >
            {day}
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface ILogBarProps {
  onChangeDate: (date: string) => void;
}

export default LogBar;
