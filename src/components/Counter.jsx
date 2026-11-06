import { useEffect, useRef, useState } from 'react'

// Numero que cuenta de 0 al valor cuando entra en pantalla
export default function Counter({ n, pre = '', suf = '' }) {
  const ref = useRef(null)
  const to = parseFloat(n)
  const dec = String(n).includes('.') ? 1 : 0
  const [v, setV] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el || Number.isNaN(to)) return
    let raf
    const run = () => {
      const t0 = performance.now()
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1800)
        setV(to * (1 - Math.pow(1 - k, 3)))
        if (k < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    if (typeof IntersectionObserver === 'undefined') { raf = requestAnimationFrame(() => setV(to)); return () => cancelAnimationFrame(raf) }
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { io.disconnect(); run() } }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  const txt = v.toLocaleString('es-AR', { minimumFractionDigits: dec, maximumFractionDigits: dec })
  return <span ref={ref}>{pre}{txt}{suf}</span>
}
