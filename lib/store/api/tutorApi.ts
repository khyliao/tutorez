import { api } from "./api";

export const tutorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTutors: builder.query({
      query: () => "/api/tutors",
      providesTags: ["Tutors"],
    }),
  }),
});

export const { useGetTutorsQuery } = tutorApi;
