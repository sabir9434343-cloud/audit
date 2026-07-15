export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-white font-semibold">
          Adnan Mahar <span className="text-gold-500">& Co.</span>
          <span className="ml-2 text-xs font-sans font-normal text-slate-500">
            CA Finalist (ICAP)
          </span>
        </p>
        <p className="text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Adnan Mahar and Co., Accounting, Tax & Legal Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
