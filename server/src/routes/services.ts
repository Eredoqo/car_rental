import { route } from "convfastify";
import { getAllServices } from "./../controllers/services.controllers";

export default route({
  url: "/services",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const services = await getAllServices();
      reply.send(services);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching services" });
    }
  },
});
