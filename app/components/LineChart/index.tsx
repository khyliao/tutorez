"use client";

import { useTheme } from "@/hooks/useTheme";
import { ILineChartItem } from "@/types/lineChart";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ILineChartProps {
  data: ILineChartItem[];
}

const LineChartComponent = ({ data }: ILineChartProps) => {
  const { isThemeDark } = useTheme();
  const textColor = isThemeDark ? "#7683e6" : "#101011";
  const gridColor = isThemeDark ? "#474f76" : "#0d0d0d";
  const lineColor = isThemeDark ? "#a53bf6" : "#0b0a0b";

  const amounts = data.map(({ amount }) => amount);
  const maxAmount = Math.max(...amounts);

  const yMax = Math.ceil((maxAmount * 1.2) / 1000) * 1000;

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart margin={{ top: 30 }} data={data}>
        <XAxis dataKey='date' stroke={textColor} tickMargin={10} />
        <YAxis
          stroke={textColor}
          tickMargin={8}
          domain={[0, yMax]}
          width={70}
        />
        <CartesianGrid stroke={gridColor} strokeDasharray='5 5' />
        <Tooltip
          contentStyle={{
            backgroundColor: isThemeDark ? "#1e1e1e" : "#fff",
            borderColor: gridColor,
            color: textColor,
          }}
          labelStyle={{ color: textColor }}
        />
        <Legend
          wrapperStyle={{
            color: textColor,
            fontSize: 12,
          }}
        />
        <Line
          stroke={lineColor}
          strokeWidth={2}
          type='monotone'
          dataKey='amount'
          name='Сума, грн'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
