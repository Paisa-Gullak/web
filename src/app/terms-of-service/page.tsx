import { IconPointFilled } from "@tabler/icons-react";

export default function TermsOfService() {
  const aboutServices = [
    {
      id: 1,
      icon: <IconPointFilled />,
      title: "Mutual Fund Services",
      desc: "Investment analysis, portfolio tracking, systematic investment plans (SIP), and transaction facilitation",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      title: "Insurance Services",
      desc: "Policy comparison, purchase assistance, and claims support for various insurance products",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      title: "Financial Analysis",
      desc: "Investment research, market insights, and portfolio management tools",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      title: "Educational Content",
      desc: "Financial literacy resources and investment guidance",
    },
  ];

  const userEligibility = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "You must be at least 18 years old and legally capable of entering into binding contracts",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "You must be a resident of India with valid identification documents",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "You must comply with all applicable laws and regulations",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "You represent that all information provided is accurate and complete",
    },
  ];

  const accRegistration = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Registration requires completion of KYC (Know Your Customer) procedures as mandated by SEBI and IRDAI",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "You agree to provide true, accurate, and complete information during registration",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "You are responsible for maintaining the confidentiality of your login credentials",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "You must promptly update any changes to your personal or financial information",
    },
  ];

  const prohibitedAct = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Use the Platform for any unlawful purposes or fraudulent activities",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Attempt to gain unauthorized access to our systems or other users' accounts",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "UInterfere with or disrupt the Platform's functionality or security measures",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Share false, misleading, or defamatory information",
    },
  ];

  const mutFundService = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "All mutual fund investments are subject to market risks and regulatory compliance",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Investment decisions are solely your responsibility based on your risk appetite and financial goals",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "We facilitate transactions but do not guarantee investment performance or returns",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Fees and charges are clearly disclosed before transaction confirmation",
    },
  ];

  const insureSerivices = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Insurance policies are underwritten by respective insurance companies, not by us",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "We act as an intermediary to facilitate policy purchases and provide support",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Policy terms, coverage, and claims are governed by the respective insurer's conditions",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Premium payments and policy servicing follow standard insurance industry practices",
    },
  ];

  const invAdvDisclaimer = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Any information, analysis, or recommendations provided are for educational purposes only",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "We do not provide personalized investment advice unless explicitly stated",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Past performance does not guarantee future results",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "You should consult qualified financial advisors for personalized investment decisions",
    },
  ];

  const feeAndPayments = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Service fees, brokerage charges, and applicable taxes are clearly disclosed before transactions",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Payment processing is handled through secure, authorized payment gateways",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Refunds, if applicable, are processed according to our refund policy and regulatory requirements",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "You are responsible for all applicable taxes on your investments and insurance premiums",
    },
  ];

  const intellectPropRights = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "All content, trademarks, logos, and intellectual property on the Platform belong to us or our licensors",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "You may not reproduce, distribute, or create derivative works without our written permission",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "User-generated content remains your property, but you grant us license to use it for Platform improvement",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "We respect third-party intellectual property rights and expect users to do the same",
    },
  ];

  const dataProtectPrivacy = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Your personal and financial information is handled according to our Privacy Policy",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "We implement industry-standard security measures to protect your data",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "You consent to data processing necessary for providing our services",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "We comply with applicable data protection laws and financial sector regulations",
    },
  ];

  const platAvalModification = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "We strive to maintain Platform availability but do not guarantee uninterrupted access",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Scheduled maintenance and updates may temporarily affect service availability",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "We reserve the right to modify, suspend, or discontinue services with reasonable notice",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Emergency maintenance may occur without prior notice for security or technical reasons",
    },
  ];

  const investmentRisks = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "All investments in mutual funds and securities involve market risks",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "The value of investments can go up or down based on market conditions",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Past performance is not indicative of future results",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "You may lose some or all of your invested capital",
    },
  ];

  const platformDisclaimer = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: 'Information is provided "as is" without warranties of any kind',
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "We do not guarantee the accuracy, completeness, or timeliness of market data",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Technical issues, connectivity problems, or system failures may affect service availability",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "We are not liable for losses due to factors beyond our reasonable control",
    },
  ];

  const regCompliance = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "All services are provided in compliance with SEBI, IRDAI, and other applicable regulations",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "You agree to comply with all applicable laws and regulatory requirements",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "We reserve the right to report suspicious activities to appropriate authorities",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "KYC and AML procedures are mandatory and non-negotiable",
    },
  ];

  const limitOfLiability = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Our liability is limited to the fees paid by you for the specific service",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "We are not liable for indirect, consequential, or punitive damages",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "We are not responsible for investment losses due to market conditions",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Force majeure events, technical failures, or regulatory changes are excluded from our liability",
    },
  ];

  const userResponsibility = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Provide accurate and updated information at all times",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Use the Platform responsibly and in compliance with all applicable laws",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Safeguard your account credentials and report any unauthorized access",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Pay all applicable fees, charges, and taxes in a timely manner",
    },
  ];

  const disputeResolution = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Any disputes will be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 2015",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "The arbitration will be conducted in Jammu with proceedings in English",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "These Terms are governed by Indian law and subject to the jurisdiction of courts in Jammu",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Disputes related to investment or insurance products may also be escalated to respective regulatory ombudsman",
    },
  ];

  const changesToTerms = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "We reserve the right to modify these Terms at any time",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Material changes will be communicated through email or Platform notifications",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Your continued use after changes constitutes acceptance of updated Terms",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "You should review these Terms periodically for any updates",
    },
  ];

  return (
    <>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-20 mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Terms of Service
            </h1>
            <span className="text-md md:text-lg font-semibold text-paisa-blue">
              Last Updated:{" "}
            </span>
            <span className="text-md md:text-lg  text-paisa-gold underline italic ">
              August 31<sup>st</sup>, 2025
            </span>
          </div>
        </section>

        {/* Terms Content */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Agreement of terms */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Agreement to Terms
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              Welcome to Paisagullak.com ("Platform"). These Terms of Service
              ("Terms") constitute a legally binding agreement between you
              ("User", "You", or "Your") and Paisagullak.com ("Company", "We",
              "Us", or "Our") regarding your use of our Platform and services.
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              By accessing, browsing, or using our Platform, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and our Privacy Policy. If you do not agree to these Terms,
              please discontinue use of our Platform immediately.
            </p>

            {/* About our Services */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              About Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              Paisagullak.com provides online financial services including:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 lg:max-w-6xl mb-6">
              {aboutServices.map((serviceItem) => (
                <li key={serviceItem.id} className="flex">
                  <span className="mt-[3px] mr-1">{serviceItem.icon}</span>
                  <div>
                    <span className="text-paisa-gold font-semibold">
                      {serviceItem.title}:
                    </span>{" "}
                    <span>{serviceItem.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Eligibility & Acc. Registration */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Eligibility and Account Registration
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              User Eligibility:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {userEligibility.map((userItem) => (
                <li key={userItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{userItem.icon}</span>
                  <span>{userItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Acc. Registration */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Account Registration:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {accRegistration.map((accItem) => (
                <li key={accItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{accItem.icon}</span>
                  <span>{accItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Platform Usage Rules */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Platform Usage Rules
            </h2>
            {/* Permitted Use */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Permitted Use:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              You may use our Platform to access legitimate financial services,
              research investment opportunities, and manage your portfolio in
              accordance with these Terms and applicable laws.
            </p>

            {/* Prohibited Activities */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Permitted Use:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              You agree not to:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {prohibitedAct.map((actItem) => (
                <li key={actItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{actItem.icon}</span>
                  <span>{actItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Financial Services Terms */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Financial Services Terms
            </h2>

            {/* Mutual Funds Services */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Mutual Fund Services:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {mutFundService.map((fundItem) => (
                <li key={fundItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{fundItem.icon}</span>
                  <span>{fundItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Insurance Services */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Insurance Services:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {insureSerivices.map((insureItem) => (
                <li key={insureItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{insureItem.icon}</span>
                  <span>{insureItem.desc}</span>
                </li>
              ))}
            </ul>

            {/*  Investment Advice Disclaimer*/}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Investment Advice Disclaimer:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {invAdvDisclaimer.map((investItem) => (
                <li key={investItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{investItem.icon}</span>
                  <span>{investItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Fees and Payments */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Fees and Payments
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {feeAndPayments.map((feeItem) => (
                <li key={feeItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{feeItem.icon}</span>
                  <span>{feeItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Intellectual Property Rights*/}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Intellectual Property Rights
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {intellectPropRights.map((intellectItem) => (
                <li key={intellectItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{intellectItem.icon}</span>
                  <span>{intellectItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Data Protection and Privacy*/}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Data Protection and Privacy
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {dataProtectPrivacy.map((dataItem) => (
                <li key={dataItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{dataItem.icon}</span>
                  <span>{dataItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Platform Availability and Modifications*/}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Platform Availability and Modifications
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {platAvalModification.map((platformItem) => (
                <li key={platformItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{platformItem.icon}</span>
                  <span>{platformItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Risk Disclosure and Disclaimers*/}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Risk Disclosure and Disclaimers
            </h2>

            {/* Investment Risks */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Investment Risks:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {investmentRisks.map((riskItem) => (
                <li key={riskItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{riskItem.icon}</span>
                  <span>{riskItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Platform Disclaimers */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Platform Disclaimers:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {platformDisclaimer.map((disclaimItem) => (
                <li key={disclaimItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{disclaimItem.icon}</span>
                  <span>{disclaimItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Regulatory Compliance */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Regulatory Compliance
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {regCompliance.map((complianceItem) => (
                <li key={complianceItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{complianceItem.icon}</span>
                  <span>{complianceItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Limitation of Liability */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Limitation of Liability
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {limitOfLiability.map((liabilityItem) => (
                <li key={liabilityItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{liabilityItem.icon}</span>
                  <span>{liabilityItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* User Responsibilities */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              User Responsibilities
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              You agree to:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {userResponsibility.map((userItem) => (
                <li key={userItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{userItem.icon}</span>
                  <span>{userItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Termination */}
            {/* By You */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Termination
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              By You:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              You may terminate your account by following the account closure
              procedures outlined on the Platform, subject to completion of
              pending transactions and regulatory requirements.
            </p>

            {/* By Us */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              By Us:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We may suspend or terminate your account if you violate these
              Terms, engage in prohibited activities, or fail to comply with
              regulatory requirements.
            </p>

            {/* By Us */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Effect of Termination:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              Upon termination, your access to the Platform will cease, but
              certain obligations and data retention requirements may continue
              as per applicable laws.
            </p>

            {/* Dispute Resolution */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Dispute Resolution
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {disputeResolution.map((disputeItem) => (
                <li key={disputeItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{disputeItem.icon}</span>
                  <span>{disputeItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Grievance Redressal */}
            {/* <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Grievance Redressal
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              For any grievances or complaints:
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Grievance Officer:</strong>
              <span className="text-paisa-gold italic underline">
                Update Soon
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Email:</strong>
              <span className="text-paisa-gold italic underline">
                Update Soon
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Response Time:</strong>
              <span className="text-paisa-gold italic underline">
                We aim to resolve complaints within 30 days
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Escalation:</strong>
              <span className="text-paisa-gold italic underline">
                Unresolved grievances may be escalated to regulatory authorities
              </span>
            </p> */}

            {/* Changes to Terms */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Changes to Terms
            </h2>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {changesToTerms.map((termsItem) => (
                <li key={termsItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{termsItem.icon}</span>
                  <span>{termsItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Contact Information
            </h2>

            {/* customer Support */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Customer Support:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Email:</strong>{" "}
              <span className="text-paisa-gold italic underline">
                info@paisagullak.com
              </span>{" "}
              |{" "}
              <span className="text-paisa-gold italic underline">
                support@paisagullak.com
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Phone:</strong>{" "}
              <span className="text-paisa-gold italic underline">
                +91 600-541-1368
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">
                Address:
              </strong>{" "}
              <span className="text-paisa-gold italic underline">
                Vill. Palli Morh, Tehsil Bishnah, Jammu - 181133
              </span>
            </p>

            {/* Legal Queries */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Legal Queries:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">Email:</strong>{" "}
              <span className="text-paisa-gold italic underline">
                info@paisagullak.com
              </span>
            </p>

            <hr className="max-w-6xl text-paisa-blue my-6" />

            {/* Important Notice */}
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-semibold">
                Important Notice:
              </strong>{" "}
              These Terms constitute an electronic record under the Information
              Technology Act, 2000, and do not require physical or digital
              signatures. By using our Platform, you acknowledge your
              understanding and acceptance of these Terms.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
