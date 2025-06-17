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
  info: Record<string, TutorPaymentItem>
}
  
export interface TutorPaymentItem {
  amount: number,
  averageLessonCost: number,
  commision: number,
  paid: boolean,
  percentage: number,
  totalHours: number
}


export interface TutorPaymentItemWithDate extends TutorPaymentItem {
  date:string
}