"use client";

import { useState } from "react";
import InputSlider from "./inputSlider";
import { IconCurrencyRupee, IconRefresh } from "@tabler/icons-react";
import { formatINR } from "@/lib/currencyFormatter";
import { ChartAreaGradient } from "./ui/area-chart-gradient";

export default function StpCalc() {
  const [investedAmt, setInvestedAmt] = useState<number>(3000000);
  const [sourceExpectedRoi, setSourceExpectedRoi] = useState<number>(8);
  const [transferAmt, setTransferAmt] = useState<number>(10000);
  const [destExpectedRoi, setDestExpectedRoi] = useState<number>(15);
  const [tenure, setTenure] = useState<number>(5);

  const handleReset = () => {
    setInvestedAmt(3000000);
    setSourceExpectedRoi(8);
    setTransferAmt(10000);
    setDestExpectedRoi(15);
    setTenure(5);
  };

  const calculateSTP = () => {
    const P = investedAmt;
    const r1 = sourceExpectedRoi / 100 / 12;
    const T = transferAmt;
    const r2 = destExpectedRoi / 100 / 12;
    const t = tenure * 12;

    // Calculation of No. of Transfers
    const actualTransfer = Math.min(t, Math.floor(P / T));
    const n = actualTransfer;

    // Calculation of Source Fund
    const sourceInitial = P * Math.pow(1 + r1, t);
    let sourceFinal = 0;
    for (let i = 1; i <= n; i++) {
      sourceFinal += T * Math.pow(1 + r1, t - i);
    }
    const sourceFinalValue = sourceInitial - sourceFinal;

    // Calculation for destinaltion fund
    let destinationFinalValue = 0;
    for (let i = 1; i <= n; i++) {
      destinationFinalValue += T * Math.pow(1 + r2, n - i);
    }

    const totalFinalValue = sourceFinalValue + destinationFinalValue;

    return {
      totalInvestedAmount: Math.floor(P),
      sourceFundValue: Math.floor(sourceFinalValue),
      amountTransfered: Math.floor(destinationFinalValue),
      totalValue: Math.floor(totalFinalValue),
    };
  };

  const { totalInvestedAmount, sourceFundValue, amountTransfered, totalValue } =
    calculateSTP();

  const generateChartData = () => {
    const P = investedAmt;
    const r1 = sourceExpectedRoi / 100 / 12;
    const T = transferAmt;
    const r2 = destExpectedRoi / 100 / 12;

    const data = [];

    for (let year = 1; year <= tenure; year++) {
      const months = year * 12;

      // Calculation of Actual No. of Transfers
      const actualTransfer = Math.min(months, Math.floor(P / T));
      const n = actualTransfer;

      // Calculation for source Fund
      const sourceInitial = P * Math.pow(1 + r1, months);
      let sourceFinal = 0;
      for (let i = 1; i <= n; i++) {
        sourceFinal += T * Math.pow(1 + r1, months - i);
      }

      const sourceFinalValue = sourceInitial - sourceFinal;

      // Calaculation of Destination Fund
      let destinationFinalValue = 0;
      for (let i = 1; i <= n; i++) {
        destinationFinalValue += T * Math.pow(1 + r2, n - i);
      }

      // Total return
      const totalReturn = sourceFinalValue + destinationFinalValue - P;
      // Total Value
      const totalFinalValue = sourceFinalValue + destinationFinalValue;

      data.push({
        year: `Yr ${year}`,
        invested: Math.floor(P),
        returns: Math.floor(totalReturn),
        total: Math.floor(totalFinalValue),
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
          <div className="mb-6">
            <span className="inline-flex items-center text-lg font-semibold text-paisa-blue mb-10  px-4 py-1 rounded-lg shadow-md shadow-paisa-gold">
              Source Fund
            </span>
            <InputSlider
              width={180}
              label="Invested Amount"
              symbol={<IconCurrencyRupee size={18} />}
              symbolPosition="start"
              min={100}
              max={20000000}
              step={100}
              value={investedAmt}
              onChange={setInvestedAmt}
            />
            <InputSlider
              width={100}
              label="Expected Rate of Return"
              symbol={"%"}
              symbolPosition="end"
              min={1}
              max={40}
              step={1}
              value={sourceExpectedRoi}
              onChange={setSourceExpectedRoi}
            />
          </div>
          <hr className="my-6" />
          <div>
            <span className="inline-flex items-center text-lg font-semibold text-paisa-blue mb-10  px-4 py-1 rounded-lg shadow-md shadow-paisa-gold">
              Destination Fund
            </span>
            <InputSlider
              width={150}
              label="Transfer Amount per month"
              symbol={<IconCurrencyRupee size={18} />}
              symbolPosition="start"
              min={100}
              max={200000}
              step={100}
              value={transferAmt}
              onChange={setTransferAmt}
            />
            <InputSlider
              width={100}
              label="Expected Rate of Return"
              symbol={"%"}
              symbolPosition="end"
              min={1}
              max={40}
              step={1}
              value={destExpectedRoi}
              onChange={setDestExpectedRoi}
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
          </div>

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
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-[12px] pl-1.5">
                Invested Amount:
              </span>
              <div className="flex items-center font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(totalInvestedAmount)}
                </span>
              </div>
            </div>
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-[12px] pl-1.5">
                Bal. Amount (Source Fund):
              </span>
              <div className="flex items-center justify-start font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(sourceFundValue)}
                </span>
              </div>
            </div>
            <div className="card py-4 px-4">
              <span className="font-medium text-paisa-blue text-[12px] pl-1.5">
                Amount Transfered (Detination Fund):
              </span>
              <div className="flex items-center justify-start font-semibold text-paisa-blue text-xl">
                <span>
                  <IconCurrencyRupee size={24} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(amountTransfered)}
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
                  {formatINR(totalValue)}
                </span>
              </div>
            </div>
          </div>
          <ChartAreaGradient
            data={chartData}
            title="STP Investment Growth"
            description="Your investment journey over time"
          />
        </div>
      </section>
    </>
  );
}
