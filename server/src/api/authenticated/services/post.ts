import { route } from "convfastify";

export default route({
  method: "POST",
  url: "/services",
  async handler(req, res) {
    return { services: "services" };
  },
});
