import { route } from "convfastify";
import { getAllCarSpecs } from "./../controllers/carSpec-controllers";

export default route({
  url: "/carSpecs",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const carSpecs = await getAllCarSpecs();
      reply.send(carSpecs);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching car specifications" });
    }
  },
});
