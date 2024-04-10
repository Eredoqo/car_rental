import { route } from "convfastify";
import { getUserInformation } from "../../controllers/user.controllers";

export default route({
  url: "/users",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const users = await getUserInformation();
      reply.send(users);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching user information" });
    }
  },
});
