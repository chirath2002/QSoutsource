import { Calculator, TrendingUp, Shield, FileText, Target, Check } from 'lucide-react';

export function OurApproachPage() {
  const steps = [
    {
      icon: Calculator,
      step: '01',
      title: 'Cost Planning & Financial Control',
      description:
        'We begin with comprehensive cost analysis, establishing clear budgets and financial frameworks that align with your project objectives and constraints.',
      highlights: [
        'Detailed cost breakdown structure',
        'Budget allocation and tracking systems',
        'Financial risk assessment',
      ],
    },
    {
      icon: TrendingUp,
      step: '02',
      title: 'Value Engineering',
      description:
        'Our team identifies opportunities to optimize costs without compromising quality, functionality, or project goals through systematic analysis.',
      highlights: [
        'Alternative material and method analysis',
        'Life-cycle cost evaluation',
        'Design optimization recommendations',
      ],
    },
    {
      icon: Shield,
      step: '03',
      title: 'Risk Management',
      description:
        'Proactive identification and mitigation of potential risks ensures project continuity and protects your investment from unforeseen challenges.',
      highlights: [
        'Risk identification workshops',
        'Quantitative risk analysis',
        'Contingency planning and reserves',
      ],
    },
    {
      icon: FileText,
      step: '04',
      title: 'Contract Administration',
      description:
        'Expert management of contractual obligations, variations, and claims ensures fair treatment and compliance throughout the project.',
      highlights: [
        'Contract compliance monitoring',
        'Change order management',
        'Claims assessment and resolution',
      ],
    },
    {
      icon: Target,
      step: '05',
      title: 'Project Execution & Monitoring',
      description:
        'Continuous oversight and regular reporting keep your project on track, providing transparency and enabling informed decision-making.',
      highlights: [
        'Progress tracking and reporting',
        'Cost-to-complete forecasting',
        'Performance metrics analysis',
      ],
    },
    {
      icon: Check,
      step: '06',
      title: 'Post-Project Evaluation',
      description:
        'We conduct thorough reviews upon completion, documenting lessons learned and providing insights for future projects.',
      highlights: [
        'Final account settlement',
        'Project performance analysis',
        'Knowledge transfer and documentation',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#1f2937]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">Our Approach</h1>
          <p className="text-xl text-gray-200">
            A systematic, data-driven methodology for construction excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-[#1e3a8a]">Precision Through Process</h2>
          <p className="text-xl text-gray-600 mb-4">
            At QSoutsource, we follow a structured approach that combines industry best practices
            with innovative methodologies. Our six-phase process ensures consistent delivery of
            high-quality outcomes across all projects.
          </p>
          <p className="text-lg text-gray-600">
            From initial planning to final evaluation, every step is designed to maximize value,
            minimize risk, and ensure transparency.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <div className="flex items-center mb-6">
                        <div className="bg-[#d4af37] text-white px-6 py-3 rounded-lg mr-4">
                          <span className="text-2xl">{step.step}</span>
                        </div>
                        <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center">
                          <Icon className="text-white" size={32} />
                        </div>
                      </div>
                      <h3 className="text-3xl mb-4 text-[#1f2937]">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <div className="space-y-2">
                        {step.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Check className="text-[#d4af37] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="text-center lg:text-left">
                      <div className="text-8xl text-[#1e3a8a] opacity-10 mb-4">
                        {step.step}
                      </div>
                      <p className="text-xl text-gray-600">
                        {index === 0 && 'Establishing financial frameworks for success'}
                        {index === 1 && 'Maximizing value through innovation'}
                        {index === 2 && 'Protecting your investment proactively'}
                        {index === 3 && 'Ensuring compliance and fairness'}
                        {index === 4 && 'Maintaining control and visibility'}
                        {index === 5 && 'Learning and improving continuously'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Our Core Principles</h2>
            <p className="text-xl text-gray-600">Guiding every decision and action we take</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Data-Driven', desc: 'Decisions based on accurate data and analysis' },
              { title: 'Transparent', desc: 'Clear communication at every stage' },
              { title: 'Proactive', desc: 'Anticipating challenges before they arise' },
              { title: 'Collaborative', desc: 'Working as partners with all stakeholders' },
            ].map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl mb-3 text-[#1f2937]">{principle.title}</h3>
                <p className="text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Experience Our Approach?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how our proven methodology can benefit your project
          </p>
          <a
            href="/contact"
            className="bg-[#d4af37] hover:bg-[#b8961f] text-white px-10 py-4 rounded-md transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
