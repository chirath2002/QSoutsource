import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, TrendingUp, Users, Award, Shield, Handshake } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Delivering accurate cost estimates and meticulous project analysis.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all our professional services.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Continuously improving to deliver best-in-class consultancy services.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success.',
    },
  ];

  const memberships = [
    {
      name: 'RICS',
      full: 'Royal Institution of Chartered Surveyors',
      description: 'Global professional body promoting standards in land, property, infrastructure and construction.',
    },
    {
      name: 'AIQS',
      full: 'Australian Institute of Quantity Surveyors',
      description: 'Leading professional organization for quantity surveyors and construction economists in Australia.',
    },
    {
      name: 'IQSSL',
      full: 'Institute of Quantity Surveyors Sri Lanka',
      description: 'Professional body dedicated to advancing the profession of quantity surveying in Sri Lanka.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-[#1e3a8a]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NzQzOTU2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Business partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-[#1e3a8a]/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">About QSoutsource</h1>
          <p className="text-xl text-gray-200">Building trust through precision and excellence</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[#1e3a8a]">Who We Are</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  QSoutsource, powered by Bawans Pvt Ltd, is a leading construction consultancy
                  firm specializing in Quantity Surveying, Cost Management, and Project Advisory
                  services. With a global footprint spanning across UAE, Saudi Arabia, Qatar, UK,
                  Australia, and Sri Lanka, we bring precision and excellence to construction
                  projects of all scales.
                </p>
                <p>
                  Our team comprises industry-certified professionals with memberships in
                  prestigious organizations including RICS, AIQS, and IQSSL. We combine technical
                  expertise with a deep understanding of local and international construction
                  markets to deliver tailored solutions.
                </p>
                <p>
                  At QSoutsource, we believe in cost clarity and financial control. Our
                  data-driven approach ensures that every project we work on achieves optimal
                  value while maintaining the highest quality standards.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518726775-70e538b0d46e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NzUwMTgxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-3xl text-[#1e3a8a]">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To be the most trusted and sought-after construction consultancy partner globally,
                recognized for our precision, integrity, and commitment to client success. We
                envision a future where every construction project benefits from transparent cost
                management and strategic financial planning.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#d4af37] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h2 className="text-3xl text-[#1e3a8a]">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To deliver exceptional construction consultancy services that empower our clients
                to make informed decisions, optimize costs, and achieve project excellence. We are
                committed to leveraging our expertise, technology, and global insights to drive
                value in every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-[#1e3a8a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl mb-3 text-[#1f2937]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Professional Memberships</h2>
            <p className="text-xl text-gray-600">
              Proud members of leading industry organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="bg-[#1e3a8a] text-white px-6 py-4 rounded-lg inline-block mb-6">
                  <span className="text-3xl">{membership.name}</span>
                </div>
                <h3 className="text-xl mb-4 text-[#1f2937]">{membership.full}</h3>
                <p className="text-gray-600">{membership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="mx-auto mb-6 text-[#d4af37]" size={64} />
          <h2 className="text-4xl mb-6 text-[#1e3a8a]">Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team consists of highly qualified quantity surveyors, cost consultants, and
            project management professionals. With decades of combined experience across diverse
            construction sectors, we bring unparalleled expertise to every project.
          </p>
        </div>
      </section>
    </div>
  );
}
