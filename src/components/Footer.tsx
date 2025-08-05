import React from 'react';
import { Phone, Mail, Instagram, MapPin, Heart, Code2, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/sagala_logo.png" 
                alt="Sagala Tech Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Sagala Tech</h3>
                <p className="text-gray-400 text-sm">IT Solutions & Services</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Menyediakan solusi IT komprehensif untuk mendukung transformasi digital bisnis Anda 
              dengan layanan profesional dan terpercaya.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/6285187229626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:sagalatech25@gmail.com"
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://instagram.com/sagala.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimoni
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Utama</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>E-commerce Solutions</li>
              <li>POS System</li>
              <li>AI & Automation</li>
              <li>CCTV Installation</li>
              <li>Network Setup</li>
              <li>IT Maintenance</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="text-green-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">WhatsApp</p>
                  <p className="text-white">085187229626</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">sagalatech25@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram className="text-pink-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Instagram</p>
                  <p className="text-white">@Sagala.Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Sagala Tech. Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>for your business success.</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;