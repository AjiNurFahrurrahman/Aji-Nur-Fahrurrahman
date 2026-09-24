// Kumpulan icon SVG (stroke-based). Warna stroke diatur lewat CSS
// (mis. `.proj-front svg { stroke: var(--text) }`), jadi tidak di-hardcode di sini.

function Svg({ strokeWidth = 1.6, plain = false, children, ...props }) {
  if (plain) {
    return (
      <svg viewBox="0 0 24 24" {...props}>
        {children}
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  )
}

export const BrainIcon = (p) => (
  <Svg {...p}>
    <path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-2 2.8V17a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-7.2A3 3 0 0 0 16 7V6a4 4 0 0 0-4-4Z" />
    <path d="M9 12h.01M15 12h.01M9 16h6" />
  </Svg>
)

export const TrashIcon = (p) => (
  <Svg {...p}>
    <path d="M3 6h18l-1.5 13.5A2 2 0 0 1 17.5 21h-11a2 2 0 0 1-2-1.5L3 6Z" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v5M14 11v5" />
  </Svg>
)

export const BoxIcon = (p) => (
  <Svg {...p}>
    <path d="M12 22V12M12 12 3 7l9-5 9 5-9 5Z" />
    <path d="M3 7v10l9 5 9-5V7" />
  </Svg>
)

export const PlusIcon = (p) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
)

export const ShieldCheckIcon = (p) => (
  <Svg {...p}>
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
)

export const HeadsetIcon = (p) => (
  <Svg {...p}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M19 13v4a2 2 0 0 1-2 2h-1" />
    <rect x="3" y="13" width="4" height="6" rx="1" />
    <rect x="17" y="13" width="4" height="6" rx="1" />
  </Svg>
)

export const FileTextIcon = (p) => (
  <Svg {...p}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
    <path d="M9 13h6M9 17h6" />
  </Svg>
)

export const UsersIcon = (p) => (
  <Svg {...p}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M2 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M14.5 15.2c2.6.3 4.5 2.4 4.5 5.1" />
  </Svg>
)

export const PhoneIcon = (p) => (
  <Svg {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
  </Svg>
)

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
)
