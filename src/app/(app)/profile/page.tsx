"use server"
import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/auth-service";
import { setCookie, getCookie, getCookies, deleteCookie, hasCookie } from 'cookies-next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { cookies, headers } from 'next/headers';
import { AuthPageInvisible } from "@/lib/protect-page";
import { redirect } from "next/navigation";
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
async function isLoggedIn() {
  try {
      const response = await fetch(`${SERVER_ENDPOINT}/api/users`, { headers: { 'X-User-Id': '1' }});
      console.log(response);
      if (response.status === 200) return true;
  } catch (err:any) {
      console.log(err);
  }
  return true;
}

export default async function Page(){
  const isLogged = await isLoggedIn();
  if (!isLogged) redirect('/');
  let user:any = {};
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            <div className="mt-8">
              <p className="mb-3">Id: {user.id}</p>
              <p className="mb-3">Name: {user.name}</p>
              <p className="mb-3">Email: {user.email}</p>
              <p className="mb-3">Role: {user.role}</p>
              <p className="mb-3">Verified: {String(user.verified)}</p>
            </div>
          </div>
        </div>
      </section>
      <AuthPageInvisible />
    </>
  );
}