import { Utensils } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card"

export const DayOrdershAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex space-y-0 justify-between pb-2 items-center">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y1">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-3%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
