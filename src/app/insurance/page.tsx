"use client";

import React, { useState } from "react";
import {
  IconShield,
  IconYinYangFilled,
  IconTax,
  IconBolt,
  IconCircleCheck,
  IconHeartbeat,
  IconHeart,
  IconTrendingUp,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";

const InsurancePage = () => {
  const [selectedTab, setSelectedTab] = useState("life");
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [dependents, setDependents] = useState<string>("");
  const [estCoverage, setEstCoverage] = useState<number>(0);

  // Calculate Multiplier
  function getMultiplier(age: number): number {
    switch (true) {
      case age <= 25:
        return 25;
      case age < 29:
        return 22;
      case age < 34:
        return 20;
      case age < 39:
        return 18;
      case age < 44:
        return 15;
      case age < 49:
        return 12;
      case age < 54:
        return 10;
      case age < 59:
        return 8;
      default:
        return 6;
    }
  }

  // formula to calculate estimated insurance value
  function handleCalculate() {
    const income = Number(monthlyIncome);
    const personAge = Number(age);
    const numOfDependents = Number(dependents);

    const multiplier = getMultiplier(personAge);

    const coverage = income * 12 * multiplier * numOfDependents;
    setEstCoverage(coverage);
  }

  // formatting big value
  function format(value: number): string {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(2) + " " + "Cr";
    } else if (value >= 100000) {
      return (value / 100000).toFixed(2) + " " + "L";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(0) + " " + "K";
    } else {
      return value.toString();
    }
  }

  const insuranceTypes = [
    { id: "life", name: "Life Insurance", icon: <IconHeartbeat size={20} /> },
    { id: "health", name: "Health Insurance", icon: <IconHeart size={20} /> },
    { id: "term", name: "Term Insurance", icon: <IconShield size={20} /> },
    {
      id: "investment",
      name: "Investment Plans",
      icon: <IconTrendingUp size={20} />,
    },
  ];

  const lifePlans = [
    {
      id: 1,
      name: "Paisa Gullak Life Shield",
      type: "Term Life Insurance",
      coverage: "₹1 Cr",
      premium: "₹850/month",
      features: [
        "100% Online Process",
        "No Medical Tests up to 40 years",
        "Tax Benefits under 80C",
        "Accidental Death Benefit",
      ],
      badges: ["Most Popular", "Best Value"],
      ageRange: "18-65 years",
      payout: "Lump sum + Monthly income option",
    },
    {
      id: 2,
      name: "Family Protector Plus",
      type: "Family Term Plan",
      coverage: "₹2 Cr",
      premium: "₹1,200/month",
      features: [
        "Covers Spouse & Children",
        "Waiver of Premium Benefit",
        "Critical Illness Cover",
        "Income Replacement Option",
      ],
      badges: ["Family Protection", "Comprehensive"],
      ageRange: "21-55 years",
      payout: "Monthly income for 15 years",
    },
    {
      id: 3,
      name: "Wealth Builder ULIP",
      type: "Investment + Insurance",
      coverage: "₹25 Lakh",
      premium: "₹5,000/month",
      features: [
        "Market-Linked Returns",
        "Partial Withdrawal After 5 Years",
        "Fund Switching Options",
        "Life Cover + Wealth Creation",
      ],
      badges: ["Investment Plan", "Tax Saver"],
      ageRange: "18-60 years",
      payout: "Investment value + Life cover",
    },
  ];

  const healthPlans = [
    {
      id: 1,
      name: "Essential Health Cover",
      type: "Individual Health",
      coverage: "₹5 Lakh",
      premium: "₹3,500/year",
      features: [
        "Cashless Treatment",
        "Pre & Post Hospitalization",
        "Day Care Procedures",
        "Free Health Checkups",
      ],
      badges: ["Beginner Friendly", "Affordable"],
      ageRange: "18-65 years",
      payout: "Cashless or Reimbursement",
    },
    {
      id: 2,
      name: "Family Health Shield",
      type: "Family Floater",
      coverage: "₹10 Lakh",
      premium: "₹8,500/year",
      features: [
        "Covers 4 Family Members",
        "Maternity Benefits",
        "New Born Baby Cover",
        "Alternative Medicine",
      ],
      badges: ["Family Plan", "Comprehensive"],
      ageRange: "18-65 years",
      payout: "Shared family coverage",
    },
    {
      id: 3,
      name: "Super Health Pro",
      type: "Super Top-up",
      coverage: "₹25 Lakh",
      premium: "₹6,000/year",
      features: [
        "High Coverage at Low Cost",
        "Critical Illness Cover",
        "International Coverage",
        "Mental Health Support",
      ],
      badges: ["High Coverage", "Premium"],
      ageRange: "18-70 years",
      payout: "After deductible limit",
    },
  ];

  const termPlans = [
    {
      id: 1,
      name: "Pure Term Protector",
      type: "Pure Term",
      coverage: "₹50 Lakh",
      premium: "₹650/month",
      features: [
        "Lowest Premium",
        "Online Process",
        "No Medical Tests",
        "Quick Claim Settlement",
      ],
      badges: ["Lowest Cost", "Pure Protection"],
      ageRange: "18-60 years",
      payout: "Lump sum payout",
    },
    {
      id: 2,
      name: "Income Replacement Plan",
      type: "Income Term",
      coverage: "₹1 Cr",
      premium: "₹1,100/month",
      features: [
        "Monthly Income to Family",
        "Inflation Protection",
        "Premium Return Option",
        "Disability Benefits",
      ],
      badges: ["Income Protection", "Advanced"],
      ageRange: "25-55 years",
      payout: "Monthly income for 15 years",
    },
  ];

  const investmentPlans = [
    {
      id: 1,
      name: "Guaranteed Savings Plan",
      type: "Traditional Plan",
      coverage: "₹20 Lakh",
      premium: "₹10,000/month",
      features: [
        "Guaranteed Returns",
        "Life Insurance Cover",
        "Tax Benefits",
        "Maturity Benefits",
      ],
      badges: ["Guaranteed Returns", "Safe Investment"],
      ageRange: "18-50 years",
      payout: "Guaranteed maturity + cover",
    },
    {
      id: 2,
      name: "Market Plus ULIP",
      type: "Market Linked",
      coverage: "₹30 Lakh",
      premium: "₹8,000/month",
      features: [
        "Market-Linked Growth",
        "Fund Management",
        "Partial Withdrawals",
        "Switch Between Funds",
      ],
      badges: ["Market Returns", "Flexible"],
      ageRange: "18-55 years",
      payout: "Market value + cover",
    },
  ];

  const getCurrentPlans = () => {
    switch (selectedTab) {
      case "life":
        return lifePlans;
      case "health":
        return healthPlans;
      case "term":
        return termPlans;
      case "investment":
        return investmentPlans;
      default:
        return lifePlans;
    }
  };

  const benefits = [
    {
      icon: <IconShield className="text-paisa-gold" size={32} />,
      title: "Financial Security",
      description:
        "Protect your family's financial future against unexpected events and ensure their lifestyle continues.",
    },
    {
      icon: <IconYinYangFilled className="text-paisa-gold" size={32} />,
      title: "Peace of Mind",
      description:
        "Sleep peacefully knowing your loved ones are financially protected in your absence.",
    },
    {
      icon: <IconTax className="text-paisa-gold" size={32} />,
      title: "Tax Benefits",
      description:
        "Save taxes under Section 80C, 80D and other provisions while securing your future.",
    },
    {
      icon: <IconBolt className="text-paisa-gold" size={32} />,
      title: "Quick Claims",
      description:
        "Fast and hassle-free claim settlement process with 98% claim settlement ratio.",
    },
  ];

  const whyChooseUs = [
    "IRDA Regulated Plans",
    "98% Claim Settlement Ratio",
    "24/7 Customer Support",
    "Paperless Process",
    "Free Policy Reviews",
    "Expert Guidance",
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Insurance Made <span className="text-paisa-gold">Simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Protect what matters most. Comprehensive life and health insurance
              plans designed for young professionals with transparent pricing
              and quick claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <IconShield size={20} />
                <span>Get Instant Quote</span>
              </button>
              <button className="btn-secondary">Compare Plans</button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">98%</div>
              <div className="text-gray-600">Claim Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">₹1 Cr</div>
              <div className="text-gray-600">Max Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">5 Min</div>
              <div className="text-gray-600">Online Process</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">15,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Why Insurance is Essential
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the importance of insurance in your financial
              planning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-paisa-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Choose Your Protection Plan
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive insurance solutions tailored for your life stage and
              needs.
            </p>
          </div>

          {/* Plan Type Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {insuranceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedTab(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTab === type.id
                    ? "bg-paisa-gold text-white"
                    : "bg-white text-paisa-blue border border-gray-300 hover:border-paisa-gold"
                }`}
              >
                {type.icon}
                <span>{type.name}</span>
              </button>
            ))}
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {getCurrentPlans().map((plan, index) => (
              <div
                key={plan.id}
                className="card p-6 hover:shadow-lg transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-paisa-blue mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{plan.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-paisa-gold">
                      {plan.coverage}
                    </div>
                    <div className="text-sm text-gray-500">Coverage</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.badges.map((badge, i) => (
                    <span key={i} className="badge badge-success text-xs">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="text-lg font-semibold text-paisa-blue mb-1">
                    {plan.premium}
                  </div>
                  <div className="text-sm text-gray-500">
                    Premium starting from
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <IconCircleCheck
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Age Range:</span>
                    <span className="font-medium">{plan.ageRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payout:</span>
                    <span className="font-medium">{plan.payout}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                    <span>Get Quote</span>
                    <IconArrowRight size={16} />
                  </button>
                  <button className="btn-secondary px-4">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-6">
                How to Choose the Right Plan?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-paisa-gold text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-paisa-blue mb-2">
                      Calculate Your Need
                    </h3>
                    <p className="text-gray-600">
                      Determine how much coverage you need based on your income,
                      debts, and family's future expenses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-paisa-gold text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-paisa-blue mb-2">
                      Assess Your Budget
                    </h3>
                    <p className="text-gray-600">
                      Choose a premium amount that fits comfortably in your
                      monthly budget without straining finances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-paisa-gold text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-paisa-blue mb-2">
                      Compare Features
                    </h3>
                    <p className="text-gray-600">
                      Look at coverage benefits, exclusions, claim settlement
                      ratio, and additional riders available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-paisa-gold text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-paisa-blue mb-2">
                      Get Expert Advice
                    </h3>
                    <p className="text-gray-600">
                      Speak with our certified advisors to ensure you're making
                      the right choice for your situation.
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn-primary mt-6">
                Talk to Insurance Expert
              </button>
            </div>
            <div className="animate-scale-in">
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-paisa-blue mb-6">
                  Quick Coverage Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Income
                    </label>
                    <input
                      type="number"
                      placeholder="₹50,000"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="28"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dependents
                    </label>
                    <select
                      value={dependents}
                      onChange={(e) => setDependents(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent"
                    >
                      <option>Select number of dependents</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5+</option>
                    </select>
                  </div>
                  <button
                    onClick={handleCalculate}
                    className="btn-primary w-full"
                  >
                    Calculate Coverage Need
                  </button>
                </div>
                <div className="mt-6 p-4 bg-paisa-gold/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">
                      Recommended Coverage
                    </div>
                    <div className="text-2xl font-bold text-paisa-gold">
                      {estCoverage === 0 ? (
                        <div>₹75 L</div>
                      ) : (
                        "₹" + format(estCoverage)
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      Based on your inputs
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm mt-4">
                  Disclaimer: The insurance value shown is only an estimate
                  based on limited inputs. For a personalized and accurate
                  calculation, please{" "}
                  <Link className="underline text-paisa-gold" href="/contact">
                    contact us.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Paisa Gullak */}
      <section className="py-16 bg-paisa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Why Choose Paisa Gullak for Insurance?
            </h2>
            <p className="text-xl text-gray-600">
              We make insurance simple, transparent, and accessible for
              everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconCircleCheck className="text-paisa-gold" size={22} />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-paisa-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Secure Your Future Today
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Don't wait for tomorrow. Protect your family's financial future with
            the right insurance plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-paisa-gold hover:bg-paisa-gold/90">
              Get Instant Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-paisa-blue font-medium py-3 px-6 rounded-lg transition-all duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;
