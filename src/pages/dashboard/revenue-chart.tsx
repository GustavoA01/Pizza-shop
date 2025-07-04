import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  YAxis,
  Line,
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
} from "recharts"
import colors from "tailwindcss/colors"

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "12/12", revenue: 800 },
  { date: "13/12", revenue: 200 },
  { date: "14/12", revenue: 2000 },
  { date: "15/12", revenue: 1500 },
  { date: "16/12", revenue: 500 },
  { date: "17/12", revenue: 700 },
]

export const RevenueChart = () => {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />
            
            <Line
              type="linear"
              strokeWidth={3}
              dataKey={"revenue"}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
