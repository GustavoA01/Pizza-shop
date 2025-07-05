import { useQuery } from "@tanstack/react-query"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { getManagedRestaurant } from "../api/get-managed-restaurant"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export const StoreProfileDialog = () => {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
  })

  const { register } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name || "",
      description: managedRestaurant?.description || "",
    },
  })

  return (
    <DialogContent>
      <DialogHeader>Perfil da loja</DialogHeader>
      <DialogDescription>
        Atualize as informações do seu estabelecimento
      </DialogDescription>
      <form>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input {...register('name')} className="col-span-3" id="name" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea  {...register('description')} className="col-span-3" id="description" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancelar</Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
