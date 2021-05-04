import axios, { AxiosRequestConfig } from "axios";

const baseConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:5000/api",
};

export const api = axios.create(baseConfig);