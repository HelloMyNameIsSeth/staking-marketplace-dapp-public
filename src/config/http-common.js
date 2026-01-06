import axios from "axios";
import config from "./index";
import { SessionStorageService } from "@/services";

// *********************************************************

const PRODUCTION_ENV = "prod";

const { APP_ENV, API_URL_DEV, API_URL_PROD } = config.app;

const API_URL = APP_ENV == PRODUCTION_ENV ? API_URL_PROD : API_URL_DEV;

// *********************************************************

var http = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "api-key": import.meta.env.VITE_API_KEY,
    "Content-Type": "application/json; charset=utf-8",
  },
});

// *********************************************************

http.interceptors.request.use(
  async (config) => {
    let auth = SessionStorageService.getMetamaskSignature();
    config.headers["Authorization"] = "Bearer " + auth.signature;
    return config;
  },
  (error) => {
    console.error("ERROR:", error.message);
    return Promise.reject(error);
  }
);

// *********************************************************

export default http;
