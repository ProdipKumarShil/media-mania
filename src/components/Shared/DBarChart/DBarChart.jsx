"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", posts: 186, comments: 80 },
  { month: "February", posts: 305, comments: 200 },
  { month: "March", posts: 237, comments: 120 },
  { month: "April", posts: 73, comments: 190 },
  { month: "May", posts: 209, comments: 130 },
  { month: "June", posts: 214, comments: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#426e86",
  },
  mobile: {
    label: "Mobile",
    color: "#2f3131",
  },
}

const DBarChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Posts and Comments</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="posts" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="comments" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default DBarChart
