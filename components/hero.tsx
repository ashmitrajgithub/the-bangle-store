"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const headlineWords = ["Bridal", "bangles", "that", "carry", "your", "story"]

const wordContainer = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
      ease: "easeOut",
      duration: 0.45,
    },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 26, rotateX: 45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f3ee] text-neutral-900"
      data-aos="fade-up"
      data-aos-offset="40"
    >
      {/* animated background glows */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-radial from-[#fff9f0] via-[#f7f3ee] to-[#efe5dc]" />
        <motion.div
          className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-16 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/25 blur-3xl"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-4 py-16 sm:px-6 md:flex-row md:items-center md:py-24 lg:px-8">
        {/* LEFT: text, with AOS + Motion */}
        <motion.div
          className="max-w-xl space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          data-aos="fade-right"
          data-aos-delay="80"
        >
          {/* eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-700"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              Sitamarhi · Mithila
            </motion.span>
            <motion.span
              className="h-1 w-1 rounded-full bg-emerald-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3, type: "spring", stiffness: 260, damping: 16 }}
            />
            <motion.span
              initial={{ x: 8, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              Handcrafted Lac Bangles
            </motion.span>
          </motion.div>

          {/* animated headline */}
          <motion.h1
            className="text-balance text-4xl font-serif font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
            initial="hidden"
            animate="visible"
            variants={wordContainer}
          >
            <motion.span variants={wordVariant} className="block mb-1 text-neutral-700">
              Timeless
            </motion.span>
            <span className="flex flex-wrap gap-x-2 bg-gradient-to-r from-amber-700 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              {headlineWords.map((word) => (
                <motion.span key={word} variants={wordVariant} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="max-w-lg text-base leading-relaxed text-neutral-700 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Light, comfortable lac bangles handcrafted in Sitamarhi, finished with warm gold tones and soft pastels
            that feel gentle for day functions and glow in every wedding photograph.
          </motion.p>

          {/* highlights with AOS */}
          <div
            className="grid gap-4 text-sm text-neutral-900 sm:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {[
              {
                title: "Custom bridal sets",
                desc: "Color‑matched to your lehenga & theme.",
              },
              {
                title: "Heritage craft",
                desc: "Traditional lac work from Sitamarhi.",
              },
              {
                title: "Insured shipping",
                desc: "Pan‑India, carefully packed and tracked.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  {item.title}
                </p>
                <p className="text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-9 py-3 text-sm font-semibold text-amber-50 shadow-[0_22px_65px_rgba(15,15,15,0.35)] transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/70"
              >
                Explore bridal collections
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-9 py-3 text-sm font-medium text-neutral-900 shadow-[0_16px_45px_rgba(15,15,15,0.18)] transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300/90"
              >
                Meet the artisans
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT: product card with float + AOS zoom */}
        <motion.div
          className="relative mx-auto w-full max-w-md md:max-w-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          data-aos="zoom-in-up"
          data-aos-delay="120"
        >
          {/* floating review chip */}
          <motion.div
            className="pointer-events-none absolute -top-6 -left-4 z-20 hidden w-48 rounded-2xl border border-neutral-200/80 bg-white/90 px-4 py-3 text-xs text-neutral-900 shadow-[0_22px_70px_rgba(15,15,15,0.2)] backdrop-blur-lg sm:block"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.75 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Bride favourite
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-neutral-800">
              “So light and soft, I wore them all day without feeling heavy.”
            </p>
          </motion.div>

          {/* floating card */}
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-gradient-to-b from-white via-white to-[#f3ebe3] shadow-[0_28px_90px_rgba(15,15,15,0.25)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative h-80 w-full sm:h-96">
              <img
                src="/gold-bridal-bangles-set.jpg"
                alt="Sitamarhi handcrafted bridal lac bangles arranged on soft fabric"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/30" />
            </div>

            <div className="flex items-center justify-between border-t border-neutral-200 px-5 pb-4 pt-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Sitamarhi Signature
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Mithila Bridal Lac Bangle Set · 12 pcs
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.23em] text-neutral-500">
                  Starting at
                </p>
                <p className="text-sm font-semibold text-neutral-900">₹ 3,499</p>
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-x-10 -bottom-7 h-8 rounded-full bg-neutral-900/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
