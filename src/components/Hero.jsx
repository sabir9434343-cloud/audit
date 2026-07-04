import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Globe2, Award } from 'lucide-react'
import CountUp from './CountUp'

const badges = [
  { icon: ShieldCheck, label: 'IFRS & ISA Aligned' },
  { icon: Globe2, label: 'Global Remote Delivery' },
  { icon: Award, label: 'ICAP Finalist Led' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 px-6 min-h-screen flex items-center"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-navy-500/30 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#d4af5f 1px, transparent 1px), linear-gradient(90deg, #d4af5f 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-400 mb-6"
          >
            Independent Professional Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white"
          >
            Worldwide Accounting,{' '}
            <span className="text-gradient-gold">Auditing &amp; Tax</span> Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            Adnan Mahar and Co., led by a CA Finalist (ICAP), delivers audit,
            accounting and tax advisory for startups, SMEs, corporations,
            nonprofits and international businesses, with the rigor of a
            Big-Four training and the responsiveness of an independent
            practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-gold-500/60 hover:text-gold-400 transition-colors"
            >
              View Case Study
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon size={16} className="text-gold-500" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="card-glass rounded-3xl p-8 shadow-2xl shadow-black/40">
            <p className="text-xs uppercase tracking-widest text-gold-400/80 mb-6">
              Engagement Snapshot
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Stat value={28} suffix="" label="Service Lines" />
              <Stat value={4} suffix="" label="Practice Areas" />
              <Stat value={100} suffix="%" label="IFRS / ISA Aligned" />
              <Stat value={24} suffix="/7" label="Cloud Access" />
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "Engagement delivered in line with IFRS, ISAs and regulatory
                requirements, ensuring high-quality outcomes and client
                satisfaction."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ value, suffix, label }) {
  return (
    <div>
      <p className="font-serif text-3xl font-bold text-white">
        <CountUp end={value} />
        {suffix}
      </p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  )
}
