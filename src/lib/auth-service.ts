import { User } from "@/models/users/user.model";
import { UserLoginResponse } from "@/models/users/user.login.response";
import { UserResponse } from "@/models/users/user.response";
import axios from '@/lib/axios'
import { storeToken } from "./actions";

async function handleResponse<T>(response: Response): Promise<T> {
  return response as T;
}

export async function apiRegisterUser(credentials: string): Promise<User> {
  const response:Response = await axios.post("/api/auth/register", credentials, { headers: { 'Content-Type': 'application/json', } });
  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}

export async function apiLoginUser(credentials: string): Promise<string> {
  const response:any = await axios.post('/api/auth/login', credentials, { headers: { "Content-Type": "application/json" } });
  localStorage.setItem("token", response.data.token);
  return handleResponse<UserLoginResponse>(response).then((response:any) => response.data.token);
}

export async function apiLogoutUser(): Promise<void> {
  localStorage.removeItem("token");
  const response:Response = await axios.get('/api/auth/logout', { headers: { "Content-Type": "application/json" } });
  return handleResponse<void>(response);
}

export async function apiGetAuthUser(token?: string): Promise<User> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if(token){ headers["Authorization"] = `Bearer ${token}`; }
  const response:any = await axios.get('/api/users', { headers: headers });
  return handleResponse<UserResponse>(response).then((response:any) => response.data.data.user);
}