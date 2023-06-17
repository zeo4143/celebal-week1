// import React from 'react'
import Navbar from "./Navbar";
import file from "../assets/fileLogo.png";
import star from "../assets/star.png";
import crown from "../assets/crown.png";
import barG from "../assets/barG.png";
import pieCh from "../assets/pieCh.png";
import figmaLogo from "../assets/figmaLogo.png";
import logos from "../assets/Logos.png";
import illustration from "../assets/Illustration.jpg";
import macbook from "../assets/macbook.jpg";
import UserProfile from "../assets/UserProfile.png";
import { CgChevronDoubleRightO }  from "react-icons/cg";
import Footer from "./Footer";

export default function HomePage() {
  const data = [
    {
      headings: "Döküman Analizi",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      image: file,
    },
    {
      headings: "Kabul ve Değerlendirme",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      image: star,
    },
    {
      headings: "İş Kuralları Analizi",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      image: crown,
    },
    {
      headings: "Akış Diyagramları",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      image: barG,
    },
    {
      headings: "Paydaş Analizi",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      image: pieCh,
    },
    {
      headings: "Prototipleme",
      description:
        "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
      image: figmaLogo,
    },
  ];

  return (
    <>
      <div className="homePage">
        <Navbar />
        <div className="homepagetext">
          <h1>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h1>
          <p>
            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
            farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
            Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
          </p>
          <form className="form">
            <input type="text" placeholder="Mail bültenimize kayıt ol"  className="input"/>
            <button>Kayıt Ol</button>
          </form>
        </div>
      </div>

      <section>
        <center>
          <h2>Kalite ve Süreç Yönetimi</h2>
          <p className="conent-para">
            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
            farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
            Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
          </p>
        </center>
        <section className="contentLogos">
          {data.map((items) => (
            <>
              <center style={{ width: "300px" }}>
                <img src={items.image} alt="Logo Not Found" />
                <h3>{items.headings}</h3>
                <p>{items.description}</p>
              </center>
            </>
          ))}
        </section>
      </section>

      <section className="content2">
        <center>
          <h2>Test Yönetimiyle Neler Sağlıyoruz?</h2>
          <p>IoT Destekli Çözümler</p>

          <div className="content2-div">
            <p>Yazılım Kalitesini Arttırıyoruz</p>
            <span>
              <CgChevronDoubleRightO className="rIconColor" />
            </span>
            <p>Olası Hataları Önceden Belirliyoruz</p>
            <span>
              <CgChevronDoubleRightO className="rIconColor" />
            </span>
            <p>Oluşabilecek Riskleri Önlüyoruz</p>
            <span>
              <CgChevronDoubleRightO className="rIconColor" />
            </span>
            <p>Zaman ve Maliyetten Tasarruf Sağlıyoruz</p>
          </div>
        </center>
      </section>

      <section>
        <section className="content3">
          <div className="content3-para">
            <h1>Kalite ve Süreç Yönetimi</h1>
            <span>
              Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
              sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
              Projelerinizin yönetimine destek olmak, zayıf olduğunu
              düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan
              PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için
              yanınızdayız.
            </span>
            <button className="content3Btn">Keşfet</button>
          </div>
          <img src={illustration} alt="image not found" width="504px" className="content3Img" />
        </section>

        <section className="content3">
          <img src={macbook} alt="image not found" className="content3Img" />
          <div className="content3-para">
            <h1>Test Yönetimi ve Analizi</h1>
            <span>
              Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
              amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel
              ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
              ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
              baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
              sunmaktadır.
            </span>
            <button className="content3Btn">Keşfet</button>
          </div>
        </section>
      </section>

      <section className="brands">
        <center>
          <h2>Referanslarımız</h2>
          <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
          <img src={logos} alt="image not found" className="brands-image" />
        </center>
      </section>
      <section>
        <center>
          <img src={UserProfile} alt="image not found" />
          <h2>Bize Ulaşın</h2>
          <p>
            Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
            irtibata geçin.
          </p>
          <button>Bize Ulaşın</button>
        </center>
      </section>

      <Footer />
    </>
  );
}
