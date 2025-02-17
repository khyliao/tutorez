export type Inputs = {
  name: string;
  email: string;
  phone: string;
  other?: string;
  subject?: string;
};

export interface ICreateUserForm {
  name: string;
  subject: string;
  contact: string;
  role: string;
  comment: string;
  password: string;
  login: string;
}

export interface IAddStudentForm {
  name: string;
  subject: string;
  login: string;
  category: string;
  contact: string;
  price: string;
  status: string;
  comment: string;
  role: string;
  tutor: string;
  balance: number;
  payments: [];
}

export interface IEditStudentForm {
  name: string;
  subject: string;
  contact: string;
  price: string;
  status: string;
  comment: string;
  role: string;
  tutor: string;
  balance: number;
}

export interface IAddPaymentForm {
  amount: number;
}

export interface IAddLessonForm {
  duration: number;
  tutorReview: number;
  comment: string;
}
