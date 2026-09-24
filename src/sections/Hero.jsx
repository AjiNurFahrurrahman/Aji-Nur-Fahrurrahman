import avatar from '../assets/images/avatar.png'

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none', paddingTop: '36px' }}>
      <div className="hero-col left">
        <h1>
          Building AI<br />That Meets<br />The Real World
        </h1>
        <p>Mahasiswa Teknik Informatika di Universitas Paramadina, fokus di AI/ML, full-stack.</p>
        <div className="hero-btns">
          <a className="btn btn-solid" href="#footer-contact">
            Kontak
          </a>
          {/* Ganti href dengan path CV Anda, mis. "/cv-aji.pdf" (taruh file di folder public/) */}
          <a className="btn btn-line" href="#" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="centerpiece">
        <div className="glow" />
        <div className="badge">
          <img src={avatar} alt="Foto Aji Nur Fahrurrahman" />
        </div>
      </div>

      <div className="hero-col right">
        <h2>
          Open For<br />Research &amp;<br />Internship
        </h2>
        <p>
          Terbuka untuk kolaborasi proyek AI/ML, magang, atau riset bersama tim yang membangun
          sistem nyata.
        </p>
        <div className="hero-btns">
          <a className="btn btn-solid" href="mailto:ajinurfahrurrahman@gmail.com">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  )
}
