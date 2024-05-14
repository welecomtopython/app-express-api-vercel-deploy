import { NextRequest, NextResponse } from "next/server";
import { Data } from "../data/data";
import NextAuth from "next-auth/next";
export async function POST(request:NextRequest,) {
  const body =await request.json();

  switch (body.type)
  {
    case "GET":
      
      const db= await Data()
      console.log(request.method)
    
      return await NextResponse.json((await db),{status:200});
      
      break;
      
      case "POST":
        const data_post=body.json()
        const post =data_post.data
        const plyaode={
          type:data_post.type,
          data:{post}
        }
        return await NextResponse.json(plyaode,{status:200});
        break;


  }
  
  
}
  
// export async function GET(request:NextRequest) {
       
//     return await NextResponse.json("dddddddddd",{status:200})
  
//     }
