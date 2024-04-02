import { route } from "convfastify";
import { getAllCustomers } from "./../controllers/customer-controllers";

export default route({
  url: "/customers",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const customers = await getAllCustomers();
      reply.send(customers);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching customers" });
    }
  },
});
