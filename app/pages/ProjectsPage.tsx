import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building, TrendingUp, Users, Target } from 'lucide-react';

export function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure'];

  const projects = [
    {
      title: 'Dubai Marina Tower',
      sector: 'Commercial',
      location: 'Dubai, UAE',
      value: '$120M',
      description: 'Cost management for 45-story commercial tower',
      image: 'https://images.unsplash.com/photo-1766866771433-c3042a3ce7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzY3NDIxNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Luxury Residential Complex',
      sector: 'Residential',
      location: 'London, UK',
      value: '$85M',
      description: 'Quantity surveying for high-end residential development',
      image: 'https://images.unsplash.com/photo-1763622480471-4395dfa3b8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3NTAxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Manufacturing Facility',
      sector: 'Industrial',
      location: 'Riyadh, KSA',
      value: '$95M',
      description: 'Complete project management and cost control',
      image: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3Njc0ODUxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Metro Station Development',
      sector: 'Infrastructure',
      location: 'Doha, Qatar',
      value: '$150M',
      description: 'Contract management for metro expansion project',
      image: 'https://images.unsplash.com/photo-1759542878135-bc80368e74ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY3NDc0NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Shopping Mall Complex',
      sector: 'Commercial',
      location: 'Sydney, Australia',
      value: '$110M',
      description: 'Cost consultancy and value engineering',
      image: 'https://images.unsplash.com/photo-1766866771433-c3042a3ce7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzY3NDIxNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Residential Township',
      sector: 'Residential',
      location: 'Colombo, Sri Lanka',
      value: '$75M',
      description: 'Full quantity surveying services',
      image: 'https://images.unsplash.com/photo-1763622480471-4395dfa3b8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3NTAxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredProjects = selectedSector === 'All' 
    ? projects 
    : projects.filter(p => p.sector === selectedSector);

  const stats = [
    { icon: Building, value: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '$5B+', label: 'Total Project Value' },
    { icon: Users, value: '200+', label: 'Client Relationships' },
    { icon: Target, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#1f2937]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">Projects & Clients</h1>
          <p className="text-xl text-gray-200">
            Delivering excellence across diverse construction projects globally
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="mx-auto mb-4 text-[#d4af37]" size={48} />
                  <div className="text-3xl mb-2 text-[#1e3a8a]">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Featured Projects</h2>
            <p className="text-xl text-gray-600 mb-8">
              A selection of our recent successful engagements
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedSector === sector
                      ? 'bg-[#1e3a8a] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-4 py-1 rounded-full">
                    {project.sector}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[#1f2937]">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1e3a8a]">Value: {project.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Client Sectors</h2>
            <p className="text-xl text-gray-600">We serve clients across multiple industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Property Developers', 'Construction Companies', 'Government Agencies', 'Private Investors', 
              'Real Estate Firms', 'Infrastructure Authorities', 'Retail Chains', 'Healthcare Providers'].map((sector, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#1e3a8a] hover:text-white transition-colors">
                <p>{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Start Your Next Project With Us</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our list of satisfied clients across the globe
          </p>
          <a
            href="/contact"
            className="bg-[#d4af37] hover:bg-[#b8961f] text-white px-10 py-4 rounded-md transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
