import { route } from "convfastify";
import { createCar, CarData } from "./../../controllers/car.controllers";

export default route({
  url: "/cars",
  method: "POST",
  handler: async (request, reply) => {
    try {
      const carData = request.body as CarData;
      const car = await createCar(carData);
      reply.send(car);
    } catch (error) {
      reply.status(500).send({ message: "Error creating car" });
    }
  },
});
