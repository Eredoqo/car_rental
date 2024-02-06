// import Fastify from "fastify";
// import cors from "@fastify/cors";

// import config from "./configs";
// import convfastify from "convfastify";

// export const getApp = () => {
//   const fastify = Fastify({
//     logger: true,
//   });

//   fastify.register(cors, {
//     allowedHeaders: config.server.cors,
//   });

//   fastify.register(
//     convfastify()
//       .loadFrom(`${__dirname}/api/public/**/*.js`)
//       .serveSwagger({
//         swagger: {
//           openapi: {
//             info: {
//               title: "OpenAPI definition",
//               version: "v0",
//             },
//             components: {
//               securitySchemes: {
//                 bearerAuth: {
//                   type: "http",
//                   scheme: "bearer",
//                 },
//               },
//             },
//             security: [{ bearerAuth: [] }],
//           },
//         },
//       })
//       .register()
//   );

//   fastify.register(async (fastify) => {
//     fastify.addHook("preHandler", async (req, res) => {
//       if (!req.headers.authorization) {
//         return res.code(401).send({ error: "You need to be authorized" });
//       }
//     });
//     fastify.register(
//       convfastify()
//         .loadFrom(`${__dirname}/api/authenticated/**/*.js`)
//         .register()
//     );
//   });

//   return fastify;
// };
