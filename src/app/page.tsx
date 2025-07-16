import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Shield,
  Users,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <TrendingUp className="text-paisa-gold" size={32} />,
      title: "Smart Investing",
      description:
        "AI-powered recommendations tailored for beginners with clear guidance at every step.",
    },
    {
      icon: <Shield className="text-paisa-gold" size={32} />,
      title: "Secure & Regulated",
      description:
        "SEBI regulated platform with bank-grade security to protect your investments.",
    },
    {
      icon: <Users className="text-paisa-gold" size={32} />,
      title: "Expert Support",
      description:
        "24/7 access to certified financial advisors who speak your language.",
    },
    {
      icon: <Award className="text-paisa-gold" size={32} />,
      title: "Beginner Friendly",
      description:
        "Start with as little as ₹500. No jargon, just simple investment solutions.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: "24, Software Engineer",
      content:
        "Finally, an investment platform that doesn't confuse me! Started my SIP with just ₹1000.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      age: "28, Marketing Manager",
      content:
        "The expert guidance helped me choose the right mutual funds. My portfolio is up 12%!",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      age: "26, Designer",
      content:
        "Love how they explain everything in simple terms. No more investment anxiety!",
      rating: 5,
    },
  ];

  const stats = [
    { value: "50,000+", label: "Happy Investors" },
    { value: "₹500 Cr+", label: "Assets Managed" },
    { value: "15%", label: "Average Returns" },
    { value: "4.8/5", label: "User Rating" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6 leading-tight">
                Investing Made
                <span className="text-paisa-gold"> Simple</span> for
                <span className="text-paisa-gold"> You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start your investment journey with confidence. We make mutual
                funds and insurance easy to understand and even easier to invest
                in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <span>Start Investing Now</span>
                  <ArrowRight size={20} />
                </button>
                <button className="btn-secondary">Talk to Expert</button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>SEBI Regulated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Start with ₹500</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-paisa-blue mb-2">
                    Your Investment Dashboard
                  </h3>
                  <p className="text-gray-600">Track your wealth growth</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Total Investment</span>
                    <span className="font-semibold text-green-600">
                      ₹45,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Current Value</span>
                    <span className="font-semibold text-blue-600">₹52,300</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-paisa-gold/10 rounded-lg">
                    <span className="text-gray-700">Returns</span>
                    <span className="font-semibold text-paisa-gold">
                      +₹7,300 (16.2%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-paisa-gold/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-paisa-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-paisa-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Why Choose Paisa Gullak?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed everything with one goal: making investing simple,
              safe, and profitable for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-paisa-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Our Investment Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build wealth, simplified for your
              generation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8 animate-slide-up">
              <div className="flex items-center mb-6">
                <TrendingUp className="text-paisa-gold mr-4" size={40} />
                <div>
                  <h3 className="text-2xl font-semibold text-paisa-blue">
                    Mutual Funds
                  </h3>
                  <span className="badge badge-success">Beginner Friendly</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Diversified mutual funds handpicked by experts. Start SIPs from
                ₹500 and watch your money grow.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray-700">
                    Equity, Debt & Hybrid Options
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray-700">Tax Saving ELSS Funds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray-700">Expert Portfolio Review</span>
                </li>
              </ul>
              <Link
                href="/mutual-funds"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Explore Mutual Funds</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card p-8 animate-slide-up">
              <div className="flex items-center mb-6">
                <Shield className="text-paisa-gold mr-4" size={40} />
                <div>
                  <h3 className="text-2xl font-semibold text-paisa-blue">
                    Insurance
                  </h3>
                  <span className="badge badge-info">Essential Protection</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Secure your future with comprehensive life and health insurance
                plans designed for young professionals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray-700">Term & Health Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray-700">Investment-Linked Plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray-700">Quick Claim Settlement</span>
                </li>
              </ul>
              <Link
                href="/insurance"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Explore Insurance</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-paisa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              What Our Investors Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of happy investors who trusted us with their
              financial future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-paisa-gold text-paisa-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-paisa-blue">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.age}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-paisa-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join 50,000+ young investors who are already building wealth with
            Paisa Gullak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-paisa-gold hover:bg-paisa-gold/90">
              Start Investing Today
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-paisa-blue font-medium py-3 px-6 rounded-lg transition-all duration-200">
              Need Help Choosing?
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
