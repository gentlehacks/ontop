"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaXmark } from "react-icons/fa6"

const Gentlemandev = ({ showDevModal, setShowDevModal }: { showDevModal: boolean; setShowDevModal: (show: boolean) => void }) => {
  return (
    <div onClick={() => setShowDevModal(!showDevModal)} className="fixed top-0 right-0 bottom-0 left-0 z-200 w-[100%] h-[100%] flex items-center bg-[rgba(0,0,0,0.7)] overflow-y-hidden transition-bg duration-200">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 w-full max-w-3xl overflow-hidden rounded-t-[2.5rem] border border-white/10 bg-slate-950/95 p-6 text-white shadow-[0_-20px_80px_rgba(56,189,248,0.16)] backdrop-blur-xl sm:p-10"
      >

        <FaXmark onClick={() => setShowDevModal  (!showDevModal)}
          className="absolute right-6 top-6 text-gray-100 transition hover:text-slate-500 cursor-pointer text-2xl flex items-center justify-center"
        />
        <div className="mx-auto mb-8 h-1.5 w-14 rounded-full bg-white/20" />
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="relative mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 p-[2px] shadow-lg shadow-cyan-500/20 sm:mx-0">
            <div className="flex h-full w-full items-center justify-center rounded-[1.35rem] bg-slate-950 text-5xl">
              👨‍💻
            </div>
            <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-emerald-400" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Available for work</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Building digital experiences</h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              I&apos;m a software developer crafting fast, thoughtful interfaces and scalable products with modern technology.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Node.js'].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <h1 className="text-lg font-bold text-slate-300">Visit My Portfolio:</h1>
              <Link href="https://gentlemandev.vercel.app" target="_blank" rel="noopener noreferrer" className="ml-4 cursor-pointer">
                <button className=" rounded-full bg-cyan-500/10 px-3 py-2 text-cyan-300 transition hover:bg-cyan-500/20">
                  gentlemandev.vercel.app
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Gentlemandev