export interface Payment {
  date: string;
  price: number;
  type: string;
  id: number;
  amount: number;
  currentBalance: number;
}

export interface Lesson {
  date: string;
  type: string;
  paid: boolean;
  tutorReview: number;
  duration: number;
  isHomeworkCompleted: boolean;
  id: number;
  comment: string;
}
