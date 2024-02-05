import { route } from "convfastify";

export default route({
  method: "GET",
  url: "/rental",
  async handler(req, res) {
    return { rental: "rental" };
  },
});
