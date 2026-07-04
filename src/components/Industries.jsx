import { motion } from 'framer-motion'
import {
  Rocket,
  Store,
  ShoppingCart,
  Factory,
  HeartHandshake,
  HeartPulse,
  Briefcase,
  Globe,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const industries = [
  { icon: Rocket, label: 'Startups' },
  { icon: Store, label: 'SMEs' },
  { icon: ShoppingCart, label: 'E-commerce' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: HeartHandshake, label: 'Nonprofits & NGOs' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Briefcase, label: 'Professional Services' },
  { icon: Globe, label: 'International Business' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-28 px-6 bg-navy-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries Served"
          description="Scalable support for organizations of every size, from first-time founders to established international operations."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="card-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-gold-500/40 transition-colors"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                <ind.icon size={22} />
              </span>
              <p className="text-sm font-medium text-slate-200">{ind.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
