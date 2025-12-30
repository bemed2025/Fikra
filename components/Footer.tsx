import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MonitorPlay } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center text-white">
                <MonitorPlay size={20} />
              </div>
              <span className="text-xl font-black">
                فكرة <span className="text-primary-500">رقمية</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              شريكك الرقمي الموثوق في المملكة العربية السعودية. نحول أفكارك إلى واقع رقمي ملموس من خلال خدمات متكاملة واحترافية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-500 inline-block pb-2">روابط سريعة</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">الرئيسية</Link></li>
              <li><a href="/#services" className="text-gray-300 hover:text-primary-400 transition-colors">خدماتنا</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">اتصل بنا</Link></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-primary-400 transition-colors">الشروط والسياسات</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-500 inline-block pb-2">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-primary-500" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors" dir="ltr">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-primary-500" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" dir="ltr">{COMPANY_INFO.whatsapp}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-primary-500" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} فكرة رقمية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};