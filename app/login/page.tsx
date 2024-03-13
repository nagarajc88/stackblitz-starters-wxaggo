import Header from "@/components/Header";
import LoginForm from "./login-form";
export default function Login() {
    return (<>
        <Header />
        <section className="bg-ct-blue-600 grid place-items-center">
            <div className="w-full">
                <h3 className="text-4xl lg:text-6xl text-center font-[600] text-ct-yellow-600 mb-4">Login</h3>
                <LoginForm />
            </div>
        </section>
    </>);
}