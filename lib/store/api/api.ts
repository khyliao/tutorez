import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Tutors", "Student"],
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({}),
});
