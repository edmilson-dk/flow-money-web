import useSWR from "swr";

import { api } from "src/services/fetchApi";

type UseFetchProps = {
  url: string;
  headers?: object;
}

export function useFetch<Data = any, Error = any>({ url, headers }: UseFetchProps) {
  const { data, error } = useSWR<Data, Error>(url, async () => {
    const response = await api.get(url, { headers });
    return response.data;
  });

  return { data, error };
}