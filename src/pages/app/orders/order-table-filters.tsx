import { Search, X } from "lucide-react"
import { Input } from "../../../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { Button } from "../../../components/ui/button"
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "react-router-dom"
import { da } from "date-fns/locale"

const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrderFilterSchema = z.infer<typeof orderFiltersSchema>

export const OrderTableFilters = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

 const { register, handleSubmit, control } = useForm<OrderFilterSchema>({
    resolver: zodResolver(orderFiltersSchema),
    defaultValues:{
      orderId: orderId ?? "",
      customerName: customerName ?? "",
      status: status ?? "all",
    }
  })
  const handleFilter = ({orderId, customerName, status}: OrderFilterSchema) => {
    setSearchParams(url => {
      if(orderId){
        url.set('orderId', orderId)
      }else{
        url.delete('orderId')
      }

      if(customerName){
        url.set('customerName', customerName)
      }else{
        url.delete('customerName')
      }

      if(status){
        url.set('status', status)
      }else{
        url.delete('status')
      }

      url.set('page','1')

      return url
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        {...register("orderId")}
        className="h-8 w-auto"
        placeholder="ID do pedido"
      />
      <Input
        {...register("customerName")}
        className="h-8 w-[320px]"
        placeholder="Nome do cliente"
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="completed">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      ></Controller>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
