import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Database, 
  CreditCard, 
  Bot, 
  TrendingUp,
  Camera,
  Wifi,
  Wrench,
  Monitor,
  Smartphone,
  Printer
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('software');

  const softwareServices = [
    {
      icon: Globe,
      title: 'Website Company Profile',
      description: 'Pembuatan website profesional untuk meningkatkan kredibilitas dan online presence perusahaan Anda.',
      features: ['Desain Responsif', 'SEO Optimized', 'Content Management', 'Fast Loading']
    },
    {
      icon: ShoppingCart,
      title: 'Toko Online (E-commerce)',
      description: 'Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan analitik penjualan.',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Friendly']
    },
    {
      icon: Database,
      title: 'Sistem Informasi',
      description: 'Pengembangan sistem informasi custom sesuai kebutuhan bisnis untuk meningkatkan efisiensi operasional.',
      features: ['Custom Development', 'Database Design', 'User Management', 'Reporting System']
    },
    {
      icon: CreditCard,
      title: 'POS System',
      description: 'Sistem Point of Sale modern untuk kasir dan bisnis retail dengan fitur lengkap dan mudah digunakan.',
      features: ['Real-time Sales', 'Inventory Control', 'Customer Management', 'Multi-payment']
    },
    {
      icon: Bot,
      title: 'Automasi AI & Chatbot',
      description: 'Implementasi AI untuk otomatisasi proses bisnis dan chatbot untuk customer service 24/7.',
      features: ['AI Integration', 'Process Automation', '24/7 Support', 'Multi-platform']
    },
    {
      icon: TrendingUp,
      title: 'Digital Ads Management',
      description: 'Pengelolaan iklan digital di Google Ads dan Meta (Facebook/Instagram) untuk meningkatkan reach bisnis.',
      features: ['Google Ads', 'Meta Ads', 'Analytics', 'ROI Optimization']
    }
  ];

  const hardwareServices = [
    {
      icon: Camera,
      title: 'Pemasangan CCTV',
      description: 'Instalasi sistem keamanan CCTV dengan kualitas HD dan monitoring real-time untuk keamanan optimal.',
      features: ['HD Quality', 'Remote Monitoring', 'Night Vision', 'Cloud Storage']
    },
    {
      icon: Wifi,
      title: 'Instalasi Jaringan LAN/WiFi',
      description: 'Setup jaringan LAN dan WiFi yang stabil dan aman untuk mendukung konektivitas bisnis Anda.',
      features: ['High Speed', 'Secure Network', 'Wide Coverage', 'Network Management']
    },
    {
      icon: Monitor,
      title: 'Service Komputer & Laptop',
      description: 'Maintenance dan perbaikan komputer serta laptop dengan diagnosa akurat dan penanganan profesional.',
      features: ['Hardware Repair', 'Software Troubleshooting', 'Data Recovery', 'Performance Optimization']
    },
    {
      icon: Printer,
      title: 'Service Printer',
      description: 'Perbaikan dan maintenance printer berbagai merk dengan spare part original dan garansi service.',
      features: ['All Brand Support', 'Original Parts', 'Quick Service', 'Warranty Included']
    },
    {
      icon: Smartphone,
      title: 'Service Handphone',
      description: 'Reparasi smartphone dengan teknisi berpengalaman dan spare part berkualitas tinggi.',
      features: ['Screen Replacement', 'Battery Service', 'Water Damage', 'Software Repair']
    },
    {
      icon: Wrench,
      title: 'IT Maintenance',
      description: 'Layanan maintenance rutin untuk semua perangkat IT guna menjaga performa optimal sistem Anda.',
      features: ['Preventive Maintenance', 'System Updates', 'Performance Monitoring', 'Technical Support']
    }
  ];

  const currentServices = activeTab === 'software' ? softwareServices : hardwareServices;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi IT komprehensif untuk semua kebutuhan teknologi bisnis Anda
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('software')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'software'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Software Solutions
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'hardware'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Hardware Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Butuh Konsultasi untuk Proyek Anda?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda menemukan solusi IT yang tepat untuk kebutuhan bisnis Anda.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;