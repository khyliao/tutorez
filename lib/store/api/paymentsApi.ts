import { api } from "./api";

export const paymentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: () => `/api/payments`,
      providesTags: ["Payments"],
    }),
  }),
});

export const { useGetPaymentsQuery } = paymentsApi;
