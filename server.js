



// const express = require("express");
// // import express from 'express'
// const app = express();
// const PORT = 8000;

// app.get("/", (req, res) => {
//   const r=req.method
//   const responseData = {
//     message: "Hello, world!  >>method ",
//     timestamp: new Date(),
//     status: "success",
//     method: r,
//     name:"Mohmeed",
//     age:25
//   };
//   res.json(responseData); // إعادة الاستجابة كـ JSON
// });

// app.get("/about", (req, res) => {
//   res.send({about:"About route 🎉 "});
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const z = require("zod");

const prisma = new PrismaClient();
const app = express();
const PORT = 8000;

app.use(express.json());

const validationSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().min(1, "Email is required"),
  address: z.any(),
});

async function createUser(data) {
  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      address: data.address,
    },
  });

  const allUsers = await prisma.user.findMany();
  return allUsers;
}

app.get("/", (req, res) => {
  res.send({ about: "About route 🎉" });
  res.status(200).send("Internal Server Rener");
});

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
      address: body.address,
    });
    res.send(data);
    res.status(200).send("Internal Server Rener");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
