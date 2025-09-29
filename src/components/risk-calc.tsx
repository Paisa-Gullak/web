"use client";

import { useState } from "react";
import InputSlider from "./inputSlider";
import {
  IconGenderMale,
  IconGenderFemale,
  IconGenderTransgender,
  IconThumbUp,
  IconThumbDown,
  IconCurrencyRupee,
  IconAlertCircle,
  IconRefresh,
} from "@tabler/icons-react";
import { formatINR } from "@/lib/currencyFormatter";
import Image from "next/image";

export default function RiskCalc() {
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<string>("male");
  const [smoking, setSmoking] = useState<string>("no");
  const [alcohol, setAlcohol] = useState<string>("no");
  const [cover, setCover] = useState<number>(10000000);
  const [tillAge, setTillAge] = useState<number>(55);

  const genderOptions = [
    { id: 1, text: "Male", value: "male", icon: <IconGenderMale size={22} /> },
    {
      id: 2,
      text: "Female",
      value: "female",
      icon: <IconGenderFemale size={22} />,
    },
    {
      id: 3,
      text: "Others",
      value: "others",
      icon: <IconGenderTransgender size={22} />,
    },
  ];

  const ynOptions = [
    { id: 1, text: "Yes", value: "yes", icon: <IconThumbUp size={22} /> },
    { id: 2, text: "No", value: "no", icon: <IconThumbDown size={22} /> },
  ];

  const handleReset = () => {
    setAge(30);
    setGender("male");
    setSmoking("no");
    setAlcohol("no");
    setCover(10000000);
    setTillAge(55);
  };

  // Age factor calculation for direct age input
  const getAgeFactor = (age: number): number => {
    if (age >= 18 && age <= 25) return 0.8;
    if (age >= 26 && age <= 30) return 0.9;
    if (age >= 31 && age <= 35) return 1.0;
    if (age >= 36 && age <= 40) return 1.3;
    if (age >= 41 && age <= 45) return 1.6;
    if (age >= 46 && age <= 50) return 2.2;
    if (age >= 51 && age <= 55) return 3.0;
    if (age >= 56 && age <= 60) return 4.0;
    if (age >= 61 && age <= 65) return 5.5;
    return 1.0;
  };

  // Term factor calculation
  const getTermFactor = (term: number): number => {
    if (term <= 15) return 0.9;
    if (term <= 20) return 1.0;
    if (term <= 25) return 1.1;
    if (term <= 30) return 1.2;
    if (term <= 35) return 1.3;
    return 1.4;
  };

  // Risk level assessment
  const getRiskLevel = (combinedFactor: number) => {
    if (combinedFactor <= 1.5) return { level: "Low", color: "text-green-600" };
    if (combinedFactor <= 3.0)
      return { level: "Medium", color: "text-yellow-600" };
    return { level: "High", color: "text-red-600" };
  };

  // Calculation of premium
  const calculatePremium = () => {
    // base rate per 1 lakh Rs.
    const baseRate = 12.5;

    // Base premium calculation acc. to 1 lakh
    const basePremium = (cover / 100000) * baseRate;

    // Age factor
    const ageFactor = getAgeFactor(age);

    // Gender factor
    const genderFactor =
      gender === "male" ? 1.2 : gender === "female" ? 1.0 : 1.1;

    // Smoking factor
    const smokingFactor = smoking === "yes" ? 2.0 : 1.0;

    // Alcohol factor
    const alcoholFactor = alcohol === "yes" ? 1.3 : 1.0;

    // Term factor
    const policyTerm = tillAge - age;
    const termFactor = getTermFactor(policyTerm);

    // Combined risk factor
    const combinedRiskFactor =
      ageFactor * genderFactor * smokingFactor * alcoholFactor;

    // Final calculation
    const monthlyPremium =
      basePremium *
      ageFactor *
      genderFactor *
      smokingFactor *
      alcoholFactor *
      termFactor;

    return {
      monthly: Math.floor(monthlyPremium),
      annual: Math.floor(monthlyPremium * 12),
      riskLevel: getRiskLevel(combinedRiskFactor),
    };
  };

  const result = calculatePremium();

  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-3 h-auto">
        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <InputSlider
            width={100}
            label="What is your age?"
            symbol={"years"}
            symbolPosition="end"
            min={18}
            max={65}
            step={1}
            value={age}
            onChange={setAge}
          />
          {/* Gender Options */}
          <label className="text-lg font-medium text-paisa-blue">
            What is your gender?
          </label>
          <div className="flex gap-4 mt-5 mb-6">
            {genderOptions.map((genItem) => {
              return (
                <button
                  key={genItem.id}
                  onClick={() => setGender(genItem.value)}
                  className={`flex items-center gap-2 px-4 py-2 text-md rounded-lg border-paisa-blue border-2 transition-all capitalize
                        ${
                          genItem.value === gender
                            ? "bg-paisa-blue border-paisa-blue"
                            : "bg-white text-paisa-blue border-gray-300 hover:border-paisa-blue cursor-pointer"
                        }`}
                >
                  <span
                    className={`text-md font-semibold text-paisa-blue ${
                      genItem.value === gender
                        ? "text-white"
                        : "text-paisa-blue"
                    }`}
                  >
                    {genItem.icon}
                  </span>
                  <span
                    className={`text-md font-semibold text-paisa-blue ${
                      genItem.value === gender
                        ? "text-white"
                        : "text-paisa-blue"
                    }`}
                  >
                    {genItem.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Smoking Options */}
          <label className="text-lg font-medium text-paisa-blue">
            Do you smoke?
          </label>
          <div className="flex items-center gap-4 mt-5 mb-6">
            {ynOptions.map((smokeItems) => {
              return (
                <button
                  key={smokeItems.id}
                  onClick={() => setSmoking(smokeItems.value)}
                  className={`flex items-center gap-2 px-4 py-2 text-md rounded-lg border-paisa-blue border-2 transition-all capitalize
                        ${
                          smokeItems.value === smoking
                            ? "bg-paisa-blue border-paisa-blue"
                            : "bg-white text-paisa-blue border-gray-300 hover:border-paisa-blue cursor-pointer"
                        }`}
                >
                  <span
                    className={`text-md font-semibold text-paisa-blue ${
                      smokeItems.value === smoking
                        ? "text-white"
                        : "text-paisa-blue"
                    }`}
                  >
                    {smokeItems.icon}
                  </span>
                  <span
                    className={`text-md font-semibold text-paisa-blue ${
                      smokeItems.value === smoking
                        ? "text-white"
                        : "text-paisa-blue"
                    }`}
                  >
                    {smokeItems.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Alcohol Options */}
          <label className="text-lg font-medium text-paisa-blue">
            Do you consume alcohol?
          </label>
          <div className="flex gap-4 items-center mt-5 mb-6">
            {ynOptions.map((alcoholItems) => {
              return (
                <>
                  <button
                    key={alcoholItems.id}
                    onClick={() => setAlcohol(alcoholItems.value)}
                    className={`flex items-center gap-2 px-4 py-2 text-md rounded-lg border-paisa-blue border-2 transition-all capitalize
                        ${
                          alcoholItems.value === alcohol
                            ? "bg-paisa-blue border-paisa-blue"
                            : "bg-white text-paisa-blue border-gray-300 hover:border-paisa-blue cursor-pointer"
                        }`}
                  >
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        alcoholItems.value === alcohol
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {alcoholItems.icon}
                    </span>
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        alcoholItems.value === alcohol
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {alcoholItems.text}
                    </span>
                  </button>
                </>
              );
            })}
          </div>

          <InputSlider
            width={150}
            label="Life Cover you want?"
            symbol={<IconCurrencyRupee size={18} />}
            symbolPosition="start"
            min={1000000}
            max={20000000}
            step={1000}
            value={cover}
            onChange={setCover}
          />
          <InputSlider
            width={100}
            label="Cover Till Age?"
            symbol={"years"}
            symbolPosition="end"
            min={28}
            max={100}
            step={1}
            value={tillAge}
            onChange={setTillAge}
          />
        </div>

        <div className="bg-white rounded-xl shadow-xs space-y-3 py-10 px-5">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-3">
            <div className="card py-8 px-8">
              <span className="font-medium text-paisa-blue text-[16px] pl-1.5">
                Risk level:
              </span>
              <div className="flex gap-2 items-center font-semibold text-paisa-blue text-2xl">
                <span>
                  <IconAlertCircle size={26} />
                </span>
                <span
                  className={`overflow-x-scroll scrollbar-hide ${result.riskLevel.color}`}
                >
                  {result.riskLevel.level}
                </span>
              </div>
            </div>
            <div className="card py-8 px-8">
              <span className="font-medium text-paisa-blue text-[16px] pl-1.5 mb-2">
                Anuual Premium:
              </span>
              <div className="flex gap-1 items-center justify-start font-semibold text-paisa-blue text-2xl">
                <span>
                  <IconCurrencyRupee size={26} />
                </span>
                <span className="overflow-x-scroll scrollbar-hide">
                  {formatINR(result.annual)} /year
                </span>
              </div>
            </div>
          </div>
          <div className="card py-8 px-8 flex flex-col items-center justify-center bg-paisa-cream">
            <Image
              src="/pg-insurance-premium.png"
              alt="Paisa Gullak Insurance Premium"
              width={300}
              height={20}
              className="mb-6"
            />
            <span className="font-medium text-paisa-blue text-[20px] pl-1.5 mb-2">
              Monthly premium:
            </span>
            <div className="flex gap-1 items-center justify-start font-semibold text-paisa-blue text-xl">
              <span>
                <IconCurrencyRupee size={38} />
              </span>
              <span className="overflow-x-scroll scrollbar-hide text-4xl">
                {formatINR(result.monthly)} /month
              </span>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> This is an estimated premium
              calculation. Actual premiums may vary based on medical
              examinations and insurance company policies.
            </p>
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
      </section>
    </>
  );
}
