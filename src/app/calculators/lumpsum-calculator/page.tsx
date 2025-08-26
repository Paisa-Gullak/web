import LumpsumCalc from "@/components/lumpsum-calc";

export default function LumpsumCalculator() {
  return (
    <>
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex flex-row items-center gap-3 mb-3">
            <h1 className="text-3xl lg:text-5xl font-bold text-paisa-blue ">
              Lumpsum Calculator
            </h1>
          </div>
          <h2 className="text-xl lg:text-2xl text-paisa-light-blue font-semibold mb-3">
            Grow Your Money Smarter & Faster
          </h2>
          <p className="max-w-3xl text-lg text-gray-600 mb-6">
            Turn your one-time investment into a wealth-building plan! Our
            Lumpsum Calculator shows how your money can grow over time with the
            power of compounding. Simple, fast & accurate—start planning today.
          </p>

          <LumpsumCalc />
        </div>
      </section>
    </>
  );
}
