import Reveal from '../components/Reveal'
import { ShieldCheckIcon } from '../assets/icons'

// Data contoh dari desain awal — ganti dengan sertifikasi asli Anda.
const CERTIFICATIONS = [
  {
    title: 'Contoh: Coding Camp 2026 powered by DBS',
    description: 'Machine Learning Engineer Track — Capstone: DiagnoKu',
  },
  {
    title: 'Contoh: TensorFlow Developer Certificate',
    description: 'Sertifikasi resmi pengembangan model deep learning',
  },
  {
    title: 'Contoh: Juara/Finalis Hackathon',
    description: 'Nama event & kategori — tahun',
  },
]

export default function Certifications() {
  return (
    <Reveal id="certifications">
      <p className="section-eyebrow">Achievements</p>
      <h2 className="section-title">Sertifikasi &amp; Pencapaian</h2>
      <div className="cert-grid">
        {CERTIFICATIONS.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <ShieldCheckIcon />
            <h4>{cert.title}</h4>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
