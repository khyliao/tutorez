import { ICreateUserForm } from "@/types/form";
import { api } from "./api";

type User = {
  login: string;
  password: string;
};

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user: ICreateUserForm) => ({
        body: user,
        url: "/api/userRegister",
        method: "PUT",
      }),
    }),
    loginUser: builder.mutation({
      query: (user: User) => ({
        body: user,
        url: "/api/userLogin",
        method: "POST",
      }),
    }),
    getUsers: builder.query({ query: (role) => `/api/users?role=${role}` }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUsersQuery,
} = userApi;
