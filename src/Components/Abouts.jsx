import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Content.css";
const Abouts = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Selamat datang di Website ini, sumber terpercaya untuk mendapatkan informasi terkini dan terkini seputar berita terkini, perkembangan terkini, dan topik menarik lainnya. Kami bertujuan memberikan pengalaman membaca yang informatif,
        menyeluruh, dan memikat bagi para pembaca kami.
      </p>

      <h2>Visi dan Misi</h2>

      <h3>Visi:</h3>
      <p>Menjadi platform berita yang menjadi sumber utama informasi terkini dan terpercaya bagi masyarakat, membantu mereka memahami dunia dengan perspektif yang luas dan mendalam.</p>

      <h3>Misi:</h3>
      <ol>
        <li>
          <strong>Memberikan Informasi Terkini:</strong> Menyajikan berita terkini dengan cepat dan akurat agar pembaca kami selalu up-to-date dengan peristiwa terbaru di seluruh dunia.
        </li>
        <li>
          <strong>Keanekaragaman Topik:</strong> Menyediakan berita dari berbagai bidang, mulai dari politik, bisnis, teknologi, hingga gaya hidup, sehingga memenuhi kebutuhan informasi dari berbagai segmen pembaca.
        </li>
        <li>
          <strong>Kualitas dan Integritas:</strong> Menjunjung tinggi standar jurnalisme yang etis, memberikan berita yang akurat, faktual, dan tidak bias.
        </li>
        <li>
          <strong>Keterlibatan Pembaca:</strong> Mendorong interaksi dan partisipasi pembaca melalui kolom komentar, polling, dan opsi berbagi, sehingga menciptakan komunitas yang aktif.
        </li>
      </ol>

      <h2>Kenapa Memilih Website Kami?</h2>
      <ul>
        <li>
          <strong>Kecepatan dan Akurasi:</strong> Kami memahami nilai waktu Anda. Oleh karena itu, kami berkomitmen untuk menyajikan berita dengan cepat tanpa mengorbankan akurasi.
        </li>
        <li>
          <strong>Berita yang Diversifikasi:</strong> Tak hanya terfokus pada satu topik, kami menawarkan berita dari berbagai bidang agar Anda bisa mendapatkan wawasan menyeluruh tentang dunia.
        </li>
        <li>
          <strong>Keterbukaan dan Keterlibatan:</strong> Kami menghargai suara pembaca. Melalui kolom komentar dan partisipasi dalam polling, kami ingin mendengar pendapat Anda.
        </li>
        <li>
          <strong>Kualitas Konten:</strong> Kami menempatkan kualitas konten di atas segalanya. Berita kami tidak hanya informatif, tapi juga dirancang untuk memikat dan memperkaya pengetahuan Anda.
        </li>
      </ul>

      <h2>Tim Redaksi</h2>
      <p>Dibalik layar, tim redaksi kami terdiri dari jurnalis berpengalaman, editor ahli, dan penulis yang berkomitmen untuk menyajikan berita yang memenuhi standar tinggi.</p>

      <p>Terima kasih telah memilih Website ini sebagai sumber berita Anda.</p>
      <p>Kami berharap pengalaman membaca Anda bersama kami menjadi bermanfaat dan memuaskan.</p>

      <button onClick={redirectToHome}>Kembali ke Beranda</button>
    </div>
  );
};

export default Abouts;
