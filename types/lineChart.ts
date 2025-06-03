export interface ILineChartItem {
  date: string;
  amount: number;
}

export interface ILineChartData extends ILineChartItem {
  totalHours: number
  percentage: number
  time: string
}
  
export interface PaymentInfoDBScheme {
  averagePercentage: number,
  commision: number,
  date: string,
  id: string,
  income: number,
  info: Record<string, tutorPaymentItem>
}
  
export interface tutorPaymentItem {
  amount: number,
  averageLessonCost: number,
  commision: number,
  paid: boolean,
  percentage: number,
  totalHours: number
}
