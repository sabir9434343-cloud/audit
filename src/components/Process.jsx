import { motion } from 'framer-motion'
import { ClipboardList, Route, PlayCircle, LineChart, FileCheck2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  { icon: ClipboardList, title: 'Assess', text: 'Understand requirements, objectives and risk profile.' },
  { icon: Route, title: 'Plan', text: 'Customized service plan and implementation roadmap.' },
  { icon: PlayCircle, title: 'Deliver', text: 'Execute engagement with cloud collaboration and secure documents.' },
  { icon: LineChart, title: 'Monitor', text: 'Ongoing reporting and performance evaluation.' },
  { icon: FileCheck2, title: 'Report', text: 'Professional reports, financial analyses, and action plans.' },
]

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Engagement Process"
          title="One disciplined lifecycle, every engagement"
          description="Whether it's a single company registration or an ongoing virtual CFO retainer, every engagement moves through the same five stages."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 relative z-10">
                  <step.icon size={24} />
                </div>
                <p className="mt-4 font-serif font-semibold text-white">
                  {String(i + 1).padStart(2, '0')}: {step.title}
                </p>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
