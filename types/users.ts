interface ILesson {
  id: number;
  duration: number;
  price: number;
  tutorReview: number;
  type: string;
  isHomeworkCompleted: boolean;
  date: string;
  comment: string;
}

export interface IUser {
  id: string;
  login: string;
  name: string;
  password: string;
  price: string;
  role: "student" | "tutor" | "admin";
  status: string;
  subject: string;
  lessons: ILesson[];
  contact: string;
  tutor: string;
  comment?: string;
  balance: number;
}
