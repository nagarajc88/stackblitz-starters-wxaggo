"use client";

import Spinner from "./Spinner";
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/auth-service";
import { useRouter } from "next/navigation";

const Header = () => {
  const store =  useStore();
  const user =   { id:1, name: "nagaraj", email:"nag@gmail.com", password:"admin123", age: 20, role:"admin",verified:true}; //useSession();
  const router = useRouter();

  const userLoggedIn = localStorage.getItem('loggedIn');

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
      localStorage.setItem("loggedIn", "false");
    } catch (error) {
    } finally {
      store.reset();
      router.push("/login");
    }
  };

  return (
    <>
<header className="bg-white h-20">
        <nav className="h-full flex justify-between container items-center">
          <div>
            <Link href="/" className="text-ct-dark-600 text-2xl font-semibold">
              BCBS
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="text-ct-dark-600">
                Home
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link href="/register" className="text-ct-dark-600">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-ct-dark-600">
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/profile" className="text-ct-dark-600">
                    Profile
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      { store.requestLoading && ( <div className="pt-4 pl-2 bg-ct-blue-600 fixed">
         {store.requestLoading && <Spinner color="text-ct-yellow-600" />}
      </div>)} 
</>);
};

export default Header;