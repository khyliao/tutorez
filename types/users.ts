export interface IUser {
  id: string;
  login: string;
  name: string;
  password: string;
  price: string;
  role: "student" | "tutor" | "admin";
  status: string;
  subject: string;
  contact: string;
  tutor: string;
  comment?: string;
  balance: number;
}
