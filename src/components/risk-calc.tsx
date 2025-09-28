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
} from "@tabler/icons-react";

export default function RiskCalc() {
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<string>("");
  const [smoking, setSmoking] = useState<string>("");
  const [alcohol, setAlcohol] = useState<string>("");
  const [cover, setCover] = useState<number>(10000000);
  const [tillAge, setTillAge] = useState<number>(55);

  const genderOptions = [
    { id: 1, text: "Male", icon: <IconGenderMale size={22} /> },
    { id: 2, text: "Female", icon: <IconGenderFemale size={22} /> },
    { id: 3, text: "Others", icon: <IconGenderTransgender size={22} /> },
  ];

  const ynOptions = [
    { id: 1, text: "Yes", icon: <IconThumbUp size={22} /> },
    { id: 2, text: "No", icon: <IconThumbDown size={22} /> },
  ];

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
                <>
                  <button
                    key={genItem.id}
                    onClick={() => setGender(genItem.text)}
                    className={`flex items-center gap-2 px-4 py-2 text-md rounded-lg border-paisa-blue border-2 transition-all capitalize
                        ${
                          genItem.text === gender
                            ? "bg-paisa-blue border-paisa-blue"
                            : "bg-white text-paisa-blue border-gray-300 hover:border-paisa-blue cursor-pointer"
                        }`}
                  >
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        genItem.text === gender
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {genItem.icon}
                    </span>
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        genItem.text === gender
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {genItem.text}
                    </span>
                  </button>
                </>
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
                <>
                  <button
                    key={smokeItems.id}
                    onClick={() => setSmoking(smokeItems.text)}
                    className={`flex items-center gap-2 px-4 py-2 text-md rounded-lg border-paisa-blue border-2 transition-all capitalize
                        ${
                          smokeItems.text === smoking
                            ? "bg-paisa-blue border-paisa-blue"
                            : "bg-white text-paisa-blue border-gray-300 hover:border-paisa-blue cursor-pointer"
                        }`}
                  >
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        smokeItems.text === smoking
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {smokeItems.icon}
                    </span>
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        smokeItems.text === smoking
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {smokeItems.text}
                    </span>
                  </button>
                </>
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
                    onClick={() => setAlcohol(alcoholItems.text)}
                    className={`flex items-center gap-2 px-4 py-2 text-md rounded-lg border-paisa-blue border-2 transition-all capitalize
                        ${
                          alcoholItems.text === alcohol
                            ? "bg-paisa-blue border-paisa-blue"
                            : "bg-white text-paisa-blue border-gray-300 hover:border-paisa-blue cursor-pointer"
                        }`}
                  >
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        alcoholItems.text === alcohol
                          ? "text-white"
                          : "text-paisa-blue"
                      }`}
                    >
                      {alcoholItems.icon}
                    </span>
                    <span
                      className={`text-md font-semibold text-paisa-blue ${
                        alcoholItems.text === alcohol
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
            width={150}
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

        <div className="text-lg text-paisa-blue">
          We're Building Something Amazing! - Full Results Coming Soon
        </div>
      </section>
    </>
  );
}
