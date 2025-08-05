import React from 'react';
import { Star, Quote, MessageSquare, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      position: 'Owner, Toko Elektronik Maju',
      company: 'Toko Elektronik Maju',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Sagala Tech sangat membantu dalam mengembangkan sistem POS untuk toko saya. Sekarang manajemen inventory dan penjualan jadi lebih mudah dan efisien. Tim mereka sangat profesional dan responsif.'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      position: 'Marketing Manager',
      company: 'PT. Berkah Jaya',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Website company profile yang dibuat oleh Sagala Tech sangat memuaskan. Desainnya modern, loading cepat, dan SEO-friendly. Banyak klien yang memberikan feedback positif tentang website kami.'
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      position: 'IT Manager',
      company: 'CV. Teknologi Nusantara',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Instalasi jaringan dan CCTV di kantor kami ditangani dengan sangat baik. Tim Sagala Tech bekerja dengan rapi dan memberikan training yang lengkap. Highly recommended!'
    },
    {
      id: 4,
      name: 'Linda Kusuma',
      position: 'Owner',
      company: 'Boutique Fashion Linda',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'E-commerce yang dibangun oleh Sagala Tech membantu bisnis online saya berkembang pesat. Fitur-fiturnya lengkap dan mudah digunakan. Customer service mereka juga sangat membantu.'
    },
    {
      id: 5,
      name: 'Rudi Hartono',
      position: 'General Manager',
      company: 'Hotel Indah Permai',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Sistem informasi hotel yang dikembangkan sangat membantu operasional harian kami. Dari booking, check-in/out, hingga laporan keuangan semua terintegrasi dengan baik.'
    },
    {
      id: 6,
      name: 'Maya Sari',
      position: 'Owner',
      company: 'Klinik Sehat Bersama',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Chatbot AI yang diimplementasikan di klinik kami sangat membantu dalam memberikan informasi awal kepada pasien. Mengurangi beban kerja staff dan meningkatkan pelayanan 24/7.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Klien</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa kata mereka tentang layanan Sagala Tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Dipercaya oleh Berbagai Industri</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏪</span>
                </div>
                <h4 className="font-semibold text-gray-900">Retail</h4>
                <p className="text-sm text-gray-600">Toko & Supermarket</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏥</span>
                </div>
                <h4 className="font-semibold text-gray-900">Healthcare</h4>
                <p className="text-sm text-gray-600">Klinik & Rumah Sakit</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏨</span>
                </div>
                <h4 className="font-semibold text-gray-900">Hospitality</h4>
                <p className="text-sm text-gray-600">Hotel & Restaurant</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="font-semibold text-gray-900">Corporate</h4>
                <p className="text-sm text-gray-600">Perusahaan & Startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;