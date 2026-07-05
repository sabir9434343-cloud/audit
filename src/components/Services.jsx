import { useState } from 'react'
import { motion } from 'framer-motion'
import { categories } from '../data/services'
import Icon from './Icon'
import ServiceCard from './ServiceCard'
import SectionHeading from './SectionHeading'

export default function Services() {
  const [active, setActive] = useState(categories[0].id)
  const current = categories.find((c) => c.id === active)

  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Scope of Services"
          title="A full-service practice, organized around your needs"
          description="28 service lines across four practice areas: each engagement follows the same disciplined standard of assessment, customized planning, delivery, and reporting."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === cat.id
                  ? 'bg-gold-500 text-navy-950'
                  : 'card-glass text-slate-300 hover:text-gold-400'
              }`}
            >
              <Icon name={cat.icon} size={16} />
              {cat.label}
              <span
                className={`ml-1 rounded-full px-1.5 text-xs ${
                  active === cat.id ? 'bg-navy-950/20' : 'bg-white/5'
                }`}
              >
                {cat.services.length}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mt-8 text-center text-slate-400 max-w-2xl mx-auto">
            {current.tagline}
          </p>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {current.services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
