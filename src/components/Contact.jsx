import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, Phone, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's discuss your engagement"
          description="Tell us about your business and the service area you need, and we'll respond with a tailored proposal."
        />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <ContactRow icon={Mail} label="Email" value="contact@adnanmahar.com" />
            <ContactRow icon={Phone} label="Consultation" value="Book a 30-minute discovery call" />
            <ContactRow icon={MapPin} label="Delivery" value="Remote-first, serving clients worldwide" />

            <div className="card-glass rounded-2xl p-6 mt-6">
              <p className="text-xs uppercase tracking-widest text-gold-400/80 mb-3">
                Why Clients Choose This Practice
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Direct access to a CA-finalist-led senior review</li>
                <li>• IFRS-aligned methodology</li>
                <li>• Secure, cloud-based collaboration</li>
                <li>• Transparent, fixed-scope engagement plans</li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card-glass rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" value={form.name} onChange={update('name')} required />
              <Field label="Email Address" type="email" value={form.email} onChange={update('email')} required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold-400/80">
                Service Area
              </label>
              <select
                value={form.service}
                onChange={update('service')}
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 focus:border-gold-500 outline-none"
              >
                <option value="">Select a service area</option>
                <option>Accounting & Bookkeeping</option>
                <option>Legal & Registrations</option>
                <option>Tax Advisory</option>
                <option>Virtual CFO</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold-400/80">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update('message')}
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 focus:border-gold-500 outline-none resize-none"
                placeholder="Briefly describe your business and requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors disabled:opacity-70"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Request Received
                </>
              ) : (
                <>
                  <Send size={16} /> Send Inquiry
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: IconCmp, label, value }) {
  return (
    <div className="flex items-center gap-4 card-glass rounded-xl p-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
        <IconCmp size={18} />
      </span>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm text-slate-200">{value}</p>
      </div>
    </div>
  )
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-gold-400/80">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 focus:border-gold-500 outline-none"
      />
    </div>
  )
}
