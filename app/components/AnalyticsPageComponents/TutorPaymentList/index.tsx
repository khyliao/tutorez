import { useState } from "react";
import { LineChart as IconLineChart } from "lucide-react";
import Title from "../Title";
import { PaymentInfoDBScheme } from "@/types/lineChart";
import LineChart from "@components/AnalyticsPageComponents/LineChart";

interface ITutorPaymentListProps {
  data: PaymentInfoDBScheme[];
}

interface TutorChartData {
  diagram: {
    date: string;
    amount: number;
  }[];
  tutorInfoByMonth: Record<
    string,
    {
      commision: number;
      paid: boolean;
      totalHours: number;
      averageLessonCost: number;
      percentage: number;
      amount: number;
    }
  >;
}

const TutorPaymentList = ({ data }: ITutorPaymentListProps) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const tutorDataMap: Record<string, TutorChartData> = {};
  const monthList: string[] = [];

  data.forEach((payment) => {
    const { id: date, info } = payment;
    if (!monthList.includes(date)) monthList.push(date);

    for (const tutorLogin in info) {
      const tutorInfo = info[tutorLogin];
      if (!tutorDataMap[tutorLogin]) {
        tutorDataMap[tutorLogin] = {
          diagram: [],
          tutorInfoByMonth: {},
        };
      }
      tutorDataMap[tutorLogin].diagram.push({
        date,
        amount: tutorInfo.amount ?? 0,
      });
      tutorDataMap[tutorLogin].tutorInfoByMonth[date] = {
        commision: tutorInfo.commision,
        paid: tutorInfo.paid,
        totalHours: tutorInfo.totalHours,
        averageLessonCost: tutorInfo.averageLessonCost,
        percentage: tutorInfo.percentage,
        amount: tutorInfo.amount ?? 0,
      };
    }
  });

  const latestMonth = monthList.at(-1) ?? "";

  return (
    <div>
      <Title>Успішність викладачів</Title>

      <div className='flex flex-wrap gap-2 mt-4'>
        <button
          onClick={() => setSelectedMonth(null)}
          className={`px-3 py-1 rounded border text-sm ${
            selectedMonth === null ? "bg-primary text-white dark:bg-[#000]" : ""
          }`}
        >
          Усі місяці
        </button>
        {monthList.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-3 py-1 rounded border text-sm ${
              selectedMonth === month
                ? "bg-primary text-white dark:bg-[#000]"
                : ""
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-10 mt-6'>
        {Object.entries(tutorDataMap).map(
          ([tutorLogin, { diagram, tutorInfoByMonth }]) => {
            const info = selectedMonth
              ? tutorInfoByMonth[selectedMonth]
              : tutorInfoByMonth[latestMonth];

            return (
              <div key={tutorLogin} className='border rounded-xl p-4 shadow'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <h3 className='text-lg font-semibold'>{tutorLogin}</h3>
                    <p className='text-sm text-muted-foreground mt-1'>
                      <span className='font-medium'>Годин:</span>{" "}
                      {info?.totalHours ?? 0}
                      <br />
                      <span className='font-medium'>Середня ціна:</span>{" "}
                      {info?.averageLessonCost ?? 0} грн
                      <br />
                      <span className='font-medium'>Сума:</span>{" "}
                      {info?.amount ?? 0} грн
                      <br />
                      <span className='font-medium'>Комісія:</span>{" "}
                      {info?.commision ?? 0} грн
                    </p>
                  </div>
                  <IconLineChart className='text-muted-foreground' />
                </div>
                {selectedMonth === null && (
                  <div className='h-60'>
                    <LineChart data={diagram} />
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TutorPaymentList;
