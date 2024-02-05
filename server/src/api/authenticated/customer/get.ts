import { route } from "convfastify";

export default route({
  method: "GET",
  url: "/customer",
  async handler(req, res) {
    return { customer: "customer" };
  },
});
