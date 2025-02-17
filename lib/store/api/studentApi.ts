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
      providesTags: ["Student"],
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
      query: ({ login, data }: Payment) => ({
        body: data,
        url: `/api/students/updatePayment/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["Student"],
    }),
    addLesson: builder.mutation({
      query: ({ login, data }: Lesson) => ({
        body: data,
        url: `/api/students/addLesson/${login}`,
        method: "PUT",
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

type Payment = {
  data: IAddPaymentForm;
  login: string;
};

type Lesson = {
  data: IAddLessonForm;
  login: string;
};

export const {
  useRegisterStudentMutation,
  useGetStudentsQuery,
  useUpdateStudentMutation,
  useGetStudentByLoginQuery,
  useDeleteStudentMutation,
  useUpdateStudentPaymentMutation,
  useAddLessonMutation,
} = studentApi;
