import { route } from "convfastify";
import { createCar, CarData } from "./../../controllers/car.controllers";

export default route({
  url: "/addNewCar",
  method: "POST",
  schema: {
    tags: ["cars"],
    body: {
      type: "object",
      properties: {
        make: { type: "string" },
        model: { type: "string" },
        year: { type: "number" },
        status: { type: "string" },
        carSpec: {
          type: "object",
          properties: {
            carTitle: { type: "string" },
            image: { type: "string" },
            description: { type: "string" },
            rated: { type: "integer" },
            body: { type: "string" },
            price: { type: "integer" },
            mileage: { type: "integer" },
            transmission: { type: "string" },
            seats: { type: "integer" },
            fuel: { type: "string" },
            gps: { type: "boolean" },
            childSeat: { type: "string" },
            aircondition: { type: "boolean" },
            music: { type: "boolean" },
            carKit: { type: "boolean" },
            audio: { type: "boolean" },
            climateControl: { type: "boolean" },
          },
          required: [
            "carTitle",
            "image",
            "description",
            "rated",
            "body",
            "price",
            "mileage",
            "transmission",
            "seats",
            "fuel",
            "gps",
            "childSeat",
            "aircondition",
            "music",
            "carKit",
            "audio",
            "climateControl",
          ],
        },
      },
      required: ["make", "model", "year", "status", "carSpec"],
    },
    response: {
      201: {
        type: "object",
        properties: {
          id: { type: "string" },
          make: { type: "string" },
          model: { type: "string" },
          year: { type: "number" },
          status: { type: "string" },
          carSpec: { type: "object" },
        },
      },
      400: {
        type: "object",
        properties: {
          error: {
            type: "string",
          },
        },
      },
      500: {
        type: "object",
        properties: {
          error: {
            type: "string",
          },
        },
      },
    },
  },
  handler: async (request, reply) => {
    try {
      const carData = request.body as CarData;
      const car = await createCar(carData);
      reply.code(201).send(car);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ error: "Failed to create car" });
    }
  },
});
