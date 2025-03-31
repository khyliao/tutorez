import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SectionCardsProps = {
  data: {
    month: string;
    amount: number;
    workHours: number;
  }[];
  percentage: number;
};

export function SectionCards({ data, percentage }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {data.map((item, index) => {
        const previousValue = index > 0 ? data[index - 1].amount : item.amount;
        const trend = item.amount >= previousValue ? "up" : "down";
        const percentageChange =
          ((item.amount - previousValue) / previousValue) * 100;

        return (
          <Card key={index} className="@container/card">
            <CardHeader className="relative">
              <CardDescription>{item.month}</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                {item.amount} грн
              </CardTitle>
              {percentage !== 0 && (
                <p className="@[250px]/card:text-2xl text-xl text-red-500 font-semibold tabular-nums">
                  {percentage * 100}% - {item.amount * percentage} грн
                </p>
              )}
              <p>Всього робочих годин: {item.workHours || 0}</p>
              <p>
                Середня ціна за заняття:{" "}
                {(item.amount / item.workHours || 0).toFixed(2)} грн
              </p>
              <div className="absolute right-4 top-4">
                {/* <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  {trend === "up" ? (
                    <TrendingUpIcon className="size-3 text-green-500" />
                  ) : (
                    <TrendingDownIcon className="size-3 text-red-500" />
                  )}
                  {percentageChange.toFixed(2)}%
                </Badge> */}
              </div>
            </CardHeader>
            {/* <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {trend === "up" ? (
                  <>
                    Тенденція до прирісту цього місяця{" "}
                    <TrendingUpIcon className="size-4" />
                  </>
                ) : (
                  <>
                    Тенденція до зниження цього місяця{" "}
                    <TrendingDownIcon className="size-4" />
                  </>
                )}
              </div>
            </CardFooter> */}
          </Card>
        );
      })}
    </div>
  );
}
