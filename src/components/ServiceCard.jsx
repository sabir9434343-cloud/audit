import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Icon from './Icon'
import { engagementStandard } from '../data/services'

export default function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="card-glass rounded-2xl overflow-hidden hover:border-gold-500/40 transition-colors"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-6 flex items-start gap-4"
        aria-expanded={open}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
          <Icon name={service.icon} size={20} />
        </span>
        <span className="flex-1">
          <span className="flex items-center justify-between gap-3">
            <span className="font-serif text-lg font-semibold text-white">
              {service.title}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-gold-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </span>
          <span className="mt-1.5 block text-sm text-slate-400 leading-relaxed">
            {service.blurb}
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 grid sm:grid-cols-3 gap-5 border-t border-white/5 mt-1">
              <Column title="Scope" items={engagementStandard.scope.slice(0, 4)} />
              <Column title="Deliverables" items={engagementStandard.deliverables} />
              <Column title="Client Benefits" items={engagementStandard.benefits.slice(0, 4)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Column({ title, items }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-gold-400/80 mb-2 pt-4">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-xs text-slate-400 leading-relaxed flex gap-1.5">
            <span className="text-gold-500 mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
