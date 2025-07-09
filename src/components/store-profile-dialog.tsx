import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Button } from "./ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import {
  getManagedRestaurant,
  type GetManagedRestaurantResponse,
} from "../api/get-managed-restaurant"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateProfile } from "../api/update-profile"
import { toast } from "sonner"

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export const StoreProfileDialog = () => {
  const queryClient = useQueryClient()
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  })

  const updateManagedRestaurantUpdateCache = ({
    name,
    description,
  }: StoreProfileSchema): GetManagedRestaurantResponse | undefined => {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      "managed-restaurant",
    ])

    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(["managed-restaurant"], {
        ...cached,
        name,
        description,
      })
    }

    return cached
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const previousProfile = updateManagedRestaurantUpdateCache({
        name,
        description,
      })

      return { previousProfile }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantUpdateCache(context.previousProfile)
      }
    },
  })

  const handleUpdateProfile = async (data: StoreProfileSchema):Promise<void> => {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })
      toast.success("Perfil atualizado com sucesso!")
    } catch (error) {
      toast.error("Erro ao atualizar perfil.")
    }
  }

  return (
    <DialogContent>
      <DialogHeader>Perfil da loja</DialogHeader>
      <DialogDescription>
        Atualize as informações do seu estabelecimento
      </DialogDescription>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input {...register("name")} className="col-span-3" id="name" />
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              {...register("description")}
              className="col-span-3"
              id="description"
            />
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button type="submit" variant="success" disabled={isSubmitting}>
              Salvar
            </Button>
          </DialogFooter>
        </div>
      </form>
    </DialogContent>
  )
}
