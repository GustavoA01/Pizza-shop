import { DollarSign } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"

export const MonthRevenueCard = () => {
  return(
    <Card>
          <CardHeader className="flex space-y-0 justify-between pb-2 items-center">
            <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>
          <CardContent className="space-y1">
            <span className="text-2xl font-bold tracking-tight">
              R$ 12.345,67
            </span>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 dark:text-emerald-400">
                +2%
              </span>{' '}
               em relação ao mês passado
            </p>
          </CardContent>
        </Card>
  )
}