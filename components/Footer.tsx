import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './FooterLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
             <Link to="/">
              <Logo className="h-16 w-auto" textClassName="text-slate-200" />
            </Link>
            <p className="text-sm">
              Your trusted partner for precision machining works and CNC solutions. Over 8+ years of experience delivering quality and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-amber-400" />
                <span>Shivam Industrial Area, Plot no. 1+2+3, Survey no. 296/2/1, At-Ribda, Ta-Gondal, Dist.-Rajkot, Gujarat, 360311</span>
              </p>
              <a href="mailto:vtejenterprise@gmail.com" className="flex items-center hover:text-amber-400 transition-colors">
                <Mail size={16} className="mr-3 flex-shrink-0 text-amber-400" />
                <span>vtejenterprise@gmail.com</span>
              </a>
              <a href="tel:+919726461965" className="flex items-center hover:text-amber-400 transition-colors">
                <Phone size={16} className="mr-3 flex-shrink-0 text-amber-400" />
                <span>+91 97264 61965</span>
              </a>
            </address>
          </div>

          {/* MD & CEO */}
           <div>
            <h3 className="text-lg font-semibold text-white mb-4">MD & CEO</h3>
            <div className="space-y-1">
              <p>Tejas Pithava</p>
              <p>Vijay Kapadiya</p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {currentYear} VTEJ Enterprise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
