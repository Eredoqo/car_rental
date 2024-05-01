import { route } from "convfastify";
import { prisma } from "./../../../dbservices";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../../config";

export default route({
  url: "/login",
  method: "POST",
  schema: {
    tags: ["login"],
    body: {
      type: "object",
      properties: {
        email: { type: "string" },
        password: { type: "string" },
      },
      required: ["email", "password"],
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
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!user || !(await bcrypt.compare(password, hashedPassword))) {
      console.log("Invalid email or password");

      return res.code(400).send({
        errors: { email: "Invalid email or password", password: null },
      });
    }

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * config.token.lifespan,
        data: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          username: user.username,
          phone: user.phone,
          location: user.location,
        },
      },
      config.token.secret
    );
    res.send({ message: "User logged in successfully", token });
  },
});
