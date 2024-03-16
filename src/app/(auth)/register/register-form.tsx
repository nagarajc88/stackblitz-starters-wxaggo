"use client";

import { RegisterUserInput,RegisterUserSchema } from "@/src/lib/validations/user.schema";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { apiRegisterUser } from "@/src/lib/auth-service";
import FormInput from "@/src/components/FormInput";
import Link from "next/link";
import { LoadingButton } from "@/src/components/LoadingButton";
import useStore from "@/src/store";
import { handleApiError } from "@/src/lib/helpers";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const store = useStore();
  const router = useRouter();

  const methods = useForm<RegisterUserInput>({ resolver: zodResolver(RegisterUserSchema) });

  const { reset,handleSubmit,formState: { isSubmitSuccessful } } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  async function RegisterUserFunction(credentials: RegisterUserInput) {
    store.setRequestLoading(true);
    try {
        const user = await apiRegisterUser(JSON.stringify(credentials));
        store.setAuthUser(user);
        return router.push("/login");
    }catch (error: any) {
        if(error instanceof Error) {
            handleApiError(error);
        }else{
            toast.error(error.message);
        }
    }finally {
       store.setRequestLoading(false);
    }
  }

  const onSubmitHandler: SubmitHandler<RegisterUserInput> = (values) => { RegisterUserFunction(values); };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5">
        <FormInput label="Full Name" name="name" />
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />
        <FormInput label="Confirm Password" name="passwordConfirm" type="password" />
        <span className="block"> Already have an account?{" "} <Link href="/login" className="text-ct-blue-600">Login Here</Link> </span>
        <LoadingButton loading={store.requestLoading} textColor="text-ct-blue-600">Register</LoadingButton>
      </form>
    </FormProvider>
  );
}