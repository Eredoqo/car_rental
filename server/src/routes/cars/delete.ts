import { route } from "convfastify";
import { deleteCar } from "./../../controllers/car.controllers";

interface RequestParams {
  id: string;
}

export default route({
  url: "/cardetailsadmin/:id",
  method: "DELETE",
  handler: async (request, reply) => {
    try {
      const params = request.params as RequestParams;
      await deleteCar(params.id);
      reply.send({ message: "Car deleted successfully" });
    } catch (error) {
      reply.status(500).send({ message: "Error deleting car" });
    }
  },
});
