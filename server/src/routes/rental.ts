import { route } from "convfastify";
import { getAllRentals } from "./../controllers/rental-controllers";

export default route({
  url: "/rentals",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const rentals = await getAllRentals();
      reply.send(rentals);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching rentals" });
    }
  },
});
