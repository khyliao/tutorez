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
    }),
  }),
});

export const { useRegisterStudentMutation } = studentApi;
