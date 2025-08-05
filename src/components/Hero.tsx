import React from 'react';
import { ArrowRight, Code, Cpu, Shield, Zap, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Solusi IT
                <span className="text-blue-600 block">Terpercaya</span>
                untuk Bisnis Anda
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sagala Tech menyediakan layanan IT komprehensif mulai dari pengembangan website, 
                sistem POS, automasi AI, hingga instalasi hardware untuk mendukung transformasi digital bisnis Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span className="font-semibold">Konsultasi Gratis</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Lihat Layanan
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Software</h3>
                <p className="text-sm text-gray-600">Development</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Hardware</h3>
                <p className="text-sm text-gray-600">Installation</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Support</h3>
                <p className="text-sm text-gray-600">24/7 Service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Mengapa Memilih Sagala Tech?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tim Profesional</h4>
                      <p className="text-blue-100">Berpengalaman dalam berbagai teknologi terkini</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Harga Kompetitif</h4>
                      <p className="text-blue-100">Solusi berkualitas dengan harga terjangkau</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Support Berkelanjutan</h4>
                      <p className="text-blue-100">Maintenance dan dukungan teknis terpercaya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full w-8 h-8 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 bg-pink-400 rounded-full w-6 h-6 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;