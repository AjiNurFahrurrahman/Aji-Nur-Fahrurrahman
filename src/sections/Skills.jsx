import Reveal from '../components/Reveal'

// size: lg | md | sm → menentukan ukuran chip
const SKILL_GROUPS = [
  {
    label: 'AI / ML',
    items: [
      { name: 'TensorFlow', size: 'lg' },
      { name: 'Keras', size: 'md' },
      { name: 'FastAPI', size: 'lg' },
      { name: 'Hugging Face', size: 'sm' },
    ],
  },
  {
    label: 'Full-Stack Web',
    items: [
      { name: 'React', size: 'lg' },
      { name: 'Vite', size: 'md' },
      { name: 'Express.js', size: 'md' },
      { name: 'MongoDB', size: 'sm' },
    ],
  },
  {
    label: 'IoT / Embedded',
    items: [
      { name: 'ESP32', size: 'lg' },
      { name: 'ESP8266', size: 'sm' },
      { name: 'Wokwi', size: 'md' },
    ],
  },
]

export default function Skills() {
  return (
    <Reveal id="skills">
      <p className="section-eyebrow">Kapabilitas</p>
      <h2 className="section-title">Skill &amp; Tools</h2>
      <div className="tag-cloud">
        {SKILL_GROUPS.map((group) => (
          <div className="tag-group" key={group.label}>
            <span className="tag-label">{group.label}</span>
            <div className="tag-flow">
              {group.items.map((item) => (
                <span className={`tag-chip ${item.size}`} key={item.name}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
