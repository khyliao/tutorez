import { IAddStudentForm } from "@/types/form";
import { api } from "./api";

export const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerStudent: builder.mutation({
      query: (student: IAddStudentForm) => ({
        body: student,
        url: "/api/studentRegister",
        method: "PUT",
      }),
      invalidatesTags: ["Student"],
    }),
    getStudents: builder.query({
      query: (tutor) => `/api/students?tutor=${tutor}`,
      providesTags: ["Student"],
    }),
  }),
});

export const { useRegisterStudentMutation, useGetStudentsQuery } = studentApi;
