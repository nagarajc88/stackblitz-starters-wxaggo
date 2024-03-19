'use server'

import axios from "axios";
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

export async function getUserToken(){
    const tokenDetails:any = await axios.get(`${SERVER_ENDPOINT}/api/auth/token`,{ headers: { Accept: 'application/json' }});
    console.log(tokenDetails.data);
    return tokenDetails.data;
}
export async function getLoggedUser() {
    const response = await fetch(`${SERVER_ENDPOINT}/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-User-Id': '1'
            },
    });
    const result = await response.json();
    console.log(result);
    return result;
}