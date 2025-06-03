import { ILogsReq} from "@/types/logs";
import { api } from "./api";

export const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLogs: builder.query({
      query: ({ date }: ILogsReq) => `http://${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_API_IP}:8079/logs/${date}`,
      providesTags: ["Logs"],
    }),
    getDaysForLogs: builder.query({
      query: () => `http://${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_API_IP}:8079/logs/days`,
    }),
  }),
});

export const { useGetLogsQuery, useGetDaysForLogsQuery } = studentApi;
