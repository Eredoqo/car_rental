import { route } from "convfastify";
import { updateCar, CarData } from "./../../controllers/car.controllers";

interface RequestParams {
  id: string;
}

export default route({
  url: "/cars/:id",
  method: "PUT",
  handler: async (request, reply) => {
    try {
      const carData = request.body as CarData;
      const params = request.params as RequestParams;
      const updatedCar = await updateCar(params.id, carData);
      console.log(params.id, "params.id");

      reply.send(updatedCar);
    } catch (error) {
      reply.status(500).send({ message: "Error updating car" });
    }
  },
});
