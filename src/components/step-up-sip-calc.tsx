"use client";

import { useState } from "react";
import InputSlider from "./inputSlider";
import { IconCurrencyRupee, IconRefresh } from "@tabler/icons-react";
import { formatINR } from "@/lib/currencyFormatter";
import { ChartAreaGradient } from "./ui/area-chart-gradient";

export default function StepUpSipCalc() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [stepUpRate, setStepUpRate] = useState(10);
  const [expectedRoi, setExpectedRoi] = useState(15);
  const [tenure, setTenure] = useState(10);

  const handleReset = () => {
    setMonthlyInvestment(10000);
    setStepUpRate(10);
    setExpectedRoi(15);
    setTenure(10);
  };

  const calculateStepUpSip = () => {
    const P = monthlyInvestment;
    const s = stepUpRate / 100;
    const r = expectedRoi / 100 / 12;
    const n = tenure;

    // Calculation for Step up SIP
    let futureValue = 0;
    let investedAmount = 0;
    for (let k = 0; k < n; k++) {
      const yearValue = P * Math.pow(1 + s, k);

      for (let j = 1; j <= 12; j++) {
        const remaingMonths = 12 * (n - k) - j + 1;

        futureValue += yearValue * Math.pow(1 + r, remaingMonths);
        investedAmount += yearValue;
      }
    }
    const estimatedReturns = futureValue - investedAmount;

    return {
      totalFutureValue: Math.floor(futureValue),
      totalInvested: Math.floor(investedAmount),
      estimatedRateOfReturn: Math.floor(estimatedReturns),
    };
  };

  const { totalFutureValue, totalInvested, estimatedRateOfReturn } =
    calculateStepUpSip();

  // Graph Calculation
  const generateStepUpChartData = () => {
    const P = monthlyInvestment; // Initial monthly investment
    const s = stepUpRate / 100; // e.g. 10% = 0.1
    const r = expectedRoi / 100 / 12;

    const data = [];

    // Generate data for each year
    for (let year = 1; year <= tenure; year++) {
      let investedAmount = 0;
      let futureValue = 0;

      // Loop through each completed year till current year
      for (let k = 0; k < year; k++) {
        const yearValue = P * Math.pow(1 + s, k);

        for (let j = 1; j <= 12; j++) {
          const remaingMonths = 12 * (year - k) - j + 1;

          futureValue += yearValue * Math.pow(1 + r, remaingMonths);
          investedAmount += yearValue;
        }
      }

      const returns = futureValue - investedAmount;

      data.push({
        year: `Yr ${year}`,
        invested: Math.floor(investedAmount),
        returns: Math.floor(returns),
        total: Math.floor(futureValue),
      });
    }

    return data;
  };

  const chartData = generateStepUpChartData();

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto">
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <InputSlider
            width={150}
            label="Monthly Investment"
            symbol={<IconCurrencyRupee size={18} />}
            symbolPosition="start"
            min={100}
            max={200000}
            step={100}
            value={monthlyInvestment}
            onChange={setMonthlyInvestment}
          />
          <InputSlider
            width={100}
            label="Step-Up Rate (Annual)"
            symbol={"%"}
            symbolPosition="end"
            min={1}
            max={100}
            step={1}
            value={stepUpRate}
            onChange={setStepUpRate}
          />
          <InputSlider
            width={100}
            label="Expected Rate of Return"
            symbol={"%"}
            symbolPosition="end"
            min={1}
            max={40}
            step={1}
            value={expectedRoi}
            onChange={setExpectedRoi}
          />
          <InputSlider
            width={100}
            label="Time Period"
            symbol={"year"}
            symbolPosition="end"
            min={1}
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

        {/* Chart */}
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-[12px] pl-1.5">
                Invested Amount:
              </span>
              <div className="flex items-center font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(totalInvested)}
                </span>
              </div>
            </div>
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-[12px] pl-1.5">
                Est. Returns:
              </span>
              <div className="flex items-center justify-start font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(estimatedRateOfReturn)}
                </span>
              </div>
            </div>
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-[12px] pl-1.5">
                Total Value:
              </span>
              <div className="flex items-center justify-start font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(totalFutureValue)}
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
