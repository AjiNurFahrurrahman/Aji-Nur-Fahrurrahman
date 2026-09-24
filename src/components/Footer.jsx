import { FileTextIcon, HeadsetIcon, ShieldCheckIcon, UsersIcon } from '../assets/icons'

const FEATURES = [
  { icon: HeadsetIcon, label: 'Respon Cepat' },
  { icon: FileTextIcon, label: 'Dokumentasi Rapi' },
  { icon: UsersIcon, label: 'Kolaborasi Terbuka' },
  { icon: ShieldCheckIcon, label: 'Kode Teruji' },
]

// `children` diisi bar kontak (lihat sections/Contact.jsx)
export default function Footer({ children }) {
  return (
    <footer className="site-footer">
      <div className="footer-features">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div className="footer-feature" key={label}>
            <Icon />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {children}

      <div className="footer-logo-row">
        <div className="logo">
          Aji<span>.</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Aji Nur Fahrurrahman</span>
        <span>2026</span>
        <span>Hak Cipta Dilindungi</span>
      </div>
    </footer>
  )
}
