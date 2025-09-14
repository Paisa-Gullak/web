"use client";

import { useState } from "react";
import InputSlider from "./inputSlider";
import { IconCurrencyRupee, IconRefresh } from "@tabler/icons-react";
import { formatINR } from "@/lib/currencyFormatter";
import { ChartAreaGradient } from "./ui/area-chart-gradient";

export default function SWPCalc() {
  const [totalInvestment, setTotalInvestment] = useState<number>(1000000);
  const [withdrawlAmt, setWithdawlAmt] = useState<number>(10000);
  const [expectedRoi, setExpectedRoi] = useState<number>(15);
  const [tenure, setTenure] = useState<number>(10);

  const handleReset = () => {
    setTotalInvestment(1000000);
    setWithdawlAmt(10000);
    setExpectedRoi(15);
    setTenure(10);
  };

  const calculateSWP = () => {
    const P = totalInvestment;
    const w = withdrawlAmt;
    const r = expectedRoi / 12 / 100;
    const n = tenure * 12;

    const finalValue =
      P * Math.pow(1 + r, n) - w * ((Math.pow(1 + r, n) - 1) / r);

    const withdrawlValue = w * n;
    const totalValue = finalValue;

    return {
      totalInvested: Math.floor(P),
      withdrawls: Math.floor(withdrawlValue),
      totalAmount: Math.floor(totalValue),
    };
  };

  const { totalInvested, withdrawls, totalAmount } = calculateSWP();

  const generateChartData = () => {
    const P = totalInvestment;
    const w = withdrawlAmt;
    const r = expectedRoi / 12 / 100;

    const data = [];

    for (let year = 1; year <= tenure; year++) {
      const months = year * 12;

      const finalValue =
        P * Math.pow(1 + r, months) - w * ((Math.pow(1 + r, months) - 1) / r);

      const withdrawlValue = w * months;
      const totalValue = finalValue;
      const investedAmount = P;

      data.push({
        year: `Yr ${year}`,
        invested: Math.floor(investedAmount),
        returns: Math.floor(withdrawlValue),
        total: Math.floor(totalValue),
      });
    }
    return data;
  };

  const chartData = generateChartData();

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto">
        {/* Calculator */}
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <InputSlider
            width={150}
            label="Total Investment"
            symbol={<IconCurrencyRupee size={18} />}
            symbolPosition="start"
            min={100000}
            max={20000000}
            step={100}
            value={totalInvestment}
            onChange={setTotalInvestment}
          />
          <InputSlider
            width={150}
            label="Withdrawl Amount"
            symbol={<IconCurrencyRupee size={18} />}
            symbolPosition="start"
            min={100}
            max={200000}
            step={100}
            value={withdrawlAmt}
            onChange={setWithdawlAmt}
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
            symbol={"yr"}
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
                Withdrawl Amount:
              </span>
              <div className="flex items-center justify-start font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(withdrawls)}
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
                  {formatINR(totalAmount)}
                </span>
              </div>
            </div>
          </div>
          <ChartAreaGradient
            data={chartData}
            title="SWP Investment Growth"
            description="Track withdrawals and remaining value over time"
          />
        </div>
      </section>
    </>
  );
}
