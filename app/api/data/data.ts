// import data from './db.json'


// export async function Data() {
//     const json=data

//     return await json
    
// }
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function Data() {
  // Find all users
  const allUsers = await prisma.user.findMany();
  console.log("All users:", allUsers);
const findNullOrMissing = await prisma.user.findMany({
  where: {
   
  },
})
console.log(findNullOrMissing)
return await findNullOrMissing
}
Data()
