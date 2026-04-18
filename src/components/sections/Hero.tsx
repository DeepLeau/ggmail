'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { HERO_QUESTIONS } from '@/lib/data'

// Dot grid background pattern
const DotGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    }}
  />
)

export function Hero() {
  const [chatIndex, setChatIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const answerDelay = setTimeout(() => {
      setShowAnswer(true)
    }, 1800)

    const nextDelay = setTimeout(() => {
      setShowAnswer(false)
      setIsVisible(false)
      setTimeout(() => {
        setChatIndex((i) => (i + 1) % HERO_QUESTIONS.length)
        setIsVisible(true)
      }, 400)
    }, 5000)

    return () => {
      clearTimeout(answerDelay)
      clearTimeout(nextDelay)
    }
  }, [chatIndex])

  const chat = HERO_QUESTIONS[chatIndex]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white overflow-hidden pt-14">
      <DotGrid />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--violet-dim)] bg-[var(--violet-dim)] text-[var(--violet)] text-xs font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--violet)] animate-pulse flex-shrink-0" />
          En version beta
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-extrabold text-[var(--text-1)] tracking-tight leading-tight"
        >
          Une question.
          <br />
          Votre email répond.
          <br />
          <span className="text-[var(--accent)]">Réponse en 10 secondes.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-base text-[var(--text-2)] max-w-md leading-relaxed"
        >
          EmailMind cartographie vos conversations et révèle les opportunités,
          les contacts clés et les actions prioritaires — sans fouiller un seul
          thread.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <a
            href="#"
            className="h-10 px-6 flex items-center justify-center rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hi)] text-white text-sm font-medium transition-colors duration-150 shadow-md hover:shadow-lg"
          >
            Connecter ma boîte mail
            <ArrowRight size={15} className="ml-2" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="h-10 px-6 flex items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-glow)] text-sm font-medium transition-colors duration-150"
          >
            <Play size={14} className="mr-2" strokeWidth={1.5} />
            Voir une démo
          </a>
        </motion.div>
      </div>

      {/* Chat interface */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[680px] mx-auto px-6 pb-20"
      >
        <div className="rounded-2xl border border-[var(--border)] bg-white shadow-lg shadow-black/5 overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-1)]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--red)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--green)]" />
            </div>
            <span className="text-xs font-mono text-[var(--text-3)]">
              EmailMind · conversation en cours
            </span>
            <div className="ml-auto w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          </div>

          {/* Chat body */}
          <div className="p-6 space-y-6 min-h-[200px]">
            {/* Question bubble */}
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={`q-${chatIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block rounded-xl rounded-tl-sm bg-[var(--surface-1)] border border-[var(--border)] px-4 py-3">
                      <p className="text-sm font-medium text-[var(--text-1)] text-left">
                        {chat.question}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Answer bubble */}
            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  key={`a-${chatIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--violet)] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block rounded-xl rounded-tl-sm bg-[var(--violet-dim)] border border-[rgba(124,58,237,0.15)] px-4 py-3">
                      <p className="text-sm text-[var(--text-1)] text-left leading-relaxed">
                        {chat.answer}
                      </p>
                    </div>
                    <p className="text-xs text-[var(--text-3)] mt-2 text-left">
                      il y a quelques secondes · EmailMind
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Typing indicator */}
            {!showAnswer && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--violet)] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-[var(--violet)]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.span
                    className="w-2 h-2 rounded-full bg-[var(--violet)]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.2,
                    }}
                  />
                  <motion.span
                    className="w-2 h-2 rounded-full bg-[var(--violet)]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.4,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
