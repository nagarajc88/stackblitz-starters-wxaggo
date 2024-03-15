import { NextResponse, NextRequest } from "next/server";
import { getErrorResponse } from "@/lib/helpers"
const prisma:any = {
    user: [{ id:1, name: "nagaraj", email:"nag@gmail.com", password:"admin123", age: 20}]
};
export async function GET(req:any){
  const userId = req.headers.get("X-User-Id");
  if(!userId) {
    return getErrorResponse(401, "You are not logged in, please provide token to gain access");
  }
  const user = await prisma.user.find( (user:any)=>user.id == userId );
  const response = new NextResponse(JSON.stringify({ status: "success", data: { user: { ...user, password: undefined } } }));
  return response
}