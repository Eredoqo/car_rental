import { route } from "convfastify";
import { prisma } from "./../../../dbservices";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default route({
  url: "/login",
  method: "POST",
  schema: {
    tags: ["login"],
    body: {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
      required: ["username", "password"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
          token: { type: "string" },
        },
      },
    },
  },
  handler: async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.code(400).send({
        errors: { email: "Invalid username or password", password: null },
      });
    }

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
        data: {
          id: user.id,
        },
      },
      "your-secret-key"
    );
    res.send({ message: "User logged in successfully", token });
  },
});
