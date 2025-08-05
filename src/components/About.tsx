import React from 'react';
import { Users, Award, Clock, Target, Building2, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Sagala Tech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah perusahaan IT yang berdedikasi untuk memberikan solusi teknologi terbaik 
            bagi bisnis di era digital ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Mitra Terpercaya untuk Transformasi Digital Bisnis Anda
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sagala Tech hadir sebagai solusi komprehensif untuk kebutuhan teknologi informasi bisnis Anda. 
              Dengan pengalaman dan keahlian yang mendalam, kami menyediakan layanan mulai dari pengembangan 
              software hingga instalasi hardware.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Tim profesional kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan 
              pendekatan yang personal dan solusi yang disesuaikan dengan kebutuhan spesifik setiap klien.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">Proyek Selesai</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700">Kepuasan Klien</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
              <Users size={40} className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">Tim Profesional</h4>
              <p className="text-blue-100 text-sm">
                Didukung oleh tim ahli yang berpengalaman di bidang IT
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
              <Award size={40} className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">Kualitas Terjamin</h4>
              <p className="text-green-100 text-sm">
                Menggunakan teknologi terkini dan standar industri terbaik
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
              <Clock size={40} className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">Tepat Waktu</h4>
              <p className="text-purple-100 text-sm">
                Komitmen menyelesaikan proyek sesuai timeline yang disepakati
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
              <Target size={40} className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">Solusi Tepat</h4>
              <p className="text-orange-100 text-sm">
                Memberikan solusi yang sesuai dengan kebutuhan bisnis Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;