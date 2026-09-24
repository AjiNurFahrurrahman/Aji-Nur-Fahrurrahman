import { useState } from 'react'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { BoxIcon, BrainIcon, PlusIcon, TrashIcon } from '../assets/icons'

// Ganti href "#" dengan link Demo / GitHub yang sebenarnya.
const PROJECTS = [
  {
    name: 'DiagnoKu',
    tag: 'CAPSTONE — CC26-PSU200',
    description:
      'App pre-screening penyakit berbasis AI. Model MLP kustom (TensorFlow), Focal Loss, custom training loop, inferensi via FastAPI.',
    stack: ['TensorFlow', 'FastAPI', 'React', 'Vercel'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    icon: BrainIcon,
  },
  {
    name: 'Sortir Sampah',
    tag: 'COMPUTER VISION',
    description:
      'Classifier sampah berbasis EfficientNetB0, 12 kategori. Deploy di Hugging Face Spaces dengan proxy khusus untuk CORS.',
    stack: ['EfficientNetB0', 'HF Spaces', 'CV'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    icon: TrashIcon,
  },
  {
    name: 'Smart Greenhouse',
    tag: 'SKRIPSI — IN PROGRESS',
    description:
      'Rumah kaca pintar dengan ESP32/ESP8266, sensor DHT11, kontrol relay, disimulasikan di Wokwi. Lanjut ke inferensi TFLite on-device.',
    stack: ['ESP32', 'DHT11', 'TFLite'],
    links: [{ label: 'GitHub', href: '#' }],
    icon: BoxIcon,
  },
  {
    name: 'Proyek Berikutnya',
    tag: 'SEGERA',
    description: 'Slot untuk proyek baru — akan diisi seiring progres berikutnya.',
    icon: PlusIcon,
  },
]

export default function Projects() {
  // Hanya satu kartu yang boleh terbuka (ter-flip) dalam satu waktu
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <Reveal id="projects">
      <p className="section-eyebrow">Portfolio</p>
      <h2 className="section-title">Proyek Pilihan</h2>

      <div className="proj-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            flipped={activeIndex === i}
            onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
          />
        ))}
      </div>
    </Reveal>
  )
}
