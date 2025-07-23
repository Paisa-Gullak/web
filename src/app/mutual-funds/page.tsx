"use client";

import React, { useState } from "react";
import {
  IconTrendingUp,
  IconSearch,
  IconFilter,
  IconStar,
  IconChartHistogram,
  IconTargetArrow,
  IconShield,
  IconCalendarClock,
  IconArrowRight,
} from "@tabler/icons-react";

const MutualFundsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRisk, setSelectedRisk] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Funds", count: 45 },
    { id: "equity", name: "Equity", count: 20 },
    { id: "debt", name: "Debt", count: 15 },
    { id: "hybrid", name: "Hybrid", count: 8 },
    { id: "elss", name: "Tax Saver (ELSS)", count: 2 },
  ];

  const riskLevels = [
    { id: "all", name: "All Risk Levels" },
    { id: "low", name: "Low Risk" },
    { id: "moderate", name: "Moderate Risk" },
    { id: "high", name: "High Risk" },
  ];

  const featuredFunds = [
    {
      id: 1,
      name: "SBI BlueChip Fund",
      category: "Large Cap Equity",
      aum: "₹35,240 Cr",
      returns1y: "15.2%",
      returns3y: "12.8%",
      minSip: "₹500",
      rating: 4,
      risk: "moderate",
      expenseRatio: "1.85%",
      badges: ["Beginner Friendly", "Top Performer"],
      description:
        "Invests in India's most stable large-cap companies. Perfect for first-time investors.",
    },
    {
      id: 2,
      name: "HDFC Balanced Advantage Fund",
      category: "Hybrid",
      aum: "₹28,150 Cr",
      returns1y: "13.5%",
      returns3y: "11.2%",
      minSip: "₹500",
      rating: 5,
      risk: "low",
      expenseRatio: "1.55%",
      badges: ["Low Risk", "Advisor Pick"],
      description:
        "Automatically balances between equity and debt based on market conditions.",
    },
    {
      id: 3,
      name: "Axis Long Term Equity Fund",
      category: "ELSS (Tax Saver)",
      aum: "₹22,890 Cr",
      returns1y: "16.8%",
      returns3y: "14.1%",
      minSip: "₹500",
      rating: 4,
      risk: "moderate",
      expenseRatio: "1.75%",
      badges: ["Tax Saver", "3-Year Lock-in"],
      description:
        "Save tax under 80C while building wealth. 3-year lock-in period.",
    },
    {
      id: 4,
      name: "ICICI Prudential Technology Fund",
      category: "Sector - Technology",
      aum: "₹18,320 Cr",
      returns1y: "22.4%",
      returns3y: "18.7%",
      minSip: "₹1,000",
      rating: 4,
      risk: "high",
      expenseRatio: "2.15%",
      badges: ["High Growth", "Sector Fund"],
      description: "Focused on India's booming technology and digital sectors.",
    },
    {
      id: 5,
      name: "Kotak Liquid Fund",
      category: "Liquid Debt",
      aum: "₹15,680 Cr",
      returns1y: "6.8%",
      returns3y: "6.2%",
      minSip: "₹1,000",
      rating: 3,
      risk: "low",
      expenseRatio: "0.45%",
      badges: ["Ultra Safe", "Emergency Fund"],
      description:
        "Better than savings account. Instant withdrawals available.",
    },
    {
      id: 6,
      name: "Mirae Asset Emerging Bluechip Fund",
      category: "Large & Mid Cap",
      aum: "₹32,450 Cr",
      returns1y: "18.9%",
      returns3y: "15.6%",
      minSip: "₹500",
      rating: 5,
      risk: "moderate",
      expenseRatio: "1.95%",
      badges: ["Star Performer", "Growth Focused"],
      description:
        "Invests in companies transitioning from mid-cap to large-cap.",
    },
  ];

  const investmentSteps = [
    {
      step: 1,
      title: "Choose Your Fund",
      description:
        "Browse and select funds that match your goals and risk appetite.",
    },
    {
      step: 2,
      title: "Complete KYC",
      description:
        "One-time verification process - takes just 5 minutes online.",
    },
    {
      step: 3,
      title: "Start SIP",
      description:
        "Begin your systematic investment plan with as little as ₹500.",
    },
    {
      step: 4,
      title: "Track & Grow",
      description:
        "Monitor your investments and watch your wealth grow over time.",
    },
  ];

  const filteredFunds = featuredFunds.filter((fund) => {
    const matchesCategory =
      selectedCategory === "all" ||
      fund.category.toLowerCase().includes(selectedCategory);
    const matchesRisk = selectedRisk === "all" || fund.risk === selectedRisk;
    const matchesSearch =
      fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesRisk && matchesSearch;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-green-600 bg-green-100";
      case "moderate":
        return "text-yellow-600 bg-yellow-100";
      case "high":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Mutual <span className="text-paisa-gold">Funds</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Mutual funds are well-regulated by SEBI to ensure transparency,
              safety, and efficient management. Invest smartly with handpicked
              mutual funds — start your SIP with just ₹500 and let expert fund
              managers grow your wealth.-
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <IconTrendingUp size={20} />
                <span>Start SIP Now</span>
              </button>
              <button className="btn-secondary">Need Help Choosing?</button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">45+</div>
              <div className="text-gray-600">Curated Funds</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">₹500</div>
              <div className="text-gray-600">Min SIP Amount</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">15.2%</div>
              <div className="text-gray-600">Avg Returns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-paisa-blue">25,000+</div>
              <div className="text-gray-600">Active SIPs</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              How to Start Investing
            </h2>
            <p className="text-xl text-gray-600">
              Get started with mutual funds in just 4 simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-paisa-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-paisa-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <IconSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search funds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <IconFilter size={20} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent"
              >
                {riskLevels.map((risk) => (
                  <option key={risk.id} value={risk.id}>
                    {risk.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFunds.map((fund, index) => (
              <div
                key={index}
                className="card p-6 hover:shadow-lg transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-paisa-blue mb-2">
                      {fund.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {fund.category}
                    </p>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <IconStar
                            key={i}
                            size={14}
                            className={
                              i < fund.rating
                                ? "fill-paisa-gold text-paisa-gold"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({fund.rating}/5)
                      </span>
                    </div>
                  </div>
                  <div className={`badge ${getRiskColor(fund.risk)} text-xs`}>
                    {fund.risk} Risk
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{fund.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {fund.badges.map((badge, i) => (
                    <span key={i} className="badge badge-info text-xs">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">1Y Returns</span>
                    <div className="font-semibold text-green-600">
                      {fund.returns1y}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">3Y Returns</span>
                    <div className="font-semibold text-green-600">
                      {fund.returns3y}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Min SIP</span>
                    <div className="font-semibold text-paisa-blue">
                      {fund.minSip}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Expense Ratio</span>
                    <div className="font-semibold text-gray-700">
                      {fund.expenseRatio}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                    <span>Start SIP</span>
                    <IconArrowRight size={16} />
                  </button>
                  <button className="btn-secondary px-4">View Details</button>
                </div>
              </div>
            ))}
          </div>

          {filteredFunds.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                No funds found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedRisk("all");
                  setSearchTerm("");
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Investment Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Investment Guide for Beginners
            </h2>
            <p className="text-xl text-gray-600">
              Essential concepts every new investor should understand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-paisa-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconChartHistogram className="text-paisa-gold" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-paisa-blue mb-3">
                SIP (Systematic Investment Plan)
              </h3>
              <p className="text-gray-600 text-sm">
                Invest a fixed amount regularly to benefit from rupee cost
                averaging and compound growth.
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-paisa-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconTargetArrow className="text-paisa-gold" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-paisa-blue mb-3">
                Asset Allocation
              </h3>
              <p className="text-gray-600 text-sm">
                Diversify your investments across equity, debt, and hybrid funds
                based on your risk profile.
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-paisa-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconShield className="text-paisa-gold" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-paisa-blue mb-3">
                Risk Management
              </h3>
              <p className="text-gray-600 text-sm">
                Understand your risk tolerance and choose funds that align with
                your comfort level.
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-paisa-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconCalendarClock className="text-paisa-gold" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-paisa-blue mb-3">
                Long-term Investing
              </h3>
              <p className="text-gray-600 text-sm">
                Stay invested for the long term to maximize returns and achieve
                your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-paisa-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Your SIP Journey Today
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of investors who are already building wealth with
            systematic investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-paisa-gold hover:bg-paisa-gold/90">
              Calculate SIP Returns
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-paisa-blue font-medium py-3 px-6 rounded-lg transition-all duration-200">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualFundsPage;
