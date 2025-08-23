"use client";

import { useState } from "react";
import InputSlider from "./inputSlider";
import { IconCurrencyRupee, IconRefresh } from "@tabler/icons-react";
import { ChartAreaGradient } from "@/components/ui/area-chart-gradient";

export default function SipCalc() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedRoi, setExpectedRoi] = useState<number>(10);
  const [tenure, setTenure] = useState<number>(10);

  const handleReset = () => {
    setMonthlyInvestment(10000);
    setExpectedRoi(10);
    setTenure(10);
  };

  const calculateSip = () => {
    const P = monthlyInvestment;
    const annualRate = expectedRoi / 100; // Convert percentage to decimal
    const r = annualRate / 12; // Monthly interest rate
    const n = tenure * 12; // Total number of months

    // Correct SIP formula
    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

    const investedAmount = P * n; // Total invested = monthly amount × months
    const estimatedReturns = futureValue - investedAmount;

    return {
      futureValue,
      investedAmount,
      estimatedReturns,
    };
  };

  const { futureValue, investedAmount, estimatedReturns } = calculateSip();

  const generateChartData = () => {
    const P = monthlyInvestment;
    const annualRate = expectedRoi / 100;
    const r = annualRate / 12;

    const data = [];

    // Generate data for each year
    for (let year = 1; year <= tenure; year++) {
      const months = year * 12;

      // Calculate invested amount up to this year
      const investedAmount = P * months;

      // Calculate future value up to this year
      const futureValue = P * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));

      // Calculate returns up to this year
      const returns = futureValue - investedAmount;

      data.push({
        year: `Yr ${year}`,
        invested: Math.round(investedAmount),
        returns: Math.round(returns),
        total: Math.round(futureValue),
      });
    }

    return data;
  };
  const chartData = generateChartData();
  const formatINR = (num: number) =>
    num.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    });

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 h-auto">
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <InputSlider
            width={150}
            label="Monthly Investment"
            symbol={<IconCurrencyRupee size={18} />}
            symbolPosition="start"
            min={0}
            max={200000}
            step={100}
            value={monthlyInvestment}
            onChange={setMonthlyInvestment}
          />
          <InputSlider
            width={100}
            label="Expected rate of return (p.a)"
            symbol={"%"}
            symbolPosition="end"
            min={0}
            max={40}
            step={1}
            value={expectedRoi}
            onChange={setExpectedRoi}
          />
          <InputSlider
            width={100}
            label="Investment Time Period"
            symbol={"year"}
            symbolPosition="end"
            min={0}
            max={40}
            step={1}
            value={tenure}
            onChange={setTenure}
          />
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="btn-secondary flex gap-2 items-center cursor-pointer text-right"
            >
              Reset{" "}
              <span>
                <IconRefresh size={22} />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-sm pl-1.5">
                Invested Amount:
              </span>
              <div className="flex items-center font-semibold text-paisa-blue text-2xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(investedAmount)}
                </span>
              </div>
            </div>
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-sm pl-1.5">
                Est. Returns:
              </span>
              <div className="flex gap-1 items-center justify-start font-semibold text-paisa-blue text-2xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(estimatedReturns)}
                </span>
              </div>
            </div>
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-sm pl-1.5">
                Total Value:
              </span>
              <div className="flex gap-1 items-center justify-start font-semibold text-paisa-blue text-2xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(futureValue)}
                </span>
              </div>
            </div>
          </div>
          <ChartAreaGradient
            data={chartData}
            title="SIP Investment Growth"
            description="Your investment journey over time"
          />
        </div>
      </section>
    </>
  );
}
