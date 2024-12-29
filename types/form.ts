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
  telegram: string;
  role: string;
  comment: string;
  password: string;
  login: string;
}
