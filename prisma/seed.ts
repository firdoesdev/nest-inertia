import { PrismaClient } from "@prisma/client";

const run = async () => {
    const prisma = new PrismaClient();
    try {
      if ((await prisma.user.count()) === 0) {
        await prisma.user.create({
          data: {
            name: "Firdaus",
            email: "firdaus@email.com",
            password: '1234567890',
          },
        });
      } else {
        console.log("Default author already created");
      }
    } finally {
      await prisma.$disconnect();
    }
  };

  run()