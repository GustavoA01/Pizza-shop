import { Label } from "@radix-ui/react-label"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string(),
})

type signUpForm = z.infer<typeof signUpForm>

export const signUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>()
  const navigate = useNavigate()

  const handlesignUp = async (data: signUpForm) => {
    try{

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      })
    }catch (error) {
      console.error("Erro ao criar conta:", error)
      toast.error("Ocorreu um erro ao adicionar restaurante. Tente novamente.")
    }
  }

  return (
    <>
      <div className="p-8">
        <Button asChild variant={"ghost"}>
          <Link to="/sign-in" className="absolute right-8 top-8">
            Fazer login
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta gratuitamente
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handlesignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                {...register("restaurantName")}
                type="text"
                id="restaurantName"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Nome do gerente</Label>
              <Input
                {...register("managerName")}
                type="text"
                id="managerName"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input {...register("email")} type="email" id="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input {...register("phone")} type="tel" id="phone" />
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-xs leading-relaxed text-muted-foreground">
              Ao clicar em "Finalizar cadastro", você concorda com os nossos{" "}
              <a
                className="underline underline-offset-4 text-primary hover:text-primary/80"
                href="#"
              >
                termos de serviço
              </a>{" "}
              e{" "}
              <a
                className="underline underline-offset-4 text-primary hover:text-primary/80"
                href="#"
              >
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
