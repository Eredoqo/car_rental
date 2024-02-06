import fastify from "fastify";
import sensible from "@fastify/sensible";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = fastify({ logger: true });
app.register(sensible);
app.register(cookie, { secret: process.env.COOKIE_SECRET });
app.register(cors, {
  origin: "http://localhost:3000",
  credentials: true,
});

const prisma = new PrismaClient();

app.get("/car", async () => {
  return prisma.car.findMany({
    select: {
      id: true,
      make: true,
      model: true,
      year: true,
      status: true,
      Rentals: {
        select: {
          id: true,
          carId: true,
          totalCost: true,
          customerId: true,
          startDate: true,
          endDate: true,
        },
      },
      Rates: {
        select: {
          id: true,
          carId: true,
          weeklyRate: true,
          dailyRate: true,
        },
      },
    },
  });
});
app.get("/carSpec", async () => {
  return prisma.carSpec.findMany({
    select: {
      id: true,
      carTitle: true,
      image: true,
      description: true,
      body: true,
      price: true,
      mileage: true,
      transmission: true,
      seats: true,
      fuel: true,
      gps: true,
      childSeat: true,
      aircondition: true,
      music: true,
      carKit: true,
      audio: true,
      climateControl: true,
    },
  });
});

app.get("/customer", async () => {
  return prisma.customer.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      Rentals: {
        select: {
          id: true,
          carId: true,
          totalCost: true,
          customerId: true,
          startDate: true,
          endDate: true,
        },
      },
    },
  });
});

app.get("/rate", async () => {
  return prisma.rate.findMany({
    select: {
      id: true,
      carId: true,
      weeklyRate: true,
      dailyRate: true,
      Car: {
        select: {
          id: true,
          make: true,
          model: true,
          year: true,
          status: true,
          Rentals: {
            select: {
              id: true,
              carId: true,
              totalCost: true,
              customerId: true,
              startDate: true,
              endDate: true,
            },
          },
          Rates: {
            select: {
              id: true,
              carId: true,
              weeklyRate: true,
              dailyRate: true,
            },
          },
        },
      },
    },
  });
});

app.get("/rental", async () => {
  return prisma.rental.findMany({
    select: {
      id: true,
      carId: true,
      totalCost: true,
      customerId: true,
      startDate: true,
      endDate: true,
      Car: {
        select: {
          id: true,
          make: true,
          model: true,
          year: true,
          status: true,
          Rentals: {
            select: {
              id: true,
              carId: true,
              totalCost: true,
              customerId: true,
              startDate: true,
              endDate: true,
            },
          },
        },
      },
      Customer: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  });
});

app.get("/services", async () => {
  return prisma.services.findMany({
    select: {
      id: true,
      serviceTitle: true,
      price: true,
      image: true,
      description: true,
    },
  });
});

// app.get("/posts/:id", async () => {
//   return await commitToDb(
//     prisma.post
//       .findUnique({
//         where: { id: req.params.id },
//         select: {
//           body: true,
//           title: true,
//           comments: {
//             orderBy: {
//               createdAt: "desc",
//             },
//             select: {
//               ...COMMENT_SELECT_FIELDS,
//               _count: { select: { like: true } },
//             },
//           },
//         },
//       })
//       .then(async (post) => {
//         const likes = await prisma.like.findMany({
//           where: {
//             userId: req.cookies.userId,
//             commentId: { in: post.comments.map((comment) => comment.id) },
//           },
//         });

//         return {
//           ...post,
//           comments: post.comments.map((comment) => {
//             const { _count, ...commentFields } = comment;
//             return {
//               ...commentFields,
//               likedByMe: likes.find((like) => like.commentId === comment.id),
//               likeCount: _count.likes,
//             };
//           }),
//         };
//       })
//   );
// });

// app.post("/posts/:id/comments", async () => {
//   if (req.body.message === "" || req.body.message == null) {
//     return res.send(app.httpErrors.badRequest("Message is required"));
//   }

//   return await commitToDb(
//     prisma.comment
//       .create({
//         data: {
//           message: req.body.message,
//           userId: req.cookies.userId,
//           parentId: req.body.parentId,
//           postId: req.params.id,
//         },
//         select: COMMENT_SELECT_FIELDS,
//       })
//       .then((comment) => {
//         return {
//           ...comment,
//           likeCount: 0,
//           likedByMe: false,
//         };
//       })
//   );
// });

// app.put("/posts/:postId/comments/:commentId", async () => {
//   if (req.body.message === "" || req.body.message == null) {
//     return res.send(app.httpErrors.badRequest("Message is required"));
//   }

//   const { userId } = await prisma.comment.findUnique({
//     where: { id: req.params.commentId },
//     select: { userId: true },
//   });
//   if (userId !== req.cookies.userId) {
//     return res.send(
//       app.httpErrors.unauthorized(
//         "You do not have permission to edit this message"
//       )
//     );
//   }

//   return await commitToDb(
//     prisma.comment.update({
//       where: { id: req.params.commentId },
//       data: { message: req.body.message },
//       select: { message: true },
//     })
//   );
// });

// app.delete("/posts/:postId/comments/:commentId", async () => {
//   const { userId } = await prisma.comment.findUnique({
//     where: { id: req.params.commentId },
//     select: { userId: true },
//   });
//   if (userId !== req.cookies.userId) {
//     return res.send(
//       app.httpErrors.unauthorized(
//         "You do not have permission to delete this message"
//       )
//     );
//   }

//   return await commitToDb(
//     prisma.comment.delete({
//       where: { id: req.params.commentId },
//       select: { id: true },
//     })
//   );
// });

// app.post("/posts/:postId/comments/:commentId/toggleLike", async () => {
//   const data = {
//     commentId: req.params.commentId,
//     userId: req.cookies.userId,
//   };

//   const like = await prisma.like.findUnique({
//     where: { userId_commentId: data },
//   });

//   if (like == null) {
//     return await commitToDb(prisma.like.create({ data })).then(() => {
//       return { addLike: true };
//     });
//   } else {
//     return await commitToDb(
//       prisma.like.delete({ where: { userId_commentId: data } })
//     ).then(() => {
//       return { addLike: false };
//     });
//   }
// });

// async function commitToDb(promise) {
//   const [error, data] = await app.to(promise);
//   if (error) return app.httpErrors.internalServerError(error.message);
//   return data;
// }

app.listen({ port: 8080 });
