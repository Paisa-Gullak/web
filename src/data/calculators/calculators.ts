import LumpsumCalc from "@/components/lumpsum-calc";
import RiskCalc from "@/components/risk-calc";
import SipCalc from "@/components/sip-calc";
import StepUpSipCalc from "@/components/step-up-sip-calc";
import StpCalc from "@/components/stp-calc";
import SWPCalc from "@/components/swp-calc";

export const calculators = {
  "sip-calculator": {
    title: "SIP Calculator",
    fullform: "(Systematic Investment Plan)",
    subTitle: "Plan Your Mutual Fund Investments",
    description:
      "Use our free SIP Calculator to estimate returns, track growth, and plan your mutual fund investments with ease.",
    component: SipCalc,
  },
  "lumpsum-calculator": {
    title: "Lumpsum Calculator",
    fullform: "",
    subTitle: "Grow Your Money Smarter & Faster",
    description:
      "Turn your one-time investment into a wealth-building plan! Our Lumpsum Calculator shows how your money can grow over time with the power of compounding. Simple, fast & accurate—start planning today.",
    component: LumpsumCalc,
  },
  "stp-calculator": {
    title: "STP Calculator",
    fullform: "(Systematic Investment Plan)",
    subTitle: "Grow wealth step by step with systematic fund transfers",
    description:
      "The Systematic Transfer Plan (STP) Calculator helps you move investments from one fund to another at regular intervals. Enter your amount, transfer value, expected return, and time period to see invested capital, transfers, and maturity value. Plan smarter to balance risk and maximize long-term returns.",
    component: StpCalc,
  },
  "swp-calculator": {
    title: "SWP Calculator",
    fullform: "(Systematic Withdrawl Plan)",
    subTitle: "Turn investments into steady income",
    description:
      "Plan smart withdrawals with our SWP Calculator. Track payouts, growth, and investment balance instantly.",
    component: SWPCalc,
  },
  "step-up-sip-calculator": {
    title: "Step-Up SIP Calculator",
    fullform: "",
    subTitle: "Level Up Your Money Game",
    description:
      "Don’t let your SIP stay stuck in the past. With Step-Up SIP, you boost your investment every year and watch compounding work like magic. Start small, grow big, and let your money hustle harder than you do.",
    component: StepUpSipCalc,
  },
  "risk-calculator": {
    title: "Risk Calculator",
    fullform: "",
    subTitle: "Grow wealth step by step with systematic fund transfers",
    description:
      "The Systematic Transfer Plan (STP) Calculator helps you move investments from one fund to another at regular intervals. Enter your amount, transfer value, expected return, and time period to see invested capital, transfers, and maturity value. Plan smarter to balance risk and maximize long-term returns.",
    component: RiskCalc,
  },
  "human-life-value-calculator": {
    title: "HLV Calculator",
    fullform: "(Human Life Value)",
    subTitle: "Human Life Value Calculator - Know Your True Financial Worth",
    description:
      "The Human Life Value (HLV) Calculator helps you determine the ideal life insurance amount needed to safeguard your family's future. By analyzing your income potential, living expenses, outstanding debts, and years until retirement, our HLV calculation tool provides a scientifically-backed coverage recommendation. Don't leave your family's financial security to chance - calculate your human life value free online and get the right protection today.",
    component: "",
  },
};
