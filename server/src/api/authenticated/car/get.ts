import { route } from "convfastify";

export default route({
  method: "GET",
  url: "/car",
  async handler(req, res) {
    return { car: "car" };
  },
});
