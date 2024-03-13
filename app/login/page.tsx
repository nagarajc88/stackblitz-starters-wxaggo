import Header from "@/components/Header";
import LoginForm from "./login-form";
export default function Login() {
    return (<>
        <Header />
        <section className="bg-ct-blue-600 grid place-items-center">
            <div className="w-full mt-6 mb-6">
                <LoginForm />
            </div>
        </section>
    </>);
}