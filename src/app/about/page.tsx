import {
  IconTargetArrow,
  IconTelescope,
  IconUsersGroup,
  IconTrendingUp,
  IconCertificate,
  IconHeart,
} from "@tabler/icons-react";

const AboutPage = () => {
  const values = [
    {
      id: 1,
      icon: <IconHeart className="text-paisa-gold" size={32} />,
      title: "Simplicity First",
      description:
        "We believe investing shouldn't be rocket science. Every feature is designed with beginners in mind.",
    },
    {
      id: 2,
      icon: <IconUsersGroup className="text-paisa-gold" size={32} />,
      title: "Customer Centric",
      description:
        "Your success is our success. We provide 24/7 support and guidance to help you make informed decisions.",
    },
    {
      id: 3,
      icon: <IconTrendingUp className="text-paisa-gold" size={32} />,
      title: "Transparent Growth",
      description:
        "No hidden fees, no confusing terms. We believe in complete transparency in everything we do.",
    },
    {
      id: 4,
      icon: <IconCertificate className="text-paisa-gold" size={32} />,
      title: "Expert Guidance",
      description:
        "Our team of certified financial advisors ensures you get the best advice for your financial goals.",
    },
  ];

  const team = [
    {
      name: "Mitali Rajkonwar",
      role: "Founder",
      // experience: "15+ years in Financial Services",
      description:
        "With a strong foundation in finance and a sharp business acumen, Mitali drives the company’s vision and growth while ensuring trust, clarity, and impact in every step.",
    },
    {
      name: "Sh. Mohan Lal Bargotra",
      role: "Consulting Director",
      // experience: "12+ years in FinTech",
      description:
        "Sh. Mohan Lal Bargotra is a seasoned banking professional with over 33 years of experience in financial services. A retired banker, he brings a wealth of insight in regulatory compliance, risk management, and customer-centric financial solutions. His strategic guidance supports sound decision-making and long-term financial integrity.",
    },
    // {
    //   name: "Amit Sharma",
    //   role: "Chief Investment Officer",
    //   experience: "18+ years in Investment Management",
    //   description:
    //     "Expert fund manager with proven track record of generating superior returns.",
    // },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Accidentally Started",
      description:
        "The company began as an unexpected experiment that grew into a financial venture",
    },
    {
      year: "2022",
      title: "Aggregated 1 Cr AUM",
      description:
        "Successfully aggregated ₹1 Cr in Assets Under Management, marking our first major milestone",
    },
    {
      year: "2023",
      title: "100+ Clients in Rural Retail Sector",
      description:
        "Delivering financial access and trust in rural communities — empowering 100+ clients and securing ₹2 Cr+ in AUM",
    },
    {
      year: "2024",
      title: "Process of Corporatisation Initiated",
      description:
        "Laid the foundation for formalising operations and transitioning into a structured corporate entity",
    },
    {
      year: "2025",
      title: "Birth of Paisa Gullak",
      description:
        "Paisa Gullak started as a small idea and marked the beginning of our journey in finance",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              About <span className="text-paisa-gold">Paisa Gullak</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're on a mission to make investing accessible, simple, and
              profitable for India's young generation. No jargon, no complexity
              - just smart investing made easy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <IconTargetArrow className="text-paisa-gold mr-4" size={40} />
                <h2 className="text-3xl font-bold text-paisa-blue">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shaping a financially confident India by simplifying investments
                and empowering individuals to take control of their financial
                future.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We’re on a mission to offer secure and simplified access to
                mutual funds and insurance products across the country. Through
                clear, honest guidance and a strong focus on financial literacy,
                we aim to help individuals make informed choices that build
                long-term wealth. With user-friendly fintech solutions and a
                collaborative work culture, we strive to deliver value to
                investors, stakeholders, and our team alike—creating a balanced
                ecosystem where everyone benefits.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <IconTelescope className="text-paisa-gold mr-4" size={40} />
                <h2 className="text-3xl font-bold text-paisa-blue">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To become India’s most trusted and accessible financial
                platform—where every individual, regardless of background, has
                the tools, knowledge, and confidence to build a secure financial
                future.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a nation where financial empowerment is not a
                privilege but a right—driven by innovation, education, and
                inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Paisa Gullak.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${value.id * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-paisa-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Evolution Of Paisa Gullak
            </h2>
            <p className="text-xl text-gray-600">
              From a simple idea to helping thousands of young Indians invest
              better.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-paisa-gold"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center animate-slide-up ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-paisa-gold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-paisa-blue mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-paisa-gold rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-paisa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals committed to your financial success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-paisa-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-paisa-gold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-paisa-blue mb-2">
                  {member.name}
                </h3>
                <div className="text-paisa-gold font-medium mb-2">
                  {member.role}
                </div>
                {/* <div className="text-sm text-gray-500 mb-3">
                  {member.experience}
                </div> */}
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another investment platform. We're your financial
              companions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-paisa-blue mb-6">
                Built for Your Generation
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-paisa-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-paisa-blue">
                      No Investment Minimums
                    </h4>
                    <p className="text-gray-600">
                      Start with whatever you can afford, even ₹500.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-paisa-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-paisa-blue">
                      Plain English
                    </h4>
                    <p className="text-gray-600">
                      No complex financial jargon. Everything explained simply.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-paisa-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-paisa-blue">
                      Mobile First
                    </h4>
                    <p className="text-gray-600">
                      Designed for your smartphone, because that's how you live.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-paisa-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-paisa-blue">
                      24/7 Support
                    </h4>
                    <p className="text-gray-600">
                      Questions at midnight? We're here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-8 animate-scale-in">
              <h4 className="text-xl font-semibold text-paisa-blue mb-4">
                Traditional vs Paisa Gullak
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Minimum Investment</span>
                  <div className="text-right">
                    <div className="text-red-500 line-through text-sm">
                      ₹5,000+
                    </div>
                    <div className="text-green-600 font-semibold">₹500</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Complex Forms</span>
                  <div className="text-right">
                    <div className="text-red-500 line-through text-sm">
                      20+ pages
                    </div>
                    <div className="text-green-600 font-semibold">
                      2 minutes
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Expert Advice</span>
                  <div className="text-right">
                    <div className="text-red-500 line-through text-sm">
                      ₹10,000+
                    </div>
                    <div className="text-green-600 font-semibold">Free</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Support Hours</span>
                  <div className="text-right">
                    <div className="text-red-500 line-through text-sm">9-5</div>
                    <div className="text-green-600 font-semibold">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-paisa-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Become part of a growing community of smart young investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-paisa-gold hover:bg-paisa-gold/90">
              Start Your Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-paisa-blue font-medium py-3 px-6 rounded-lg transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
