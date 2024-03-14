import { getErrorResponse } from "@/lib/helpers";
// import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
const prisma:any = {
    user: [{ id:1, name: "nagaraj", email:"nag@gmail.com", password:"admin123", age: 20}]
};
export async function GET(req: NextRequest) {
//   const userId = req.headers.get("X-USER-ID");
//   if(!userId) {
//     return getErrorResponse(401, "You are not logged in, please provide token to gain access");
//   }
  const user = await prisma.user.find( (user:any)=>user.id == 1 );
  return NextResponse.json({ status: "success", data: { user: { ...user, password: undefined } } });
}