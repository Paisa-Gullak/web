"use client";

import {
  IconSettings2,
  IconTrendingUp,
  IconHeartbeat,
  IconHeart,
  IconMotorbike,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function FaqsPage() {
  const [faqTab, setFaqTab] = useState("gen");

  const generalFaqs = [
    {
      category: "General",
      question: "What is Paisa Gullak?",
      answer:
        "Paisa Gullak is a financial platform that helps users compare, invest, and understand mutual funds and insurance plans tailored to their needs.",
    },
    {
      category: "General",
      question: "Is Paisa Gullak free to use?",
      answer:
        "Yes, Paisa Gullak is completely free for users. You can explore plans, compare policies, and access calculators without any charges.",
    },
    {
      category: "General",
      question:
        "How does Paisa Gullak help me choose the right financial product?",
      answer:
        "Paisa Gullak provides curated options, smart calculators, and personalized recommendations to help you choose the right mutual funds or insurance plans based on your goals.",
    },
    {
      category: "General",
      question: "Is Paisa Gullak safe and secure?",
      answer:
        "Yes, we follow industry-standard security practices to ensure your data is protected and your interactions remain private.",
    },
    {
      category: "General",
      question: "Can I compare different insurance plans on Paisa Gullak?",
      answer:
        "Absolutely. Paisa Gullak lets you compare life, health, and motor insurance plans side-by-side to find the one that best fits your needs.",
    },
    {
      category: "General",
      question: "Do I need to sign up to use Paisa Gullak?",
      answer:
        "No sign-up is needed to explore most features. However, creating an account lets you save preferences, track tools, and get personalized updates.",
    },
    {
      category: "General",
      question: "How do I contact Paisa Gullak support?",
      answer:
        "You can contact us through our website's 'Contact Us' section or email support@paisagullak.com for any queries or support.",
    },
    {
      category: "General",
      question:
        "Can I trust the insurance and mutual fund suggestions by Paisa Gullak?",
      answer:
        "Yes. We base our suggestions on data-backed insights, IRDAI-licensed provider information, and user preferences.",
    },
    {
      category: "General",
      question: "What financial tools does Paisa Gullak offer?",
      answer:
        "Paisa Gullak offers tools like insurance calculators, SIP calculators, comparison engines, and coverage estimators.",
    },
    {
      category: "General",
      question:
        "Can Paisa Gullak help me understand my financial needs better?",
      answer:
        "Yes. Our platform simplifies finance by breaking down complex products into simple, understandable insights tailored to your income and goals.",
    },
  ];

  const mutualFundsFaqs = [
    {
      category: "Mutual Funds",
      question: "What is a mutual fund and how does it work?",
      answer:
        "A mutual fund pools money from investors and invests in a diversified portfolio like stocks, bonds, or other securities, managed by professional fund managers.",
    },
    {
      category: "Mutual Funds",
      question: "What are the different types of mutual funds in India?",
      answer:
        "There are equity funds, debt funds, hybrid funds, ELSS (tax-saving), index funds, and more — each suited to different investment goals.",
    },
    {
      category: "Mutual Funds",
      question: "What is SIP (Systematic Investment Plan)?",
      answer:
        "SIP is a way to invest small, fixed amounts regularly into a mutual fund — monthly, weekly, or quarterly — rather than a lump sum.",
    },
    {
      category: "Mutual Funds",
      question: "What is NAV in mutual funds?",
      answer:
        "NAV or Net Asset Value is the price of one unit of a mutual fund scheme. It is calculated daily based on market performance.",
    },
    {
      category: "Mutual Funds",
      question: "How to start investing in mutual funds online?",
      answer:
        "You can invest via platforms like PaisaGullak. Just complete your KYC, choose a fund, and start with as low as ₹100/month.",
    },
    {
      category: "Mutual Funds",
      question: "How much return can I expect from mutual funds?",
      answer:
        "Equity funds may offer 10–15% average long-term returns, while debt funds offer lower but stable returns. Past performance is not a guarantee.",
    },
    {
      category: "Mutual Funds",
      question: "Are mutual funds better than fixed deposits?",
      answer:
        "Mutual funds can provide higher returns over the long term, but come with risk. FDs offer fixed, low-risk returns. Choose based on your goals.",
    },
    {
      category: "Mutual Funds",
      question: "Which are the best mutual funds to invest in 2025?",
      answer:
        "Top-performing funds vary by year. Always invest based on your goals, risk appetite, and time horizon — not just past returns.",
    },
    {
      category: "Mutual Funds",
      question: "Are mutual funds safe for beginners?",
      answer:
        "Yes, especially SIPs in index funds or large-cap funds. However, returns are market-linked and may fluctuate in the short term.",
    },
    {
      category: "Mutual Funds",
      question: "What are the risks of investing in mutual funds?",
      answer:
        "Market volatility, fund manager performance, interest rate risks (for debt funds), and inflation can all impact returns.",
    },
    {
      category: "Mutual Funds",
      question: "How do I choose the right mutual fund for me?",
      answer:
        "Choose based on your financial goal (short/long term), risk appetite, investment horizon, and fund track record.",
    },
    {
      category: "Mutual Funds",
      question: "Are mutual fund returns taxable in India?",
      answer:
        "Yes. Equity fund gains above ₹1 lakh/year are taxed at 10%. Debt funds are taxed differently. ELSS offers tax deductions under Sec 80C.",
    },
    {
      category: "Mutual Funds",
      question: "What is ELSS and how does it help save tax?",
      answer:
        "ELSS (Equity Linked Saving Scheme) is a tax-saving mutual fund under Section 80C with a 3-year lock-in. It offers high return potential.",
    },
    {
      category: "Mutual Funds",
      question: "Do I need a PAN card to invest in mutual funds?",
      answer:
        "Yes. PAN and Aadhaar are mandatory for KYC and investing in India.",
    },
    {
      category: "Mutual Funds",
      question: "Can I stop or pause my SIP anytime?",
      answer:
        "Yes. You can modify, pause, or cancel SIPs via your investment platform anytime without penalty.",
    },
    {
      category: "Mutual Funds",
      question: "How can I redeem my mutual fund investment?",
      answer:
        "You can redeem through your platform/app. The money is credited to your bank within 1–3 working days, depending on the fund type.",
    },
    {
      category: "Mutual Funds",
      question: "What happens if I miss a SIP date?",
      answer:
        "If you miss a SIP due to insufficient funds, it won’t affect your existing investments. You can resume from the next cycle.",
    },
    {
      category: "Mutual Funds",
      question: "How do I track my mutual fund investments?",
      answer:
        "You can track your portfolio on PaisaGullak or via CAMS/KFinTech statements, or through your investment platform’s dashboard.",
    },
  ];

  const lifeInsuranceFaqs = [
    {
      category: "Life Insurance",
      question: "What is life insurance?",
      answer:
        "Life insurance is a financial product that provides a lump sum payout to your family or nominee in case of your death, ensuring their financial security.",
    },
    {
      category: "Life Insurance",
      question: "Why should I buy life insurance?",
      answer:
        "Life insurance provides financial protection for your loved ones, helps pay off debts, replaces income, and ensures future expenses like education or housing are covered.",
    },
    {
      category: "Life Insurance",
      question: "What is term insurance?",
      answer:
        "Term insurance is a simple and affordable life insurance policy that offers high coverage for a fixed term, with no maturity benefits if you survive the term.",
    },
    {
      category: "Life Insurance",
      question: "What is the right age to buy life insurance?",
      answer:
        "The earlier, the better. Buying young gives you lower premiums and longer coverage periods, even if you're healthy and single.",
    },
    {
      category: "Life Insurance",
      question: "How much life insurance cover do I need?",
      answer:
        "Ideally, 10–20 times your annual income, adjusted for loans, family responsibilities, and future goals.",
    },
    {
      category: "Life Insurance",
      question: "Can I have more than one life insurance policy?",
      answer:
        "Yes. You can buy multiple life insurance policies from different companies based on your needs and eligibility.",
    },
    {
      category: "Life Insurance",
      question: "What is the claim process for life insurance?",
      answer:
        "To claim, the nominee must submit the death certificate, claim form, policy documents, and KYC details to the insurer. Claims are usually settled within 30 days.",
    },
    {
      category: "Life Insurance",
      question: "What happens if I miss a premium payment?",
      answer:
        "Most policies offer a grace period. If you still don’t pay, the policy may lapse. You may be able to revive it within a certain period with penalties.",
    },
    {
      category: "Life Insurance",
      question: "Is the life insurance payout taxable?",
      answer:
        "No, the death benefit is usually tax-free under Section 10(10D) of the Income Tax Act, provided certain conditions are met.",
    },
    {
      category: "Life Insurance",
      question: "Can I change my nominee later?",
      answer:
        "Yes. You can update or change your nominee any time during the policy term by submitting a nominee change form to your insurer.",
    },
    {
      category: "Life Insurance",
      question:
        "What is the difference between term insurance and whole life insurance?",
      answer:
        "Term insurance offers coverage for a limited period with no maturity benefit. Whole life insurance provides lifetime coverage and often includes a savings or investment component.",
    },
    {
      category: "Life Insurance",
      question: "Is a medical test required for buying life insurance?",
      answer:
        "It depends on your age, sum assured, and insurer policy. High-value covers usually require medicals for accurate risk assessment.",
    },
  ];

  const healthInsuranceFaqs = [
    {
      category: "Health Insurance",
      question: "What is health insurance?",
      answer:
        "Health insurance is a policy that covers medical and surgical expenses incurred by the insured, either through cashless treatment or reimbursement.",
    },
    {
      category: "Health Insurance",
      question: "Why do I need health insurance?",
      answer:
        "It protects you from unexpected and high medical costs, covering hospital bills, surgeries, pre- and post-hospitalization, and more.",
    },
    {
      category: "Health Insurance",
      question: "What does a typical health insurance policy cover?",
      answer:
        "Most policies cover hospitalization, surgeries, day-care procedures, doctor consultations, diagnostic tests, and sometimes ambulance charges.",
    },
    {
      category: "Health Insurance",
      question: "What is a cashless claim?",
      answer:
        "A cashless claim means the insurance company directly settles your hospital bill with the network hospital, so you don't need to pay upfront.",
    },
    {
      category: "Health Insurance",
      question:
        "What is the difference between individual and family floater plans?",
      answer:
        "An individual plan covers one person, while a family floater plan provides shared coverage for all family members under one sum insured.",
    },
    {
      category: "Health Insurance",
      question: "Is there a waiting period for health insurance?",
      answer:
        "Yes. Most policies have a 30-day waiting period for general claims, and longer waiting periods (1–4 years) for pre-existing conditions and specific treatments.",
    },
    {
      category: "Health Insurance",
      question: "What is a pre-existing disease?",
      answer:
        "Any health condition or illness you had before purchasing the policy is considered pre-existing. Coverage usually begins after a waiting period.",
    },
    {
      category: "Health Insurance",
      question: "Are annual health check-ups covered?",
      answer:
        "Many health insurance plans offer free annual health check-ups after a few claim-free years or as part of their benefits package.",
    },
    {
      category: "Health Insurance",
      question: "Can I claim tax benefits on health insurance?",
      answer:
        "Yes, under Section 80D of the Income Tax Act, premiums paid for self, spouse, children, and parents are eligible for tax deductions.",
    },
    {
      category: "Health Insurance",
      question: "What happens if I don't renew my policy on time?",
      answer:
        "If you miss the renewal date and grace period, the policy lapses and you lose accumulated benefits like waiting period credits and no-claim bonuses.",
    },
    {
      category: "Health Insurance",
      question: "What is a no-claim bonus (NCB)?",
      answer:
        "NCB is a reward for not making any claims during a policy year. It can increase your sum insured without extra cost or reduce your premium.",
    },
    {
      category: "Health Insurance",
      question: "Does health insurance cover COVID-19 and other pandemics?",
      answer:
        "Yes, most health insurance plans now cover COVID-19 treatment, subject to policy terms and conditions.",
    },
    {
      category: "Health Insurance",
      question: "Can I port my health insurance to another insurer?",
      answer:
        "Yes, you can switch insurers at the time of renewal without losing benefits like waiting period credits, as per IRDAI guidelines.",
    },
  ];

  const motorInsuranceFaqs = [
    {
      category: "Motor Insurance",
      question: "What is motor insurance?",
      answer:
        "Motor insurance is a type of general insurance that provides financial protection against damages to your vehicle or third-party liabilities arising from accidents, theft, or natural disasters.",
    },
    {
      category: "Motor Insurance",
      question: "Is motor insurance mandatory in India?",
      answer:
        "Yes, as per the Motor Vehicles Act, third-party liability insurance is mandatory for all vehicles in India.",
    },
    {
      category: "Motor Insurance",
      question:
        "What is the difference between third-party and comprehensive motor insurance?",
      answer:
        "Third-party insurance covers damages to others involved in an accident caused by your vehicle, while comprehensive insurance covers both third-party and your own vehicle’s damage or loss.",
    },
    {
      category: "Motor Insurance",
      question: "Can I renew my car insurance online?",
      answer:
        "Yes, you can easily renew your car insurance online through insurance provider websites or aggregator platforms like PaisaGullak.com.",
    },
    {
      category: "Motor Insurance",
      question: "What is No Claim Bonus (NCB)?",
      answer:
        "No Claim Bonus is a discount on the premium offered to the policyholder for every claim-free year. It can be up to 50% over time.",
    },
    {
      category: "Motor Insurance",
      question: "How is the premium for motor insurance calculated?",
      answer:
        "Premium is calculated based on factors like the vehicle type, make and model, IDV (Insured Declared Value), location, age of the vehicle, and policyholder’s driving history.",
    },
    {
      category: "Motor Insurance",
      question: "Can I transfer motor insurance to a new owner?",
      answer:
        "Yes, motor insurance must be transferred to the new owner’s name when a vehicle is sold. This ensures legal and financial coverage continuity.",
    },
    {
      category: "Motor Insurance",
      question: "What is IDV in motor insurance?",
      answer:
        "IDV stands for Insured Declared Value. It’s the maximum sum insured the insurer will pay in case of total loss or theft of the vehicle.",
    },
    {
      category: "Motor Insurance",
      question: "Does motor insurance cover mechanical breakdowns?",
      answer:
        "No, standard motor insurance does not cover mechanical or electrical breakdowns. These are only covered under add-on covers like engine protection.",
    },
    {
      category: "Motor Insurance",
      question: "What should I do after a car accident to file a claim?",
      answer:
        "You should inform your insurer immediately, document the damages, take photographs, file an FIR (if required), and follow the claim process as directed by the insurer.",
    },
  ];

  const faqTabs = [
    { id: "gen", name: "General", icon: <IconSettings2 size={20} /> },
    {
      id: "mut-funds",
      name: "Mutual Funds",
      icon: <IconTrendingUp size={20} />,
    },
    {
      id: "life-ins",
      name: "Life Insurance",
      icon: <IconHeartbeat size={20} />,
    },
    {
      id: "health-ins",
      name: "Health Insurance",
      icon: <IconHeart size={20} />,
    },
    {
      id: "motor-ins",
      name: "Motor Insurance",
      icon: <IconMotorbike size={20} />,
    },
  ];

  const getCurrentFaq = () => {
    switch (faqTab) {
      case "gen":
        return generalFaqs;
      case "mut-funds":
        return mutualFundsFaqs;
      case "life-ins":
        return lifeInsuranceFaqs;
      case "health-ins":
        return healthInsuranceFaqs;
      case "motor-ins":
        return motorInsuranceFaqs;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Frequently Asked{" "}
              <span className="text-paisa-gold">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get answers to all your questions about Mutual Funds, Life,
              Health, General, and Motor Insurance. Simplified FAQs to help you
              invest and insure wisely with PaisaGullak
            </p>
          </div>
        </div>
      </section>

      {/* All FAQ's */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Find Answers, Make Confident Choices
            </h2>
            <p className="text-xl text-gray-600">
              Clear, concise FAQs on Mutual Funds, Life, Health, General & Motor
              Insurance—designed to guide you at every step.
            </p>
          </div>
        </div>

        {/* FAQ's Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {faqTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFaqTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                faqTab === tab.id
                  ? "bg-paisa-gold text-white"
                  : "bg-white text-paisa-blue border border-gray-300 hover:border-paisa-gold"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Current FAQ's */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 ">
            {getCurrentFaq()?.map((faq, index) => (
              <div
                key={index}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-paisa-blue mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
