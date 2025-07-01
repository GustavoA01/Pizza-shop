import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Pie, PieChart, ResponsiveContainer, BarChart, Cell } from "recharts"
import colors from "tailwindcss/colors"

const data = [
  { product: "Mussarela", amount: 26 },
  { product: "4 queijos", amount: 10 },
  { product: "Calabresa", amount: 12 },
  { product: "Peperoni", amount: 31 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export const PopularProductsChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              dataKey={"amount"}
              nameKey={"product"}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={64}
              outerRadius={86}
              strokeWidth={8}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
