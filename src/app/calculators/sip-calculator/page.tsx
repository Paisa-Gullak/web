import SipCalc from "@/components/sip-calc";

export default function SipCalculator() {
  return (
    <>
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex flex-row items-center gap-3 mb-3">
            <h1 className="text-3xl lg:text-5xl font-bold text-paisa-blue ">
              SIP Calculator{" "}
            </h1>
            <span className="text-lg font-semibold text-paisa-gold">
              (Systematic Investment Plan)
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl text-paisa-light-blue font-semibold mb-3">
            Plan Your Mutual Fund Investments
          </h2>
          <p className="max-w-3xl text-lg text-gray-600 mb-6">
            Use our free SIP Calculator to estimate returns, track growth, and
            plan your mutual fund investments with ease.
          </p>

          <SipCalc />
        </div>
      </section>
    </>
  );
}
