import { Label } from "@radix-ui/react-label"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export const SignIn = () => {
  return (
    <>
      <div className="p-8">

      <div className="w-[350px] flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">

          <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu email</Label>
            <Input type="email" id="email" />
          </div>
          
          <Button className="w-full">Acessar painel</Button>
        </form>
      </div>
      </div>
    </>
  )
}
