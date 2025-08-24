// "use client";

// import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import type { ChartConfig } from "@/components/ui/chart";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "An area chart with gradient fill";
// interface ChartAreaGradientProps {
//   data?: Array<{
//     year: string;
//     invested: number;
//     returns: number;
//     total: number;
//   }>;
//   title?: string;
//   description?: string;
// }

// const defaultData = [
//   { year: "Year 1", invested: 120000, returns: 6324, total: 126324 },
//   { year: "Year 2", invested: 240000, returns: 25983, total: 265983 },
//   { year: "Year 3", invested: 360000, returns: 60444, total: 420444 },
//   { year: "Year 4", invested: 480000, returns: 113071, total: 593071 },
//   { year: "Year 5", invested: 600000, returns: 186084, total: 786084 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Invested Amount",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Total Return",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig;

// export function ChartAreaGradient({
//   data,
//   title = "SIP Growth Chart",
//   description = "Investment growth over time",
// }: ChartAreaGradientProps) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Area Chart - Gradient</CardTitle>
//         <CardDescription>
//           Showing total visitors for the last 6 months
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <AreaChart
//             accessibilityLayer
//             data={defaultData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <YAxis
//               type="number"
//               domain={["auto", "auto"]} // Dynamic scaling
//             />
//             <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//             <defs>
//               <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor="var(--color-desktop)"
//                   stopOpacity={0.8}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor="var(--color-desktop)"
//                   stopOpacity={0.1}
//                 />
//               </linearGradient>
//               <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor="var(--color-mobile)"
//                   stopOpacity={0.8}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor="var(--color-mobile)"
//                   stopOpacity={0.1}
//                 />
//               </linearGradient>
//             </defs>
//             <Area
//               dataKey="mobile"
//               type="natural"
//               fill="url(#fillMobile)"
//               fillOpacity={0.4}
//               stroke="var(--color-mobile)"
//               stackId="a"
//             />
//             <Area
//               dataKey="desktop"
//               type="natural"
//               fill="url(#fillDesktop)"
//               fillOpacity={0.4}
//               stroke="var(--color-desktop)"
//               stackId="a"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

interface ChartAreaGradientProps {
  data?: Array<{
    year: string;
    invested: number;
    returns: number;
    total: number;
  }>;
  title?: string;
  description?: string;
}

const chartConfig = {
  invested: {
    label: "Invested Amount",
    color: "#4A6B8A", // Even lighter blue
  },
  total: {
    label: "Total Value",
    color: "#F0D965", // Even lighter gold
  },
} satisfies ChartConfig;

export function ChartAreaGradient({
  data,
  title = "SIP Growth Chart",
  description = "Investment growth over time",
}: ChartAreaGradientProps) {
  // Default data if none provided
  const defaultData = [
    { year: "Year 1", invested: 120000, returns: 6324, total: 126324 },
    { year: "Year 2", invested: 240000, returns: 25983, total: 265983 },
    { year: "Year 3", invested: 360000, returns: 60444, total: 420444 },
    { year: "Year 4", invested: 480000, returns: 113071, total: 593071 },
    { year: "Year 5", invested: 600000, returns: 186084, total: 786084 },
  ];

  const chartData = data || defaultData;

  // Format numbers for display
  const formatINR = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const yAxisFormat = (value: number) => {
    if (value >= 10000000) {
      return "₹" + (value / 10000000).toFixed(1) + " " + "Cr";
    } else if (value >= 100000) {
      return "₹" + (value / 100000).toFixed(1) + " " + "L";
    } else if (value >= 1000) {
      return "₹" + (value / 1000).toFixed(0) + " " + "K";
    } else {
      return "₹" + value.toString();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {/* Legend */}
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#4A6B8A" }}
            ></div>
            <span className="text-sm font-medium" style={{ color: "#4A6B8A" }}>
              Invested Amount
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#F0D965" }}
            ></div>
            <span className="text-sm font-medium" style={{ color: "#F0D965" }}>
              Total Value
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              type="number"
              domain={["auto", "auto"]}
              tickFormatter={(value) => yAxisFormat(value)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value: any) => [formatINR(Number(value)), ""]}
                />
              }
            />
            <defs>
              <linearGradient id="fillInvested" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4A6B8A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4A6B8A" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F0D965" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F0D965" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="total"
              type="natural"
              fill="url(#fillTotal)"
              fillOpacity={0.4}
              stroke="#F0D965"
            />
            <Area
              dataKey="invested"
              type="natural"
              fill="url(#fillInvested)"
              fillOpacity={0.4}
              stroke="#4A6B8A"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
