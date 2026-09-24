import Reveal from '../components/Reveal'

export default function About() {
  return (
    <Reveal id="about">
      <p className="section-eyebrow">Profil</p>
      <h2 className="section-title">Tentang Saya</h2>
      <div className="about-grid">
        <div>
          <p>
            Fokus utama saya ada di titik temu AI/ML, pengembangan web full-stack, dan sistem
            embedded berbasis ESP32. Saya suka membangun sesuatu dari nol — mulai dari melatih
            model deep learning kustom sampai men-deploy-nya ke layanan inferensi yang benar-benar
            dipakai.
          </p>
          <p>
            Sebelum kuliah Informatika, saya sempat bekerja sebagai operator produksi dan packing
            di industri manufaktur — pengalaman yang mengajarkan disiplin proses dan ketelitian,
            yang sekarang saya bawa ke cara saya membangun sistem.
          </p>
        </div>
        <div className="about-quote">
          <span className="mark">"</span>
          <p>Your organization should be the architecture of the machinery of building the product.</p>
          <cite>— Jensen Huang, CEO of NVIDIA</cite>
        </div>
      </div>
    </Reveal>
  )
}
