import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest){
    let token: string | undefined;
    if(req.cookies.has("token")) {
       token = req.cookies.get("token")?.value;
    }
    return new NextResponse(JSON.stringify({ token: token }));
}