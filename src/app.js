import express from "express";
import { PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient();
const app = express();
export const PORT = 8000;

app.use(express.json());

const validationSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().min(1, "Type is required"),
  address : z.any()
});

async function createUser(data) {
  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      address: data.address
    },
  });

  const allUsers = await prisma.user.findMany();
  return allUsers;
}

app.post("/post", async (req, res) => {
  const body = req.body;
  const validation = validationSchema.safeParse(body);

  if (!validation.success) {
    return res.status(400).send("Invalid data");
  }

  try {
    const data = await createUser({
      name: body.name,
      email: body.email,
      addreess : body.address
    });
    res.send(data);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
