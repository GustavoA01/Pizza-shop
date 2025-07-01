import { DayOrdershAmountCard } from "./day-orders-amount-card"
import { MonthCanceledAmountCard } from "./month-canceled-orders-amount"
import { MonthAmountCard } from "./month-orders-amount-card"
import { MonthRevenueCard } from "./month-revanue-card"
import { PopularProductsChart } from "./popular-products-chart"
import { RevenueChart } from "./revenue-chart"

export const Dashboard = ()=>{
  return(
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthAmountCard/>
        <MonthRevenueCard/>
        <DayOrdershAmountCard/>
        <MonthCanceledAmountCard/>
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart/>
        <PopularProductsChart/>
      </div>
    </div>
  )
}