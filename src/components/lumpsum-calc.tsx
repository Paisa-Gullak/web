"use client";

import { useState } from "react";
import InputSlider from "./inputSlider";
import { IconCurrencyRupee, IconRefresh } from "@tabler/icons-react";
import { ChartAreaGradient } from "./ui/area-chart-gradient";
import { formatINR } from "@/lib/currencyFormatter";

export default function LumpsumCalc() {
  const [investmentAmt, setInvestmentAmt] = useState<number>(100000);
  const [expectedRoi, sertExpectedRoi] = useState<number>(15);
  const [tenure, settenure] = useState<number>(10);

  // reset function
  const handleReset = () => {
    setInvestmentAmt(100000);
    sertExpectedRoi(15);
    settenure(10);
  };

  const calculateLumpsum = () => {
    const P = investmentAmt;
    const r = expectedRoi / 100;
    const t = tenure;

    const futureValue = P * Math.pow(1 + r, t);

    const invested = P;
    const expectedReturn = futureValue - P;
    const totalValue = futureValue;

    return {
      totalInvested: Math.floor(invested),
      expectedRateOfReturn: Math.floor(expectedReturn),
      totalFutureValue: Math.floor(totalValue),
    };
  };
  const { totalInvested, expectedRateOfReturn, totalFutureValue } =
    calculateLumpsum();

  // Generate data for chart
  const generateChartData = () => {
    const P = investmentAmt; // Initial lump sum investment
    const r = expectedRoi / 100; // Annual interest rate as decimal

    const data = [];

    // Generate data for each year
    for (let year = 1; year <= tenure; year++) {
      const investedAmount = P;

      const futureValue = P * Math.pow(1 + r, year);

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
  const chartData = generateChartData();

  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-3 h-auto">
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <InputSlider
            width={150}
            label="Investment Amount"
            symbol={<IconCurrencyRupee size={18} />}
            symbolPosition="start"
            min={100}
            max={1000000}
            step={100}
            value={investmentAmt}
            onChange={setInvestmentAmt}
          />
          <InputSlider
            width={100}
            label="Expected rate of return"
            symbol={"%"}
            symbolPosition="end"
            min={1}
            max={40}
            step={1}
            value={expectedRoi}
            onChange={sertExpectedRoi}
          />
          <InputSlider
            width={100}
            label="Investment Time Period"
            symbol={"year"}
            symbolPosition="end"
            min={1}
            max={40}
            step={1}
            value={tenure}
            onChange={settenure}
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
                  {formatINR(expectedRateOfReturn)}
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
            title="Lumpsum Investment Growth"
            description="Your one-time investment journey over time"
          />
        </div>
      </section>
    </>
  );
}
