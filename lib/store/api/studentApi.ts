import { IAddLessonForm, IAddPaymentForm, IAddStudentForm } from "@/types/form";
import { api } from "./api";

export const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerStudent: builder.mutation({
      query: (student: IAddStudentForm) => ({
        body: student,
        url: "/api/students/studentRegister",
        method: "PUT",
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation({
      query: (body) => ({
        body,
        url: `/api/students?student=${body.oldLogin}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Student"],
    }),
    getStudents: builder.query({
      query: (tutor) => `/api/students?tutor=${tutor}`,
      providesTags: ["Student"],
    }),
    getStudentByLogin: builder.query({
      query: (login) => `/api/students/${login}`,
      providesTags: ["Student", "UpdateLessons"],
      keepUnusedDataFor: 0,
    }),
    deleteStudent: builder.mutation({
      query: (login) => ({
        url: `/api/students/studentDelete?login=${login}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudentPayment: builder.mutation({
      query: ({ login, data }: IPayment) => ({
        body: data,
        url: `/api/students/updatePayment/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["Student"],
    }),
    addLesson: builder.mutation({
      query: ({ login, data }: ILesson) => ({
        body: data,
        url: `/api/students/addLesson/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["Student"],
    }),
    deleteLesson: builder.mutation({
      query: ({ login, id, duration }: IDeleteLesson) => ({
        body: { id, duration },
        url: `/api/students/deleteLesson/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["UpdateLessons", "Student"],
    }),
    deletePayment: builder.mutation({
      query: ({ login, id, amount }: IDeletePayment) => ({
        body: { id, amount },
        url: `/api/students/deletePayment/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["UpdateLessons", "Student"],
    }),
    updateDate: builder.mutation({
      query: ({ login, id, type, date }: IUpdateDate) => ({
        body: { id, type, date },
        url: `/api/students/updateDate/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["UpdateLessons", "Student"],
    }),
  }),
});

interface ILogin {
  login: string;
}

interface IPayment extends ILogin {
  data: IAddPaymentForm;
}

interface ILesson extends ILogin {
  data: IAddLessonForm;
}

interface IDeleteLesson extends ILogin {
  id: number;
  duration: number;
}

interface IDeletePayment extends ILogin {
  id: number;
  amount: number;
}

interface IUpdateDate extends ILogin {
  id: number;
  type: string;
  date: string;
}

export const {
  useRegisterStudentMutation,
  useGetStudentsQuery,
  useUpdateStudentMutation,
  useGetStudentByLoginQuery,
  useDeleteStudentMutation,
  useUpdateStudentPaymentMutation,
  useAddLessonMutation,
  useDeleteLessonMutation,
  useDeletePaymentMutation,
  useUpdateDateMutation,
} = studentApi;
