const config = {
  app: {
    API_URL_PROD: import.meta.env.VITE_API_URL_PROD,
    API_URL_DEV: import.meta.env.VITE_API_URL_DEV,
    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  },

};

export default config;
