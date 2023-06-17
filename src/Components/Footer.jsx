import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="fContainer">
      <div className="fSection">
        <ul className="fContent">
          <li className="fContentHeading">Çözüm ve Hizmetler</li>
          <li>Yazılım Geliştirme</li>
          <li>Outsourcing</li>
          <li>Kalite ve Süreç Yönetimi</li>
          <li>Danışmanlık</li>
          <li>IoT Destekli Çözümler</li>
        </ul>

        <ul className="fContent">
          <li className="fContentHeading">Ürünler</li>
          <li>Eğitim Yönetim Sistemi</li>
          <li>İnsan Sermayesi Yönetim Sistemi</li>
          <li>Müşteri İlişkileri Yönetim Sistemi</li>
          <li>İçerik Yönetim Sistemi</li>
        </ul>

        <ul className="fContent">
          <li className="fContentHeading">Kurumsal</li>
          <li>Hakkımızda</li>
          <li>Belge ve Yetkinlikler</li>
          <li>İş Ortakları</li>
        </ul>

        <ul className="fContent">
          <li className="fContentHeading">İletişim</li>
          <li>Bilgi İstek Formu</li>
          <li>Uzman Talep Formu</li>
        </ul>
      </div>

      <div className="fBottom">
        <span>&copy; Copyright 2010-2021 - Can Çevik</span>
        <div className="fIcons">
          <CiLinkedin />
          <CiTwitter />
          <CiInstagram />
          <CiFacebook />
        </div>
      </div>
    </div>
  );
}
