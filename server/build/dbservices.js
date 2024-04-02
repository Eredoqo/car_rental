"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const singleton_server_1 = require("./singleton.server");
// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = (0, singleton_server_1.singleton)("prisma", () => new client_1.PrismaClient());
exports.prisma = prisma;
prisma.$connect();
//# sourceMappingURL=dbservices.js.map