import { IAddStudentForm, IEditStudentForm } from "@/types/form";
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
        body: body,
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
  }),
});

export const {
  useRegisterStudentMutation,
  useGetStudentsQuery,
  useUpdateStudentMutation,
  useGetStudentByLoginQuery,
  useDeleteStudentMutation,
} = studentApi;
