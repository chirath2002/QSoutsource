import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">QSoutsource</h3>
            <p className="text-sm text-gray-400 mb-4">Powered by Bawans Pvt Ltd</p>
            <p className="text-gray-300 mb-4">
              Precision in Cost. Excellence in Delivery. Your trusted partner in construction
              consultancy and project management.
            </p>
            <div className="flex space-x-4">
              <Globe className="text-[#d4af37]" size={20} />
              <span className="text-sm text-gray-300">
                UAE • KSA • Qatar • UK • Australia • Sri Lanka
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@qsoutsource.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business Plaza, Downtown District
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} QSoutsource - Powered by Bawans Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-xs text-gray-500">RICS</span>
            <span className="text-xs text-gray-500">AIQS</span>
            <span className="text-xs text-gray-500">IQSSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
