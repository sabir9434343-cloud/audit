import { motion } from 'framer-motion'
import { Scale, Lock, Sparkles, HeartHandshake } from 'lucide-react'
import SectionHeading from './SectionHeading'

const values = [
  { icon: Scale, title: 'Ethics First', text: 'Independence and objectivity in every opinion and recommendation.' },
  { icon: Lock, title: 'Confidentiality', text: 'Secure, cloud-based document handling for sensitive financial data.' },
  { icon: Sparkles, title: 'Quality Standards', text: 'IFRS-aligned methodology on every engagement.' },
  { icon: HeartHandshake, title: 'Client Philosophy', text: 'Responsive, partner-level attention regardless of engagement size.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-3">Firm Overview</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Big-Four discipline, delivered as an independent practice
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            Led by Adnan Mahar, a CA Finalist with ICAP, Adnan Mahar and Co.
            brings institutional-grade accounting, legal, and tax methodology
            to clients who need direct, senior-level attention, without the
            overhead of a large firm.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Every engagement runs on secure cloud collaboration, so clients
            anywhere in the world get the same standard of governance,
            reporting and responsiveness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-glass rounded-2xl p-6"
            >
              <v.icon size={20} className="text-gold-500 mb-3" />
              <p className="font-serif font-semibold text-white text-sm">{v.title}</p>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
