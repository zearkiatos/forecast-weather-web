const config = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  FIREBASE: {
    API_KEY: process.env.FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: process.env.FIREBASE_APP_ID,
  },
  OPEN_WEATHER_MAP: {
    API_BASE_URL: process.env.OPEN_WEATHER_MAP_API_BASE_URL,
    API_KEY: process.env.OPEN_WEATHER_MAP_API_KEY,
    DEFAULT_CITY: process.env.OPEN_WEATHER_MAP_DEFAULT_CITY,
    VERSION: process.env.OPEN_WEATHER_MAP_VERSION
  },
};

export default config;
