"use client";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import LineChart from "@components/LineChart";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { CardFooter } from "@/components/ui/card";
import { useGetPaymentsQuery } from "@/lib/store/api/paymentsApi";
import { ILineChartData, PaymentInfoDBScheme } from "@/types/lineChart";

const Analytics = () => {
  const { login, percentage } = useAppSelector(selectCurrentUser);
  const { data: payments } = useGetPaymentsQuery(null);
  const paymentsValues: PaymentInfoDBScheme[] = Object.values(payments ?? {});
  console.log(paymentsValues);
  const data: ILineChartData[] = paymentsValues.reduce(
    (acc: ILineChartData[], payment: PaymentInfoDBScheme) => {
      const tutorData = payment.info[login];

      return [
        ...acc,
        {
          date: payment.id,
          amount: tutorData.amount,
          totalHours: tutorData.totalHours,
          percentage: tutorData.percentage,
        },
      ];
    },
    []
  );
  const dataForLineChart = data.map(({ date, amount }) => ({ date, amount }));

  if (!data.length && login !== "khilyao") return <div>Завантаження...</div>;
  const lastItem = data.at(-1);
  const preLastItem = data.at(-2);

  return (
    <>
      <div className='flex flex-1 flex-col'>
        <div className='@container/main flex flex-1 flex-col gap-2'>
          <div className='h-[400px] mb-8 px-6'>
            <LineChart data={dataForLineChart} />
          </div>
          <div className='grid px-2 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-4  md:gap-6'>
              <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t  *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6'>
                <div className='rounded-xl border  text-card-foreground shadow'>
                  <div className='relative flex flex-col space-y-1.5 p-6'>
                    <div className='text-sm text-muted-foreground'>
                      Поточний місяць
                    </div>
                    <div className='text-2xl font-semibold tabular-nums'>
                      {lastItem?.amount ?? 0} грн
                    </div>
                    {percentage !== 0 && (
                      <p className='@[250px]/card:text-2xl text-xl text-red-500 font-semibold tabular-nums'>
                        {(lastItem?.percentage ?? 0) * 100}% -{" "}
                        {(lastItem?.amount ?? 0) * (lastItem?.percentage ?? 0)}{" "}
                        грн
                      </p>
                    )}
                    <p>Всього робочих годин: {lastItem?.totalHours || 0}</p>
                    <p>
                      Середня ціна за заняття:{" "}
                      {lastItem?.totalHours
                        ? (
                            (lastItem?.amount ?? 0) /
                            (lastItem?.totalHours ?? 0)
                          ).toFixed(2)
                        : 0}{" "}
                      грн
                    </p>
                    {/* <div className=''>
                    <Badge
                      variant='outline'
                      className='flex gap-1 rounded-lg text-xs'
                    >
                      {trend === "up" ? (
                        <TrendingUpIcon className='size-3 text-green-500' />
                      ) : (
                        <TrendingDownIcon className='size-3 text-red-500' />
                      )}
                      {percentageChange.toFixed(2)}%
                    </Badge>
                  </div> */}
                  </div>
                  <CardFooter className='flex-col items-start gap-1 text-sm'>
                    {/* <div className='line-clamp-1 flex gap-2 font-medium'>
                    {trend === "up" ? (
                      <>
                        Тенденція до прирісту цього місяця{" "}
                        <TrendingUpIcon className='size-4' />
                      </>
                    ) : (
                      <>
                        Тенденція до зниження цього місяця{" "}
                        <TrendingDownIcon className='size-4' />
                      </>
                    )}
                  </div> */}
                  </CardFooter>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-6'>
              <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t  *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6'>
                <div className='rounded-xl border  text-card-foreground shadow'>
                  <div className='relative flex flex-col space-y-1.5 p-6'>
                    <div className='text-sm text-muted-foreground'>
                      Попередній місяць
                    </div>
                    <div className='text-2xl font-semibold tabular-nums'>
                      {preLastItem?.amount ?? 0} грн
                    </div>
                    {percentage !== 0 && (
                      <p className='@[250px]/card:text-2xl text-xl text-red-500 font-semibold tabular-nums'>
                        {(preLastItem?.percentage ?? 0) * 100}% -{" "}
                        {(preLastItem?.amount ?? 0) *
                          (preLastItem?.percentage ?? 0)}
                        грн
                      </p>
                    )}
                    <p>Всього робочих годин: {preLastItem?.totalHours || 0}</p>
                    <p>
                      Середня ціна за заняття:{" "}
                      {(
                        (preLastItem?.amount ?? 0) /
                        (preLastItem?.totalHours ?? 0)
                      ).toFixed(2)}{" "}
                      грн
                    </p>
                    {/* <div className=''>
                    <Badge
                      variant='outline'
                      className='flex gap-1 rounded-lg text-xs'
                    >
                      {trend === "up" ? (
                        <TrendingUpIcon className='size-3 text-green-500' />
                      ) : (
                        <TrendingDownIcon className='size-3 text-red-500' />
                      )}
                      {percentageChange.toFixed(2)}%
                    </Badge>
                  </div> */}
                  </div>
                  <CardFooter className='flex-col items-start gap-1 text-sm'>
                    {/* <div className='line-clamp-1 flex gap-2 font-medium'>
                    {trend === "up" ? (
                      <>
                        Тенденція до прирісту цього місяця{" "}
                        <TrendingUpIcon className='size-4' />
                      </>
                    ) : (
                      <>
                        Тенденція до зниження цього місяця{" "}
                        <TrendingDownIcon className='size-4' />
                      </>
                    )}
                  </div> */}
                  </CardFooter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
