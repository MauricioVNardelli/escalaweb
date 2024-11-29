"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/app/ui/input";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const form = useForm<ILogin>();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  async function onSubmit(data: ILogin) {
    await delay(3000);
    console.log(data);

    router.push("/system/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-blue-600">
      <div className="transition-all ease-in duration-300 flex flex-col -mt-20 w-full mx-10 md:w-72">
        <p className="text-xl font-bold mb-4">Acessar conta</p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Input placeholder="E-mail" {...form.register("email")} />
          <Input placeholder="Senha" {...form.register("password")} />
          <button className="bg-blue-800 h-10 shadow-sm rounded-sm hover:shadow-inner">
            {form.formState.isSubmitting ? "Aguarde..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
