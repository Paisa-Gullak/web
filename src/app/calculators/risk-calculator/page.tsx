import RiskCalc from "@/components/risk-calc";

export default function RiskCalculator() {
  return (
    <>
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex flex-row items-center gap-3 mb-3">
            <h1 className="text-3xl lg:text-5xl font-bold text-paisa-blue">
              Risk Calculator
            </h1>
          </div>
          <h2 className="text-xl lg:text-2xl text-paisa-light-blue font-semibold mb-3">
            Calculate Your Life Insurance Premium in 60 Seconds
          </h2>
          <p className="max-w-3xl text-lg text-gray-600 mb-6">
            Get instant life insurance premium estimates with India's most
            accurate risk calculator. Discover your personalized monthly and
            annual premium costs in seconds, not days. Compare affordable rates,
            understand your coverage options, and make confident decisions about
            protecting your family's financial future today.
          </p>

          <RiskCalc />
        </div>
      </section>
    </>
  );
}
