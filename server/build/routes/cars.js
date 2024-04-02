"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const convfastify_1 = require("convfastify");
const car_controllers_1 = require("./../controllers/car.controllers");
exports.default = (0, convfastify_1.route)({
    url: "/cars",
    method: "GET",
    handler: (_, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cars = yield (0, car_controllers_1.getCarInformation)();
            reply.send(cars);
        }
        catch (error) {
            reply.status(500).send({ message: "Error fetching car information" });
        }
    }),
});
//# sourceMappingURL=cars.js.map