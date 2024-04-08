import Fastify from "fastify";
import cors from "@fastify/cors";
//import { validateToken } from "./services/user.server";
import config from "./config";
import convfastify from "convfastify";

export const getApp = () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(cors, {
    allowedHeaders: config.server.cors,
  });

  fastify.register(
    convfastify()
      .loadFrom(`${__dirname}/routes/**/*.js`)
      .serveSwagger({
        swagger: {
          openapi: {
            info: {
              title: "OpenAPI definition",
              version: "v0",
            },
            components: {
              securitySchemes: {
                bearerAuth: {
                  type: "http",
                  scheme: "bearer",
                },
              },
            },
            security: [{ bearerAuth: [] }],
          },
        },
      })
      .register()
  );

  return fastify;
};
