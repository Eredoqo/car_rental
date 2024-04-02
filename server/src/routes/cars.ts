import { route } from "convfastify";
import { getCarInformation } from "./../controllers/car.controllers";

export default route({
  url: "/cars",
  method: "GET",
  handler: async (_, reply) => {
    try {
      const cars = await getCarInformation();
      reply.send(cars);
    } catch (error) {
      reply.status(500).send({ message: "Error fetching car information" });
    }
  },
});
