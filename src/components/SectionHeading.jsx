import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto text-center"
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-3">{eyebrow}</p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl font-bold ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
