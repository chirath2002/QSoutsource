import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      country: 'UAE',
      city: 'Dubai',
      address: '123 Business Bay, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@qsoutsource.com',
    },
    {
      country: 'KSA',
      city: 'Riyadh',
      address: '456 King Fahd Road, Riyadh, KSA',
      phone: '+966 11 234 5678',
      email: 'riyadh@qsoutsource.com',
    },
    {
      country: 'UK',
      city: 'London',
      address: '789 Canary Wharf, London, UK',
      phone: '+44 20 1234 5678',
      email: 'london@qsoutsource.com',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#1f2937]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Start your project with confidence. Get in touch today.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-6 text-[#1e3a8a]">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need a consultation, quote, or want to discuss your project, we're
                here to help. Fill out the form and our team will respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#1f2937]">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Available Mon-Fri, 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#1f2937]">Email</h3>
                    <p className="text-gray-600">info@qsoutsource.com</p>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#1f2937]">Global Offices</h3>
                    <p className="text-gray-600">UAE • KSA • Qatar • UK</p>
                    <p className="text-gray-600">Australia • Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block mb-2 text-gray-700">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    >
                      <option value="">Select Country</option>
                      <option value="UAE">UAE</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block mb-2 text-gray-700">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    >
                      <option value="">Select Type</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Residential">Residential</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Mixed-Use">Mixed-Use</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="Please describe your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] hover:bg-[#152a5a] text-white py-4 rounded-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[#1e3a8a]">Our Offices</h2>
            <p className="text-xl text-gray-600">
              Connect with our teams across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-2 text-[#1f2937]">{office.city}</h3>
                <p className="text-sm text-[#d4af37] mb-4">{office.country}</p>
                <div className="space-y-2 text-gray-600">
                  <p>{office.address}</p>
                  <p className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Start Your Project With Confidence</h2>
          <p className="text-xl mb-2 text-gray-200">
            Professional construction consultancy services tailored to your needs
          </p>
          <p className="text-lg text-gray-300">
            QSoutsource – Where precision meets excellence
          </p>
        </div>
      </section>
    </div>
  );
}
