import { Calculator, FileText, Users, Building, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ServicesPage() {
  const [openService, setOpenService] = useState<number | null>(0);

  const services = [
    {
      icon: Calculator,
      title: 'Cost Management',
      description: 'Comprehensive cost control and financial oversight throughout the project lifecycle.',
      services: [
        'Pre-construction cost planning and budgeting',
        'Cost estimation and feasibility studies',
        'Value engineering and cost optimization',
        'Cash flow forecasting and monitoring',
        'Cost reporting and variance analysis',
        'Final account preparation and settlement',
      ],
    },
    {
      icon: FileText,
      title: 'Contract & Commercial Management',
      description: 'Expert contract administration ensuring smooth project execution and dispute resolution.',
      services: [
        'Contract documentation and tendering',
        'Procurement strategy and supplier management',
        'Payment certification and valuations',
        'Variation and change order management',
        'Claims preparation and assessment',
        'Contract dispute resolution and mediation',
      ],
    },
    {
      icon: Users,
      title: 'Dedicated Project Teams',
      description: 'Skilled professionals integrated into your projects for seamless delivery.',
      services: [
        'On-site quantity surveyors',
        'Cost engineers and estimators',
        'Commercial managers',
        'Contract administrators',
        'Project coordinators',
        'Document control specialists',
      ],
    },
    {
      icon: Building,
      title: 'Design Management',
      description: 'Coordinating design processes to ensure cost-effective and buildable solutions.',
      services: [
        'Design cost planning and control',
        'Design coordination and review',
        'Specification development',
        'Material selection and analysis',
        'Buildability assessment',
        'Design change management',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring delivery on time and within budget.',
      services: [
        'Project planning and scheduling',
        'Risk identification and mitigation',
        'Quality assurance and control',
        'Stakeholder management',
        'Progress monitoring and reporting',
        'Project closeout and handover',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#1f2937]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">
            Comprehensive construction consultancy solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cost planning to project completion, we provide end-to-end construction
              consultancy services
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openService === index;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setOpenService(isOpen ? null : index)}
                    className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-6 flex-1">
                      <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl mb-2 text-[#1f2937]">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`text-[#1e3a8a] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-8 pb-8 border-t border-gray-100">
                      <div className="pt-6">
                        <h4 className="mb-4 text-[#1e3a8a]">Services Include:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.services.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-[#d4af37] mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4 text-[#d4af37]">15+</div>
              <h3 className="text-xl mb-2 text-[#1f2937]">Years Experience</h3>
              <p className="text-gray-600">
                Industry expertise across multiple sectors and geographies
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4 text-[#d4af37]">500+</div>
              <h3 className="text-xl mb-2 text-[#1f2937]">Projects Delivered</h3>
              <p className="text-gray-600">
                Successful completion of diverse construction projects
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4 text-[#d4af37]">6</div>
              <h3 className="text-xl mb-2 text-[#1f2937]">Countries Served</h3>
              <p className="text-gray-600">Global reach with local market expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Expert Construction Consultancy?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how our services can add value to your project
          </p>
          <a
            href="/contact"
            className="bg-[#d4af37] hover:bg-[#b8961f] text-white px-10 py-4 rounded-md transition-colors inline-block"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
