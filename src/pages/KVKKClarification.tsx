import React from 'react';
import { Link } from 'react-router-dom';
import DomeLogo from '../components/DomeLogo';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../data/structuredData';

const KVKKClarification = () => {
  const kvkkBreadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://dome.istanbul/" },
    { name: "KVKK Clarification", url: "https://dome.istanbul/kvkk-clarification" }
  ]);

  return (
    <>
      <SEOHead 
        title="KVKK Clarification Text | DOME Creative Agency"
        description="KVKK (Personal Data Protection Law) clarification text for DOME Creative Agency. Information about personal data processing in accordance with Turkish data protection law."
        keywords="KVKK, personal data protection, data processing, Turkish law, DOME agency, data privacy"
        canonicalUrl="https://dome.istanbul/kvkk-clarification"
        structuredData={kvkkBreadcrumbs}
        ogType="article"
      />
      
      <div className="min-h-screen bg-black text-dome-cream font-futura">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 mx-4 sm:mx-8 md:mx-12 lg:mx-[49px]">
          <Link to="/" className="flex items-center">
            <DomeLogo className="w-16 h-12 sm:w-20 sm:h-15 md:w-24 md:h-18" fill="white" />
          </Link>
          <Link 
            to="/" 
            className="text-dome-cream hover:opacity-70 transition-opacity text-sm sm:text-base"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-dome-cream mb-8 tracking-wide">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-sm text-dome-cream/60 mb-12">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>

          <div className="space-y-8 text-dome-cream/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Veri Sorumlusu</h2>
              <p className="mb-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; 
                veri sorumlusu olarak DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ tarafından aşağıda 
                açıklanan kapsamda işlenmektedir.
              </p>
              <div className="bg-dome-cream/5 p-4 rounded-lg">
                <p><strong>Şirket Unvanı:</strong> DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ</p>
                <p><strong>İletişim:</strong> info@dome.istanbul</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">İşlenen Kişisel Veriler</h2>
              <p className="mb-4">Aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Kimlik Verileri:</strong> Ad, soyad</li>
                <li><strong>İletişim Verileri:</strong> E-posta adresi, telefon numarası</li>
                <li><strong>Müşteri İşlem Verileri:</strong> İş birliği talepleri, proje detayları</li>
                <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı bilgileri, cihaz bilgileri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>İletişim taleplerinin yanıtlanması</li>
                <li>Müşteri hizmetlerinin sunulması</li>
                <li>İş birliği fırsatlarının değerlendirilmesi</li>
                <li>Web sitesi işlevselliğinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Pazarlama ve tanıtım faaliyetleri (açık rızanız dahilinde)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
              <p className="mb-4">Kişisel verileriniz KVKK'nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Açık rızanızın bulunması</li>
                <li>Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
                <li>Meşru menfaatlerimizin söz konusu olması</li>
                <li>Kanunlarda açıkça öngörülmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Kişisel Verilerin Aktarılması</h2>
              <p className="mb-4">
                Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda ve 
                KVKK'nın 8. maddesinde belirtilen kişisel veri işleme şartları çerçevesinde:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>İş ortaklarımız ve tedarikçilerimiz</li>
                <li>Yasal yükümlülüklerimiz gereği kamu kurum ve kuruluşları</li>
                <li>Teknik altyapı hizmet sağlayıcıları</li>
              </ul>
              <p className="mt-4">ile paylaşılabilmektedir.</p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Kişisel Veri Sahibinin Hakları</h2>
              <p className="mb-4">KVKK'nın 11. maddesi uyarınca sahip olduğunuz haklar:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesi halinde bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Başvuru Yöntemi</h2>
              <p className="mb-4">
                Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
              </p>
              <div className="bg-dome-cream/5 p-4 rounded-lg space-y-2">
                <p><strong>E-posta:</strong> <a href="mailto:info@dome.istanbul" className="hover:opacity-70 transition-opacity">info@dome.istanbul</a></p>
                <p><strong>Konu:</strong> "KVKK Başvurusu" olarak belirtiniz</p>
              </div>
              <p className="mt-4 text-dome-cream/70">
                Başvurularınız en geç 30 gün içinde sonuçlandırılacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizin güvenliğini sağlamak amacıyla uygun teknik ve idari tedbirleri 
                almakta, gerekli denetimleri yapmaktayız. Verilerinizin yetkisiz erişim, değişiklik, 
                ifşa veya imha edilmesine karşı korunması için gerekli güvenlik önlemleri alınmıştır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">İletişim</h2>
              <p className="mb-4">
                Bu aydınlatma metni hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2">
                <p>E-posta: <a href="mailto:info@dome.istanbul" className="hover:opacity-70 transition-opacity">info@dome.istanbul</a></p>
                <p>Şirket: DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default KVKKClarification; 