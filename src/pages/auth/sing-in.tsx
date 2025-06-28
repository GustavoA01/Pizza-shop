import { Label } from "@radix-ui/react-label"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Link } from "react-router-dom"

const signInForm = z.object({
  email: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const handleSignIn = async (data: SignInForm) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success("Enviamos um link de acautenticação para o seu email!", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      },
    })
  }

  return (
    <>
      <div className="p-8">
        <Button asChild variant={"ghost"}>
          <Link to="/sign-up" className="absolute right-8 top-8">
          Novo estabelecimento
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input {...register("email")} type="email" id="email" />
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
