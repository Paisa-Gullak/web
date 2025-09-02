import { IconPointFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const scopeList = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Visit or browse our Platform",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Register for an account on our Platform",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Use our mutual fund analysis, investment, or insurance services",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Provide information through our contact forms, surveys, or customer support channels",
    },
  ];

  const cookiesList = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Remember your preferences and login information",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Analyze Platform usage and improve user experience",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Provide personalized content and recommendations",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Ensure Platform security and prevent fraud",
    },
  ];

  const technicalSafeguards = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "SSL/TLS encryption for data transmission",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Multi-factor authentication for account access",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Regular security audits and vulnerability assessments",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Secure data storage with encryption at rest",
    },
    {
      id: 5,
      icon: <IconPointFilled />,
      desc: "Firewall protection and intrusion detection systems",
    },
  ];

  const adminSafeguards = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Access controls and role-based permissions",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Employee training on data protection",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Regular security policy updates",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Incident response procedures",
    },
    {
      id: 5,
      icon: <IconPointFilled />,
      desc: "Vendor security assessments",
    },
  ];

  const physicalSafeguards = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Secure data center facilities",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Restricted access to servers and equipment",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Environmental controls and monitoring",
    },
  ];

  const phySafeListTwo = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Keeping login credentials confidential",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Using strong, unique passwords",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Reporting suspicious activities immediately",
    },
  ];

  const aadhaarUseage = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Digital KYC completion",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "eSign authentication for account opening documents",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "As an alternative address proof (voluntary choice)",
    },
  ];

  const aadhUseListTwo = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Government-authorized platforms like DigiLocker for Aadhaar-based verification",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Licensed eSign service providers for document authentication",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Only receive limited information (last 4 digits, name, DOB, address, photo) as per regulatory requirements",
    },
  ];

  const dataRetentionList = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Your account remains active",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Required by applicable laws and regulations",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Necessary for legal compliance, dispute resolution, and fraud prevention",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "SEBI and IRDAI regulations mandate retention periods",
    },
  ];

  const gdprCompList = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Your consent for specific purposes",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Contractual necessity for service delivery",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Legal obligations under Indian financial regulations",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Legitimate business interests (with privacy safeguards)",
    },
  ];

  const gdprRights = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Right to be forgotten (erasure)",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Right to data portability",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Right to restrict processing",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      desc: "Right to object to processing",
    },
    {
      id: 5,
      icon: <IconPointFilled />,
      desc: "Right to lodge complaints with supervisory authorities",
    },
  ];

  const smsPerms = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Access SMS data for transaction verification and portfolio analysis",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Send SMS notifications about account activities and market updates",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Use communication data to improve our services and prevent fraud",
    },
  ];

  const privacyPolicyChange = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Email notifications to your registered email address",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Push notifications on our mobile application",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Prominent notices on our Platform",
    },
  ];

  const intDataTransfer = [
    {
      id: 1,
      icon: <IconPointFilled />,
      desc: "Appropriate data protection agreements",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      desc: "Compliance with applicable data protection laws",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      desc: "Security measures equivalent to Indian standards",
    },
  ];

  // Big Lists

  const personalInfoList = [
    {
      id: 1,
      icon: <IconPointFilled />,
      title: "Basic Account Information",
      desc: "Personal details required for account registration and identification",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      title: "KYC Documents",
      desc: "Government-issued identity and address verification documents as required by regulatory compliance",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      title: "Financial Information",
      desc: "Banking details, income proofs, and payment information necessary for transactions",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      title: "Transaction Data",
      desc: "Details related to your mutual fund investments, insurance purchases, and trading activities",
    },
  ];

  const nonPersonalInfoList = [
    {
      id: 1,
      icon: <IconPointFilled />,
      title: "Technical Information",
      desc: "Device details, browser type, and IP address for Platform functionality",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      title: "Usage Analytics",
      desc: "Website navigation patterns and feature usage for service improvement",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      title: "Location Data",
      desc: "Geographic information with your consent for relevant service delivery",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      title: "Performance Data",
      desc: "Platform performance metrics to ensure optimal user experience",
    },
  ];

  const infoUse = [
    {
      id: 1,
      icon: <IconPointFilled />,
      title: "Service Delivery",
      desc: "Account management, transaction processing, KYC verification, and providing mutual fund and insurance services as per regulatory requirements",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      title: "Communication",
      desc: "Service notifications, market insights, educational content, and promotional communications about relevant financial products (with opt-out options)",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      title: "Compliance",
      desc: "Meeting legal obligations under SEBI, IRDAI regulations, anti-money laundering, fraud prevention, and statutory reporting",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      title: "Platform Enhancement",
      desc: "Analyzing usage patterns, developing new features, conducting research, and ensuring security and optimal user experience",
    },
  ];

  const sharingInfo = [
    {
      id: 1,
      icon: <IconPointFilled />,
      title: "Regulatory Compliance",
      desc: "With SEBI, IRDAI, RBI, tax authorities, and other statutory bodies as required by law",
    },
    {
      id: 2,
      icon: <IconPointFilled />,
      title: "Service Partners",
      desc: "With AMCs, insurance companies, banks, payment gateways, and RTAs for transaction processing and service delivery",
    },
    {
      id: 3,
      icon: <IconPointFilled />,
      title: "Authorized Vendors",
      desc: "With verified third-party service providers for KYC verification, customer support, analytics, and IT infrastructure (under strict confidentiality agreements)",
    },
    {
      id: 4,
      icon: <IconPointFilled />,
      title: "Business Transfers",
      desc: "In case of merger, acquisition, or business restructuring with the same privacy protections maintained",
    },
  ];

  return (
    <>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Privacy Policy
            </h1>
            <span className="text-md md:text-lg font-semibold text-paisa-blue">
              Last Updated:{" "}
            </span>
            <span className="text-md md:text-lg  text-paisa-gold underline italic ">
              August 31<sup>st</sup>, 2025
            </span>
          </div>
        </section>

        {/* Privacy policy content */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              About This Policy
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              This Privacy Policy governs the collection, use, storage, and
              disclosure of personal information by Paisagullak.com ("Company",
              "We", "Us", or "Our") in relation to your use of our website{" "}
              <span className="italic text-paisa-gold underline">
                https://paisagullak.com
              </span>{" "}
              and mobile applications (collectively referred to as the
              "Platform") .
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              "You", "Your", or "User" refers to any individual who visits,
              accesses, or uses our Platform or avails our services related to
              mutual funds analysis, trading, and insurance products{" "}
              <span className="italic text-paisa-gold">("Services")</span>.
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              We are committed to protecting your privacy and maintaining the
              confidentiality of your personal information in accordance with
              applicable laws including the Information Technology Act, 2000,
              Information Technology{" "}
              <span className="italic text-paisa-gold">
                (Reasonable Security Practices and Procedures and Sensitive
                Personal Data or Information)
              </span>{" "}
              Rules, 2011, and regulations prescribed by the Securities and
              Exchange Board of India{" "}
              <span className="italic text-paisa-gold">(SEBI)</span> and
              Insurance Regulatory and Development Authority of India{" "}
              <span className="italic text-paisa-gold">(IRDAI)</span>.
            </p>

            {/* Scope */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Scope of This Policy
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              This Privacy Policy applies to all users who:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {scopeList.map((list) => (
                <li key={list.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{list.icon}</span>
                  <span>{list.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              This Privacy Policy is incorporated into and subject to our Terms
              and Conditions. By accessing our Platform or using our Services,
              you accept and agree to be bound by this Privacy Policy.
            </p>
            {/* Info We Collect */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Information We Collect
            </h2>
            {/* Personal Info */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              1. Personal Information
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We may collect the following categories of personal information
              from you:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 lg:max-w-6xl">
              {personalInfoList.map((info) => (
                <li key={info.id} className="flex">
                  <span className="mr-1 mt-[3px]">{info.icon}</span>
                  <div>
                    <span className="text-paisa-gold font-semibold">
                      {info.title}:
                    </span>{" "}
                    <span>{info.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            {/* Non-Personal Info */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              2. Non-Personal Information
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We automatically collect certain non-personal information
              including:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 lg:max-w-6xl">
              {nonPersonalInfoList.map((nonPerInfo) => (
                <li key={nonPerInfo.id} className="flex">
                  <span className="mt-[3px] mr-1">{nonPerInfo.icon}</span>
                  <div>
                    <span className="text-paisa-gold font-semibold">
                      {nonPerInfo.title}:
                    </span>{" "}
                    <span>{nonPerInfo.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Cookies */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              3. Cookies and Tracking Technologies
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We use cookies, web beacons, and similar tracking technologies to:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {cookiesList.map((cookie) => (
                <li key={cookie.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{cookie.icon}</span>
                  <span>{cookie.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              You can control cookie settings through your browser, though
              disabling cookies may limit some Platform functionality.
            </p>
            {/* Info Useage */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Information We Collect
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We use your personal and non-personal information for the
              following purposes:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 lg:max-w-6xl mb-6">
              {infoUse.map((info) => (
                <li key={info.id} className="flex">
                  <span className="mt-[3px] mr-1">{info.icon}</span>
                  <div>
                    <span className="text-paisa-gold font-semibold">
                      {info.title}:
                    </span>{" "}
                    <span>{info.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Sharing Info */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Information Sharing and Disclosure
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 lg:max-w-6xl mb-6">
              {sharingInfo.map((shareInfo) => (
                <li key={shareInfo.id} className="flex">
                  <span className="mt-[3px] mr-1">{shareInfo.icon}</span>
                  <div>
                    <span className="text-paisa-gold font-semibold">
                      {shareInfo.title}:
                    </span>{" "}
                    <span>{shareInfo.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-start text-lg mb-6">
              <div>
                <span className="text-paisa-blue font-semibold">
                  WE DO NOT:
                </span>{" "}
                <span className="text-gray-700">
                  Sell, rent, or trade your personal information to unauthorized
                  third parties for marketing or commercial purposes.
                </span>
              </div>
            </div>

            {/* Data Security */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Data Security Measures
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-4">
              We implement comprehensive security measures including:
            </p>
            <div>
              {/* Technical Safeguards */}
              <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
                Technical Safeguards:
              </h3>
              <ul className="text-lg text-gray-700 max-w-6xl mb-4">
                {technicalSafeguards.map((techItem) => (
                  <li key={techItem.id} className="flex space-y-4">
                    <span className="mr-1 mt-[3px]">{techItem.icon}</span>
                    <span>{techItem.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Administrative Safeguards */}
              <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
                Administrative Safeguards:
              </h3>
              <ul className="text-lg text-gray-700 max-w-6xl mb-4">
                {adminSafeguards.map((adminItem) => (
                  <li key={adminItem.id} className="flex space-y-4">
                    <span className="mr-1 mt-[3px]">{adminItem.icon}</span>
                    <span>{adminItem.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Physical Safeguards */}
              <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
                Physical Safeguards:
              </h3>
              <ul className="text-lg text-gray-700 max-w-6xl mb-4">
                {physicalSafeguards.map((phyItem) => (
                  <li key={phyItem.id} className="flex space-y-4">
                    <span className="mr-1 mt-[3px]">{phyItem.icon}</span>
                    <span>{phyItem.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 max-w-6xl mb-6">
                Despite these measures, no internet transmission is completely
                secure. You play a crucial role in protecting your information
                by:
              </p>
              <ul className="text-lg text-gray-700 max-w-6xl mb-4">
                {phySafeListTwo.map((phySafeItem) => (
                  <li key={phySafeItem.id} className="flex space-y-4">
                    <span className="mr-1 mt-[3px]">{phySafeItem.icon}</span>
                    <span>{phySafeItem.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aadhaar usage Policy */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Aadhaar Usage Policy
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">
                Voluntary Provision:
              </strong>{" "}
              Providing your Aadhaar number is voluntary and used solely for:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {aadhaarUseage.map((aadhaarItem) => (
                <li key={aadhaarItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{aadhaarItem.icon}</span>
                  <span>{aadhaarItem.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">
                No Direct Storage:
              </strong>{" "}
              We do not directly store your complete Aadhaar number. We use:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {aadhUseListTwo.map((aadhTwoItem) => (
                <li key={aadhTwoItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{aadhTwoItem.icon}</span>
                  <span>{aadhTwoItem.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">
                Alternative Options:
              </strong>{" "}
              You may choose other account opening procedures (like: Driving
              License, etc) that do not require Aadhaar sharing.
            </p>

            {/* Your Rights and Choices */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Your Rights and Choices
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              You have the following rights regarding your personal information:
            </p>
            <div>
              <p className="text-lg text-gray-700 max-w-6xl mb-6">
                <strong className="text-paisa-blue font-bold">
                  Access and Correction:
                </strong>{" "}
                Request access to your personal information and correction of
                any inaccuracies
              </p>
              <p className="text-lg text-gray-700 max-w-6xl mb-6">
                <strong>Data Portability:</strong> Request transfer of your data
                to another platform (subject to technical feasibility)
              </p>
              <p className="text-lg text-gray-700 max-w-6xl mb-6">
                <strong className="text-paisa-blue font-bold">Deletion:</strong>{" "}
                Request deletion of your account and associated data (subject to
                legal retention requirements)
              </p>
              <p className="text-lg text-gray-700 max-w-6xl mb-6">
                <strong className="text-paisa-blue font-bold">Opt-out:</strong>{" "}
                Unsubscribe from marketing communications while continuing to
                receive service-related notifications
              </p>
              <p className="text-lg text-gray-700 max-w-6xl mb-6">
                <strong className="text-paisa-blue font-bold">
                  Consent Withdrawal:
                </strong>{" "}
                Withdraw previously given consents (may affect service
                availability)
              </p>
            </div>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              To exercise these rights, contact us at{" "}
              <span className="italic text-paisa-gold underline">
                support@paisagullak.com
              </span>{" "}
              or write to our registered office address.
            </p>

            {/* Data Retention */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Data Retention
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              We retain your information for as long as:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {dataRetentionList.map((dataItem) => (
                <li key={dataItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{dataItem.icon}</span>
                  <span>{dataItem.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              After the retention period, we securely delete or anonymize your
              information unless longer retention is required by law.
            </p>

            {/* International Data Transfers */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              International Data Transfers
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              Your information is primarily stored and processed in India. If we
              transfer data internationally, we ensure adequate protection
              through:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {intDataTransfer.map((intItem) => (
                <li key={intItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{intItem.icon}</span>
                  <span>{intItem.desc}</span>
                </li>
              ))}
            </ul>

            {/* GDPR Compliance */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              GDPR Compliance (for EU Users)
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              If you are subject to the EU General Data Protection Regulation
              (GDPR), you have additional rights including:
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">
                Legal Basis for Processing:
              </strong>{" "}
              We process your data based on:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {gdprCompList.map((gdprItem) => (
                <li key={gdprItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{gdprItem.icon}</span>
                  <span>{gdprItem.desc}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-blue my-6">
              GDPR Rights:
            </h3>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {gdprRights.map((rightsItem) => (
                <li key={rightsItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{rightsItem.icon}</span>
                  <span>{rightsItem.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">
                Data Protection Officer:
              </strong>{" "}
              For GDPR-related queries, contact our Data Protection Officer at
              <span className="text-paisa-gold italic underline">
                info@paisagullak.com
              </span>
            </p>

            {/* Children's Policy */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Children's Privacy
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal information from minors.
              If we become aware of such collection, we will take steps to
              delete the information promptly.
            </p>

            {/* Third Party & Services */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Third-Party Links and Services
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              Our Platform may contain links to third-party websites or
              services. We are not responsible for the privacy practices of
              these external sites. We recommend reviewing their privacy
              policies before providing any personal information.
            </p>

            {/* SMS & Comm Perms */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              SMS and Communication Permissions
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              With your consent, we may:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {smsPerms.map((smsItem) => (
                <li key={smsItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{smsItem.icon}</span>
                  <span>{smsItem.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              You can withdraw these permissions at any time through your
              account settings.
            </p>

            {/* Changes of privacy Policy */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              We reserve the right to modify this Privacy Policy at any time.
              Changes will be effective immediately upon posting on our
              Platform. We may notify you of significant changes through:
            </p>
            <ul className="text-lg text-gray-700 max-w-6xl mb-4">
              {privacyPolicyChange.map((policyItem) => (
                <li key={policyItem.id} className="flex space-y-4">
                  <span className="mr-1 mt-[3px]">{policyItem.icon}</span>
                  <span>{policyItem.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              Your continued use of our Platform after policy changes
              constitutes acceptance of the updated Privacy Policy.
            </p>

            {/* Contact Info */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Contact Information
            </h2>
            {/* privacy queries */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              Privacy-Related Queries:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Email:</strong>
              <span className="text-paisa-gold italic underline">
                info@paisagullak.com | support@paisagullak.com
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Phone:</strong>
              <span className="text-paisa-gold italic underline">
                +91 600-541-1368
              </span>
            </p>

            {/* Grievance Officer */}
            {/* <h3 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Grievance Officer:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Name:</strong>
              <span className="text-paisa-gold italic underline">
                Update Soon
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Email:</strong>
              <span className="text-paisa-gold italic underline">
                Update Soon
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Address:</strong>
              <span className="text-paisa-gold italic underline">
                Update Soon
              </span>
            </p> */}

            {/* General Inquiries */}
            <h3 className="text-xl md:text-2xl font-semibold text-paisa-gold my-6">
              General Inquiries:
            </h3>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Email:</strong>
              <span className="text-paisa-gold italic underline">
                info@paisagullak.com
              </span>
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Website:</strong>
              <Link href={"/"} className="text-paisa-gold italic underline">
                https://paisagullak.com
              </Link>
            </p>

            {/* Governing Law */}
            <h2 className="text-2xl md:text-4xl font-bold text-paisa-blue mb-6">
              Governing Law
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              This Privacy Policy is governed by the laws of India and subject
              to the exclusive jurisdiction of courts in Jammu, J&K, India.
            </p>

            <hr className="max-w-6xl text-paisa-blue my-6" />

            {/* Note */}
            <p className="text-lg text-gray-700 max-w-6xl mb-6">
              <strong className="text-paisa-blue font-bold">Note:</strong> This
              Privacy Policy is an electronic record generated by computer
              systems and does not require physical or digital signatures as per
              the Information Technology Act, 2000.
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mb-16">
              We encourage you to read this Privacy Policy carefully and contact
              us if you have any questions or concerns about how we handle your
              personal information.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
