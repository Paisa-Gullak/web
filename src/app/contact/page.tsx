"use client";

import React, { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMessages,
  IconCalendarEvent,
  IconSend,
  IconClock,
  IconHelpCircle,
  IconMapPin,
} from "@tabler/icons-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    investmentGoal: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <IconPhone className="text-paisa-gold" size={24} />,
      title: "Phone Support",
      description: "Speak with our experts",
      info: "+91 600-541-1368",
      action: "Call Now",
      availability: "Mon-Sat, 9 AM - 5 PM",
    },
    {
      icon: <IconMail className="text-paisa-gold" size={24} />,
      title: "Email Support",
      description: "Get detailed responses",
      info: "paisagullak@gmail.com",
      action: "Send Email",
      availability: "24/7 response within 2 hours",
    },
    {
      icon: <IconMessages className="text-paisa-gold" size={24} />,
      title: "Live Chat",
      description: "Instant help available",
      info: "Chat with us now",
      action: "Start Chat",
      availability: "Available 24/7",
    },
    {
      icon: <IconCalendarEvent className="text-paisa-gold" size={24} />,
      title: "Book Consultation",
      description: "Free expert advice",
      info: "30-minute session",
      action: "Book Now",
      availability: "Slots available daily",
    },
  ];

  const faqs = [
    {
      question: "How much do I need to start investing?",
      answer:
        "You can start investing with as little as ₹500 through our SIP plans. There's no maximum limit - invest what you're comfortable with.",
    },
    {
      question: "Is my money safe with Paisa Gullak?",
      answer:
        "Yes, absolutely. We are SEBI registered and follow all regulatory guidelines. Your investments are held with reputable fund houses and insurers.",
    },
    {
      question: "Can I withdraw my money anytime?",
      answer:
        "Yes, most mutual fund investments can be redeemed anytime. However, some funds may have exit loads if redeemed within a certain period.",
    },
    {
      question: "Do you charge any hidden fees?",
      answer:
        "No hidden fees ever. We believe in complete transparency. All charges are clearly mentioned upfront before you invest.",
    },
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "Level 12, Trade Center, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 98765 43210",
      email: "mumbai@paisagullak.com",
    },
    {
      city: "Bangalore",
      address:
        "4th Floor, UB City Mall, Vittal Mallya Road, Bangalore - 560001",
      phone: "+91 98765 43211",
      email: "bangalore@paisagullak.com",
    },
    {
      city: "Delhi",
      address: "Tower A, DLF Cyber City, Sector 24, Gurugram - 122002",
      phone: "+91 98765 43212",
      email: "delhi@paisagullak.com",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-paisa-cream to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-paisa-blue mb-6">
              Get in <span className="text-paisa-gold">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Have questions about investing? Need help choosing the right
              funds? Our expert team is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us based on your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-lg transition-shadow duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-lg font-semibold text-paisa-blue mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {method.description}
                </p>
                <div className="text-paisa-gold font-medium mb-2">
                  {method.info}
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  {method.availability}
                </div>
                <button className="btn-primary w-full text-sm py-2">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card p-8 animate-slide-up">
                <h2 className="text-2xl font-bold text-paisa-blue mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Goal
                      </label>
                      <select
                        name="investmentGoal"
                        value={formData.investmentGoal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select your goal</option>
                        <option value="wealth-creation">Wealth Creation</option>
                        <option value="retirement">Retirement Planning</option>
                        <option value="tax-saving">Tax Saving</option>
                        <option value="child-education">Child Education</option>
                        <option value="emergency-fund">Emergency Fund</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-paisa-gold focus:border-transparent transition-all duration-200"
                      placeholder="Tell us more about your investment goals or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <IconSend size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              {/* Quick Contact Info */}
              <div className="card p-6 animate-slide-up">
                <h3 className="text-xl font-semibold text-paisa-blue mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <IconPhone size={16} className="text-paisa-gold" />
                    <span className="text-gray-700">+91 600-541-1368</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IconMail size={16} className="text-paisa-gold" />
                    <span className="text-gray-700">paisagullak@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IconClock size={16} className="text-paisa-gold" />
                    <span className="text-gray-700">Mon-Sat, 9 AM - 5 PM</span>
                  </div>
                </div>
              </div>

              {/* Expert Consultation */}
              <div className="card p-6 bg-paisa-gold/5 animate-slide-up">
                <div className="flex items-center mb-4">
                  <IconHelpCircle className="text-paisa-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-paisa-blue">
                    Need Expert Advice?
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Book a free 30-minute consultation with our certified
                  financial advisors.
                </p>
                <button className="btn-primary w-full">
                  Book Free Consultation
                </button>
              </div>

              {/* Emergency Support */}
              <div className="card p-6 border border-red-200 animate-slide-up">
                <h3 className="text-lg font-semibold text-red-600 mb-2">
                  Emergency Support
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  For urgent issues with your investments or account.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full">
                  Emergency Helpline
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about investing with Paisa
              Gullak.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
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
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <button className="btn-secondary">View All FAQs</button>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-paisa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-paisa-blue mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our offices across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <IconMapPin className="text-paisa-gold mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-paisa-blue">
                    {office.city}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{office.address}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <IconPhone size={14} className="text-paisa-gold" />
                    <span className="text-sm text-gray-700">
                      {office.phone}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IconMail size={14} className="text-paisa-gold" />
                    <span className="text-sm text-gray-700">
                      {office.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
