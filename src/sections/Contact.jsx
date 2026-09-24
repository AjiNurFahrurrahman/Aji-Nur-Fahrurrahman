import { MailIcon, PhoneIcon } from '../assets/icons'

const EMAIL = 'ajinurfahrurrahman@gmail.com'
const PHONE_HREF = 'tel:0895413739646'
const PHONE_LABEL = '0895 4137 39646'

// Bar kontak di footer — target anchor "#footer-contact" dari Navbar & Hero
export default function Contact() {
  return (
    <div className="footer-contact-bar" id="footer-contact">
      <div className="footer-contact-info">
        <a href={PHONE_HREF}>
          <PhoneIcon strokeWidth={1.8} />
          {PHONE_LABEL}
        </a>
        <a href={`mailto:${EMAIL}`}>
          <MailIcon strokeWidth={1.8} />
          {EMAIL}
        </a>
      </div>
      <div className="footer-social">
        <a href={`mailto:${EMAIL}`} aria-label="Email">
          <MailIcon plain />
        </a>
        <a href={PHONE_HREF} aria-label="Telepon">
          <PhoneIcon plain />
        </a>
      </div>
    </div>
  )
}
