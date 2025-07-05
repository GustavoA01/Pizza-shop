import { Label } from "@radix-ui/react-label"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Link, useSearchParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "../../api/sign-in"

const signInForm = z.object({
  email: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export const SignIn = () => {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  const handleSignIn = async (data: SignInForm) => {
    await authenticate({ email: data.email })

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
