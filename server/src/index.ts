import config from "./configs";
import { getApp } from "./app";

export const app = getApp();

app.listen({
  port: config.server.port,
});
