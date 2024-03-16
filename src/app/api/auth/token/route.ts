import { cookies } from 'next/headers'
import { NextRequest } from 'next/server';
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
export async function GET(request: Request) {
    const token:any = cookies().get('token');
    const refresh_token:any = cookies().get('refresh_token');
    const headers = new Headers();
    headers.append("Authorization", token);
    // const response = await fetch(`${SERVER_ENDPOINT}/users`,{ headers: headers })

    // if(response.status === 401) {
    //   const refreshPayload = { "refresh_token": cookies().get('refreshToken')?.value }
    //   const res = await fetch(`${SERVER_ENDPOINT}/refresh-token`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(refreshPayload),
    //   })
      
    //   const jsonData = await res.json()
      
    //   cookies().set({
    //         name: "token",
    //         value: token,
    //         httpOnly: true,
    //         sameSite: "strict",
    //         secure: true,
    //   })

    //   cookies().set({
    //         name: "refreshToken",
    //         value: refresh_token,
    //         httpOnly: true,
    //         sameSite: "strict",
    //         secure: true,
    //   })
    // } 
    const resData = { token: cookies().get('token') }
    return new Response(JSON.stringify(resData), { status: 200, headers: { 'Content-Type': 'application/json' } })
}