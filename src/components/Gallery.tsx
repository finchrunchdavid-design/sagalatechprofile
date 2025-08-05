import React, { useState } from 'react';
import { ExternalLink, Code, Monitor, Smartphone, Camera, Wifi, ShoppingCart, Image, Sparkles } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'website',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Platform e-commerce modern dengan sistem pembayaran terintegrasi',
      icon: ShoppingCart
    },
    {
      id: 2,
      title: 'Company Profile PT. Maju Jaya',
      category: 'website',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Website company profile dengan desain profesional dan responsif',
      icon: Code
    },
    {
      id: 3,
      title: 'POS System Retail',
      category: 'software',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sistem kasir modern untuk toko retail dengan fitur inventory management',
      icon: Monitor
    },
    {
      id: 4,
      title: 'CCTV Installation - Office Building',
      category: 'hardware',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Instalasi sistem keamanan CCTV dengan 16 kamera HD',
      icon: Camera
    },
    {
      id: 5,
      title: 'Network Infrastructure Setup',
      category: 'hardware',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Setup jaringan LAN dan WiFi untuk kantor 3 lantai',
      icon: Wifi
    },
    {
      id: 6,
      title: 'Mobile App Development',
      category: 'software',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aplikasi mobile untuk manajemen inventory dan sales tracking',
      icon: Smartphone
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Proyek' },
    { id: 'website', name: 'Website' },
    { id: 'software', name: 'Software' },
    { id: 'hardware', name: 'Hardware' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeri & Portofolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat berbagai proyek yang telah kami kerjakan dengan hasil yang memuaskan
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={20} className="text-gray-700" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="text-blue-600" size={20} />
                    </div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2">
                    <span>Lihat Detail</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Klien Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;