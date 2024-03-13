"use client";

import Spinner from "./Spinner";
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/auth-service";
import { useRouter } from "next/navigation";

const Header = () => {
  const store =  useStore();
  const user =   useSession();
  const router = useRouter();

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
    } catch (error) {
    } finally {
      store.reset();
      router.push("/login");
    }
  };

  return (
    <>
      <header className="bg-white">
        <nav className="flex w-full justify-between items-center">
          <ul className="flex items-center gap-4">
            {user && (
              <>
                <li><Link href="/profile" className="text-ct-dark-600">Profile</Link></li>
                <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div className="pt-4 pl-2 bg-ct-blue-600 fixed">
        {store.requestLoading && <Spinner color="text-ct-yellow-600" />}
      </div>
    </>
  );
};

export default Header;