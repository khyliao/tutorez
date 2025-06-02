"use client";
import { useEffect, useState } from "react";
import { useGetLogsQuery } from "@store/api/logsApi";
import { getDateKey } from "../../utils/time";
import Log from "@components/Log";
import { ILogProps } from "@components/Log";
import LogBar from "@components/LogBar";

const Logs = () => {
  const [date, setDate] = useState(getDateKey());

  const { data: logs, isLoading, error } = useGetLogsQuery({ date });

  const handleDateChange = (date: string) => {
    setDate(date);
  };

  useEffect(() => {}, [date]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading logs</p>;

  return (
    <div className='p-4 font-montserrat'>
      <LogBar onChangeDate={handleDateChange} />
      <h1 className='mt-3 font-noto-sans font-extrabold text-base md:text-xl xl:text-2xl'>
        Current Date:{" "}
        <span className='text-[#3b3bcb] dark:text-[#ffc526] '>{date}</span>
      </h1>
      <ul className='mt-3 md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap'>
        {logs.map((log: ILogProps, index: number) => (
          <Log key={index} {...log} />
        ))}
      </ul>
    </div>
  );
};

export default Logs;
