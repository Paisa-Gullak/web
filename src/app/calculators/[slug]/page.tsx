import { calculators } from "@/data/calculators/calculators";
import { notFound } from "next/navigation";

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: keyof typeof calculators }>;
}) {
  // step 1 - find the calaulator using the slug
  const { slug } = await params;

  const calculator = calculators[slug];

  // check if the calaulator exists or not if not show not found component
  if (!calculator) {
    notFound();
  }

  // if the calculator exist then get the calculator component
  const Calculator = calculator.component;

  // render the componenet
  return (
    <>
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex flex-row items-center gap-3 mb-3">
            <h1 className="text-3xl lg:text-5xl font-bold text-paisa-blue ">
              {calculator.title}{" "}
            </h1>
            <span className="text-lg font-semibold text-paisa-gold">
              {calculator.fullform}
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl text-paisa-light-blue font-semibold mb-3">
            {calculator.subTitle}
          </h2>
          <p className="max-w-3xl text-lg text-gray-600 mb-6">
            {calculator.description}
          </p>

          <Calculator />
        </div>
      </section>
    </>
  );
}
