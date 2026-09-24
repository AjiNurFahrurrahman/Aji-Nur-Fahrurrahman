import { useEffect, useRef, useState } from 'react'

// Pembungkus elemen yang fade-in + slide-up saat masuk viewport.
// Class `.reveal` / `.in-view` didefinisikan di App.css.
export default function Reveal({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const classes = ['reveal', inView && 'in-view', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
