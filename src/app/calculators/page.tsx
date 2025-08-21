import {
  IconChartHistogram,
  IconTax,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";

export default function CalculatorsPage() {
  const calculators = [
    {
      id: 1,
      icon: <IconChartHistogram className="text-paisa-gold" size={24} />,
      title: "SIP Calculator",
      description:
        "Calculate your Systematic Investment Plan returns with our advanced calculator. Plan your financial future with accurate projections and year-wise breakdowns.",
      link: "/calculators/sip-calculator",
      linkText: "See Your Returns",
    },
    {
      id: 2,
      icon: <IconTax className="text-paisa-gold" size={24} />,
      title: "Lumpsum Calculator",
      description:
        "Calculate returns on your one-time investment with our lumpsum calculator. See how your single investment can grow over time with compound interest.",
      link: "/calculators/lumpsum-calculator",
      linkText: "Multiply Your Investment",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Explore Powerful{" "}
              <span className="text-paisa-gold">Financial Calculators</span>
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-paisa-blue mb-6">
              SIP, EMI, Tax, Insurance & More
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Quickly estimate SIP returns, loan EMIs, tax, insurance needs, and
              beyond with our user-friendly calculators. All in one place,
              simple to use, and free—designed to help you make smarter
              financial decisions
            </p>
          </div>
        </div>
      </section>

      {/* All Calculators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc, index) => (
              <div
                key={calc.id}
                className="card p-6 text-center hover:shadow-lg transition-shadow duration-200 animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="h-10 w-10 bg-paisa-cream flex justify-center items-center rounded-full">
                    <div>{calc.icon}</div>
                  </div>
                  <h2 className="text-2xl font-bold text-paisa-blue">
                    {calc.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{calc.description}</p>
                <div className="mt-auto">
                  <Link
                    className="btn-primary w-full text-sm py-2 flex justify-center items-center gap-2"
                    href="/calculators/sip-calculator"
                  >
                    {calc.linkText}{" "}
                    <span>
                      <IconArrowRight size={20} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
