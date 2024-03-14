"use client";
import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/auth-service";
import { cookies } from "next/headers";
import { AuthPageInvisible } from "@/lib/protect-page";

export default function ProfilePage() {
  // const cookieStore = cookies();
  // console.log(cookieStore);
  // const token = cookieStore.get("token");

  // const user = await apiGetAuthUser(token?.value);

  const user = { id:1, name: "nagaraj", email:"nag@gmail.com", password:"admin123", age: 20, role:"admin",verified:true};

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold"> Profile Page </p>
            <div className="mt-8">
              <p className="mb-3">Id: {user.id}</p>
              <p className="mb-3">Name: {user.name}</p>
              <p className="mb-3">Email: {user.email}</p>
              <p className="mb-3">Role: {user.role}</p>
              <p className="mb-3">Verified: {String(user.verified)}</p>
            </div>
          </div>
        </div>
      </div>
      <AuthPageInvisible />
    </>
  );
}