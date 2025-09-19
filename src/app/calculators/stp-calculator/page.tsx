import StpCalc from "@/components/stp-calc";

export default function STPCalc() {
  return (
    <>
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex flex-row items-center gap-3 mb-3">
            <h1 className="text-3xl lg:text-5xl font-bold text-paisa-blue ">
              STP Calculator{" "}
            </h1>
            <span className="text-lg font-semibold text-paisa-gold">
              (Systematic Transfer Plan)
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl text-paisa-light-blue font-semibold mb-3">
            Grow wealth step by step with systematic fund transfers
          </h2>
          <p className="max-w-3xl text-lg text-gray-600 mb-6">
            The Systematic Transfer Plan (STP) Calculator helps you move
            investments from one fund to another at regular intervals. Enter
            your amount, transfer value, expected return, and time period to see
            invested capital, transfers, and maturity value. Plan smarter to
            balance risk and maximize long-term returns.
          </p>

          <StpCalc />
        </div>
      </section>
    </>
  );
}
