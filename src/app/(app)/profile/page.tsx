"use server"
import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/auth-service";
import { setCookie, getCookie, getCookies, deleteCookie, hasCookie } from 'cookies-next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { cookies, headers } from 'next/headers';
import { AuthPageInvisible } from "@/lib/protect-page";
import { redirect } from "next/navigation";
import { getLoggedUser, getUserToken } from "@/lib/actions/server-actions";
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

Page.getInitialProps = async () =>{
  // const response = await fetch(`${SERVER_ENDPOINT}/api/auth/token`);
  // console.log(response);
  // const data = await response.json();
  // return {data: data};
  let pageProps:any = {};

    try {
      let data = await fetch(`${SERVER_ENDPOINT}/api/auth/token`);
      pageProps["data"] = data;
    } catch (error) {}

    return { pageProps };
}

export default async function Page({ pageProps }:any){
  console.log(pageProps);
  const isLogged = true; // await getUserToken();
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