import { route } from "convfastify";
import { getAllRates } from "./../controllers/rate-controllers";

export default route({
  url: "/rates",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const rates = await getAllRates();
      reply.send(rates);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching rates" });
    }
  },
});
