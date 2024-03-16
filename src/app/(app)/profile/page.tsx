"use server"
// import Header from "@/components/Header";
// import { apiGetAuthUser } from "@/lib/auth-service";
// import { setCookie, getCookie, getCookies, deleteCookie, hasCookie } from 'cookies-next';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
// import { cookies } from 'next/headers';
// import { AuthPageInvisible } from "@/lib/protect-page";
// import { getServerSession } from 'next-auth'

// const getUser = async () => {

//   const nextCookies = cookies(); // Get cookies object
//   const token = nextCookies.get('token'); // Find cookie
//   if(!token) {
//     throw new Error("Missing token")
//   }
//   return token;
// }
export default async function Page(){
  let user:any = {};
  // const cookieStore = cookies();
  // const data = await getServerSession();
  // console.log(data);
  // getCookie('token', { cookies });
  // const token = await getUser(); //cookieStore.get("token");
  // user = await apiGetAuthUser(token?.value);
  const cookieStore = require('next/headers').cookies();
  const token = cookieStore.get('token');
  console.log(token);
  // return '...'
 
  // return (
  //   <>
  //     {/* <Header /> */}
  //     <section className="bg-ct-blue-600  min-h-screen pt-20">
  //       <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
  //         <div>
  //           <p className="mb-3 text-5xl text-center font-semibold">
  //             Profile Page
  //           </p>
  //           <div className="mt-8">
  //             <p className="mb-3">Id: {user.id}</p>
  //             <p className="mb-3">Name: {user.name}</p>
  //             <p className="mb-3">Email: {user.email}</p>
  //             <p className="mb-3">Role: {user.role}</p>
  //             <p className="mb-3">Verified: {String(user.verified)}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     {/* <AuthPageInvisible /> */}
  //   </>
  // );
}


// export const getServerSideProps = (async (context) => {
//   console.log(context);
//   let repo:any = context.req.cookies;
//   return { props: { repo } }
// }) satisfies GetServerSideProps<{ repo: any }>

// export const getServerSideProps:GetServerSideProps = async (context)=>{
//   console.log(context);
//   return { props: { } }
// }