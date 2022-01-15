import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";
import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  token: string;
}

const { token }: Preferences = getPreferenceValues();

axios.defaults.baseURL = "https://api.clickup.com/api/v2";
axios.defaults.headers.common["Authorization"] = token;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.headers.get["Content-Type"] = "application/json; charset=utf-8";

async function ClickUpClient<T>(
  endpoint: string,
  method?: string,
  data?: Record<string, any>,
  headers?: AxiosRequestHeaders
): Promise<AxiosResponse<T>> {
  switch (method) {
    case "POST":
      return await axios.post<T>(`${endpoint}`, data, { headers });
    default:
      return await axios.get<T>(`${endpoint}`, headers);
  }
}

export { ClickUpClient };
