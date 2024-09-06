import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Chart for users and products";

// eslint-disable-next-line react/prop-types
export function DashboardChart({ users, products }) {
  const chartData = [{ month: "Sept", Clients: users, Products: products }];

  const chartConfig = {
    Clients: {
      label: "Clients",
      color: "hsl(var(--chart-1))",
    },
    Products: {
      label: "Products",
      color: "hsl(var(--chart-2))",
    },
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users and Product Bar Chart</CardTitle>
        <CardDescription>September 2024</CardDescription>
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
            <Bar dataKey="Clients" fill="var(--color-Clients)" radius={4} />
            <Bar dataKey="Products" fill="var(--color-Products)" radius={4} />
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
  );
}
