import Fastify from "fastify";
import cors from "@fastify/cors";
//import { validateToken } from "./services/user.server";
import config from "./config";
import convfastify from "convfastify";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzpsptVWsTTPwbjhXLW0GuLeP51vZp7SM",
  authDomain: "rental-alb.firebaseapp.com",
  databaseURL:
    "https://rental-alb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rental-alb",
  storageBucket: "rental-alb.appspot.com",
  messagingSenderId: "755245489255",
  appId: "1:755245489255:web:f9d1f4d63dd5a2917008c2",
  measurementId: "G-EFW83EH8SB",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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
