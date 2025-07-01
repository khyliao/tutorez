import { Lesson, Payment } from "@/types/lessons";

export interface IUser {
  id: string;
  login: string;
  percentage: number;
  balance: number;
  name: string;
  password: string;
  lessons: Lesson[];
  payments: Payment[];
  role: string;
  price: number;
  status: string;
  subject: string;
  telegram: string;
  comment?: string;
}