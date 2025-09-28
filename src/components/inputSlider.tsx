import type { ReactNode } from "react";
import { Slider } from "./ui/slider";
import { formatINR } from "@/lib/currencyFormatter";

interface InputSliderProps {
  label: string;
  symbol?: string | ReactNode;
  symbolPosition: "start" | "end";
  value: number;
  min: number;
  max: number;
  step?: number;
  width: number;
  onChange: (value: number) => void;
}

// This function helps in parsing the formatted value
function parseNumberFromString(value: string): number {
  // Removes everything except digits
  const cleaned = value.replace(/[^\d]/g, "");
  return Number(cleaned);
}

export default function InputSlider({
  label,
  symbol,
  symbolPosition,
  value,
  min,
  max,
  step,
  width,
  onChange,
}: InputSliderProps) {
  // logic to get padding based on symbol
  const getPadding = () => {
    if (symbolPosition === "start") {
      if (String(symbol).length === 1) {
        return "pl-6";
      } else if (String(symbol).length === 2) {
        return "pl-8";
      } else {
        return "pl-12";
      }
    }

    if (symbolPosition === "end") {
      if (String(symbol).length === 1) {
        return "pr-6.5";
      } else if (String(symbol).length === 2) {
        return "pr-8";
      } else {
        return "pr-14";
      }
    }

    const isIcon = typeof symbol !== "string";
    if (isIcon) {
      if (symbolPosition === "start") {
        return "pl-8";
      } else {
        return "pr-8";
      }
    }
  };

  return (
    <>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <label className="text-lg font-medium text-paisa-blue">{label}</label>
          <div className="relative flex items-center">
            {symbol && symbolPosition === "start" && (
              <span className="absolute left-3 flex items-center text-paisa-gold z-10">
                {symbol}
              </span>
            )}
            <input
              type="text"
              style={{ width: `${width}px` }}
              className={`px-3 py-2 bg-paisa-cream text-paisa-gold font-semibold rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200 text-right ${getPadding()}`}
              value={formatINR(value)}
              onChange={(e) => {
                const num = parseNumberFromString(e.target.value);
                onChange(num);
              }}
              min={min}
              max={max}
              step={step}
            />
            {symbol && symbolPosition === "end" && (
              <span className="absolute right-3 flex items-center text-paisa-gold z-10">
                {symbol}
              </span>
            )}
          </div>
        </div>
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(e: number[]) => onChange(e[0] ?? 0)}
        />
      </div>
    </>
  );
}
