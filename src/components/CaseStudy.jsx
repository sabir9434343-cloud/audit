import { motion } from 'framer-motion'
import { AlertTriangle, Compass, CheckCircle2, ShieldCheck } from 'lucide-react'
import { caseStudy } from '../data/services'
import SectionHeading from './SectionHeading'

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-28 px-6 bg-navy-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Success Story"
          title={caseStudy.client}
          description={`Industry: ${caseStudy.industry}`}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 card-glass rounded-3xl p-8 sm:p-10"
        >
          <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
            {caseStudy.summary}
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <InfoCard icon={AlertTriangle} title="Client Challenges" text={caseStudy.challenge} />
            <InfoCard icon={Compass} title="Our Approach" text={caseStudy.approach} />
            <InfoCard icon={CheckCircle2} title="Key Results" list={caseStudy.results} />
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-gold-400/80 mb-4 text-center">
              Services Delivered
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {caseStudy.services.map((s) => (
                <div key={s.area} className="rounded-xl border border-white/10 p-5 text-center">
                  <p className="font-serif font-semibold text-white">{s.area}</p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{s.deliverables}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-start gap-3 border-t border-white/10 pt-8">
            <ShieldCheck size={22} className="text-gold-500 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300 italic leading-relaxed">{caseStudy.conclusion}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ icon: IconCmp, title, text, list }) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-6 border border-white/5">
      <IconCmp size={20} className="text-gold-500 mb-3" />
      <p className="font-medium text-white text-sm mb-2">{title}</p>
      {text && <p className="text-xs text-slate-400 leading-relaxed">{text}</p>}
      {list && (
        <ul className="space-y-1.5">
          {list.map((item) => (
            <li key={item} className="text-xs text-slate-400 flex gap-1.5">
              <span className="text-gold-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
