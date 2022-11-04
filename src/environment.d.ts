declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      MONGO_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};
