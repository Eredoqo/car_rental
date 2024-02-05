import { route } from "convfastify";

export default route({
  method: "POST",
  url: "/car-spec",
  async handler(req, res) {
    return { carSpec: "carSpec" };
  },
});
