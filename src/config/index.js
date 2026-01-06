// @ts-nocheck
const config = {
  app: {
    APP_ENV: import.meta.env.VITE_APP_ENV,
    API_URL_PROD: import.meta.env.VITE_API_URL_PROD,
    API_URL_DEV: import.meta.env.VITE_API_URL_DEV,
  },
};

export default config;
