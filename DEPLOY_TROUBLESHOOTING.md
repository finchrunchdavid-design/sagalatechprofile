# 🔧 Panduan Troubleshooting Deploy SagalaTech

## 🚨 **Masalah Deploy yang Umum Terjadi:**

### 1. **Build Error - Dependencies Issue**
**Gejala:** Error saat `npm run build` atau `npm install`
**Solusi:**
```bash
# Hapus node_modules dan package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# Install ulang dengan force
npm install --force

# Atau gunakan yarn sebagai alternatif
npm install -g yarn
yarn install
yarn build
```

### 2. **Vite Build Error - Rollup Issue**
**Gejala:** Error `Cannot find module @rollup/rollup-win32-x64-msvc`
**Solusi:**
```bash
# Install rollup secara manual
npm install @rollup/rollup-win32-x64-msvc --save-dev

# Atau update vite ke versi terbaru
npm install vite@latest --save-dev
```

### 3. **Netlify Deploy Error**
**Gejala:** Build berhasil lokal tapi gagal di Netlify
**Solusi:**
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** Set ke 18 atau 20 di Netlify settings

### 4. **Vercel Deploy Error**
**Gejala:** Build timeout atau memory error
**Solusi:**
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18.x

### 5. **GitHub Pages Deploy Error**
**Gejala:** 404 error atau blank page
**Solusi:**
```javascript
// Update vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/sagalatechprofile/', // Nama repository
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

## 🛠️ **Solusi Deploy Alternatif:**

### **Metode 1: Manual Build & Upload**
```bash
# Build project
npm run build

# Upload folder 'dist' ke hosting
# Rename index.html jika perlu
```

### **Metode 2: Static HTML Version**
Jika React build gagal, buat versi static HTML:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SagalaTech - Profile Perusahaan Solusi IT Terpercaya Indonesia</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="SagalaTech adalah perusahaan penyedia layanan IT terpercaya di Indonesia. Layanan: Website, POS System, AI Automation, CCTV, Jaringan, IT Maintenance. Hubungi kami di profile.sagalatech.com">
    <meta name="keywords" content="SagalaTech, Sagala Tech, jasa IT Indonesia, pembuatan website, POS system, AI automation, CCTV, jaringan komputer, maintenance IT">
    <meta name="author" content="SagalaTech">
    <meta name="robots" content="index, follow">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://profile.sagalatech.com">
    
    <!-- Open Graph -->
    <meta property="og:title" content="SagalaTech - Solusi IT Terpercaya Indonesia">
    <meta property="og:description" content="Penyedia layanan IT komprehensif: Website, POS, AI, CCTV, Jaringan. Konsultasi gratis!">
    <meta property="og:url" content="https://profile.sagalatech.com">
    <meta property="og:type" content="website">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SagalaTech",
      "url": "https://profile.sagalatech.com",
      "description": "Perusahaan penyedia layanan IT terpercaya di Indonesia",
      "telephone": "+6285187229626",
      "email": "sagalatech25@gmail.com"
    }
    </script>
    
    <style>
        /* Minimal CSS untuk SEO */
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        h1 { color: #2563eb; font-size: 2.5rem; }
        .container { max-width: 1200px; margin: 0 auto; }
        .services { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 40px 0; }
        .service-card { border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>SagalaTech - Solusi IT Terpercaya Indonesia</h1>
            <p>Perusahaan penyedia layanan IT komprehensif untuk transformasi digital bisnis Anda</p>
        </header>
        
        <main>
            <section>
                <h2>Tentang SagalaTech</h2>
                <p>SagalaTech adalah perusahaan penyedia layanan IT terpercaya di Indonesia yang berfokus pada solusi teknologi untuk bisnis. Kami menyediakan layanan komprehensif mulai dari pengembangan website, sistem POS, automasi AI, hingga instalasi hardware.</p>
            </section>
            
            <section class="services">
                <div class="service-card">
                    <h3>Website Development</h3>
                    <p>Pembuatan website profesional dan e-commerce</p>
                </div>
                <div class="service-card">
                    <h3>POS System</h3>
                    <p>Sistem Point of Sale untuk retail dan F&B</p>
                </div>
                <div class="service-card">
                    <h3>AI Automation</h3>
                    <p>Chatbot dan automasi berbasis AI</p>
                </div>
                <div class="service-card">
                    <h3>CCTV Installation</h3>
                    <p>Instalasi dan maintenance sistem keamanan</p>
                </div>
                <div class="service-card">
                    <h3>Network Setup</h3>
                    <p>Instalasi dan konfigurasi jaringan</p>
                </div>
                <div class="service-card">
                    <h3>IT Maintenance</h3>
                    <p>Support dan maintenance IT berkelanjutan</p>
                </div>
            </section>
            
            <section>
                <h2>Kontak</h2>
                <p>Email: sagalatech25@gmail.com</p>
                <p>WhatsApp: +6285187229626</p>
                <p>Website: profile.sagalatech.com</p>
            </section>
        </main>
    </div>
</body>
</html>
```

## 📋 **Checklist Deploy:**

### **Pre-Deploy:**
- [ ] `npm install` berhasil tanpa error
- [ ] `npm run build` berhasil menghasilkan folder `dist`
- [ ] File `robots.txt` dan `sitemap.xml` ada di folder `public`
- [ ] Meta tags SEO sudah benar di `index.html`

### **Deploy Process:**
- [ ] Upload semua file ke repository GitHub
- [ ] Connect repository ke hosting platform
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Deploy berhasil tanpa error

### **Post-Deploy:**
- [ ] Website dapat diakses di `profile.sagalatech.com`
- [ ] Meta tags muncul di view source
- [ ] `robots.txt` dapat diakses di `/robots.txt`
- [ ] `sitemap.xml` dapat diakses di `/sitemap.xml`
- [ ] Submit sitemap ke Google Search Console

## 🆘 **Jika Masih Error:**

1. **Gunakan Static HTML Version** (lihat di atas)
2. **Deploy ke GitHub Pages** dengan setting manual
3. **Gunakan Netlify Drop** untuk upload manual folder `dist`
4. **Contact Support** hosting platform yang digunakan

---

**💡 Tip:** Jika React build terus error, versi static HTML sudah cukup untuk SEO dan ranking di Google!
