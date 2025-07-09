type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered"

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Processando",
  delivering: "Entregando",
  delivered: "Entregue",
}

const orderStatusColors: Record<OrderStatus, string> = {
  pending: "bg-slate-400",
  canceled: "bg-rose-500",
  processing: "bg-amber-500",
  delivering: "bg-amber-500",
  delivered: "bg-emerald-500",
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${orderStatusColors[status]}`} />
      <span>{orderStatusMap[status]}</span>
    </div>
  )
}
