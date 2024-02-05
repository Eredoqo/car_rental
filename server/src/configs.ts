import { cleanEnv, num, str } from "envalid";

require("dotenv").config();

const envs = cleanEnv(process.env, {
  PORT: num({
    desc: "Port number",
    default: 8080,
  }),
  TOKEN_LIFESPAN: num({
    desc: "Token expriraton in minuts",
    default: 10000,
  }),
  TOKEN_SECRET_KEY: str({
    desc: "Token secret",
    default: "U23r/9Ap0twX",
  }),
  CORS_ALLOWED_ORIGINS: str({
    desc: "Allow origins",
    default: "*",
  }),
});

const config = {
  server: {
    port: envs.PORT,
    cors: envs.CORS_ALLOWED_ORIGINS,
  },
  token: {
    lifespan: envs.TOKEN_LIFESPAN,
    secret: envs.TOKEN_SECRET_KEY,
  },
};

export default config;
