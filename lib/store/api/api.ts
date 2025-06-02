import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Tutors", "Student", "UpdateLessons", "Logs", "Payments"],
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({}),
});
