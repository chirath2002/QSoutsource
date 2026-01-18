import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Calculator,
  FileText,
  Users,
  Shield,
  Target,
  TrendingUp,
  Globe,
  ArrowRight,
} from 'lucide-react';

export function HomePage() {
  const services = [
    {
      icon: Calculator,
      title: 'Cost Management',
      description: 'Comprehensive cost planning, budgeting, and financial control throughout project lifecycle.',
    },
    {
      icon: FileText,
      title: 'Contract Management',
      description: 'Expert contract administration and commercial management for optimal project outcomes.',
    },
    {
      icon: Users,
      title: 'Project Teams',
      description: 'Dedicated professionals integrated into your projects for seamless delivery.',
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Industry-certified professionals with RICS, AIQS, and IQSSL memberships.',
    },
    {
      icon: Target,
      title: 'Precision Focused',
      description: 'Data-driven approach ensuring accuracy in every cost and timeline estimate.',
    },
    {
      icon: TrendingUp,
      title: 'Value Engineering',
      description: 'Optimize costs without compromising quality or project objectives.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across UAE, KSA, Qatar, UK, Australia, and Sri Lanka.',
    },
  ];

  const countries = ['UAE', 'Saudi Arabia', 'Qatar', 'United Kingdom', 'Australia', 'Sri Lanka'];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#1f2937]">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763622480471-4395dfa3b8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3NTAxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Precision in Cost. Excellence in Delivery.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expert Quantity Surveying, Cost Consultancy & Project Advisory Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#d4af37] hover:bg-[#b8961f] text-white px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Get a Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 text-[#1e3a8a] px-8 py-4 rounded-md transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction consultancy solutions tailored to your project needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl mb-4 text-[#1f2937]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-[#1e3a8a] hover:text-[#d4af37] transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Why Choose QSoutsource</h2>
            <p className="text-xl text-gray-600">
              Your partner in construction excellence and financial clarity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="text-[#d4af37]" size={36} />
                  </div>
                  <h3 className="text-xl mb-3 text-[#1f2937]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Global Presence</h2>
            <p className="text-xl text-gray-600">
              Serving construction projects across multiple continents
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#1e3a8a] hover:text-white transition-colors cursor-pointer"
              >
                <img src={`/${country.toLowerCase().replace(/\s+/g, '-')}.png`} alt={`${country} flag`} className="mx-auto mb-2 h-15 w-18 object-cover rounded" />
                <p className="font-semibold">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-[#1f2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl mb-8">Professional Memberships</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-center">
                <div className="bg-white text-[#1e3a8a] px-6 py-3 rounded-lg inline-block mb-2">
                  <span className="text-2xl">RICS</span>
                </div>
                <p className="text-sm text-gray-400">Royal Institution of Chartered Surveyors</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-[#1e3a8a] px-6 py-3 rounded-lg inline-block mb-2">
                  <span className="text-2xl">AIQS</span>
                </div>
                <p className="text-sm text-gray-400">Australian Institute of Quantity Surveyors</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-[#1e3a8a] px-6 py-3 rounded-lg inline-block mb-2">
                  <span className="text-2xl">IQSSL</span>
                </div>
                <p className="text-sm text-gray-400">Institute of Quantity Surveyors Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#1f2937] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can bring precision and excellence to your construction project
          </p>
          <Link
            to="/contact"
            className="bg-[#d4af37] hover:bg-[#b8961f] text-white px-10 py-4 rounded-md transition-colors inline-flex items-center space-x-2"
          >
            <span>Contact Us Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
