'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { HERO_QUESTIONS } from '@/lib/data'
import Script from 'next/script'

// Dot grid background — subtle on dark bg
const DotGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
    }}
  />
)

// Floating orbs
const Orbs = () => (
  <>
    <div
      className="orb orb--1"
      style={{
        position: 'absolute',
        width: '600px',
        height: '400px',
        background: 'rgba(99,102,241,0.06)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        top: '-200px',
        right: '-200px',
        animation: 'orb-float 8s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
    <div
      className="orb orb--2"
      style={{
        position: 'absolute',
        width: '400px',
        height: '600px',
        background: 'rgba(165,180,252,0.04)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        bottom: '-200px',
        left: '-100px',
        animation: 'orb-float 8s ease-in-out infinite',
        animationDelay: '-4s',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  </>
)

export function Hero() {
  const [chatIndex, setChatIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const answerDelay = setTimeout(() => setShowAnswer(true), 1800)
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
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14"
      style={{ background: 'var(--bg)', padding: '72px 32px 24px' }}
    >
      {/* Unicorn Studio Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        data-us-project="lFqI94GW0JcxJNk1NH4n"
        data-us-scale="1"
        data-us-dpi="1.5"
        data-us-fps="60"
        data-us-lazyload="true"
        data-us-production="true"
      />

      {/* Dot grid overlay */}
      <DotGrid />

      {/* Floating orbs */}
      <Orbs />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '380px',
          background:
            'linear-gradient(to top, var(--bg) 0%, rgba(10,10,10,0.85) 40%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
          style={{
            background: 'rgba(99,102,241,0.15)',
            borderColor: 'rgba(99,102,241,0.3)',
            color: 'var(--accent-hi)',
            animation: 'badge-glow 3s ease-in-out infinite',
          }}
        >
          <div className="glow-dot" style={{ width: 6, height: 6 }} />
          En version beta
        </motion.div>

        {/* Title — 2 lines, respecting char constraints */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight"
          style={{
            fontFamily: 'var(--font-bricolage), sans-serif',
            letterSpacing: '-0.04em',
            color: 'var(--text-1)',
          }}
        >
          Arrêtez de chercher.
          <br />
          <em
            style={{
              fontStyle: 'normal',
              fontWeight: 400,
              color: '#fff',
              textShadow: '0 0 80px rgba(99,102,241,0.9), 0 0 32px rgba(165,180,252,0.6)',
            }}
          >
            Vos emails répondent.
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-base max-w-md leading-relaxed"
          style={{
            color: 'rgba(250,250,250,0.6)',
            letterSpacing: '-0.01em',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
          }}
        >
          EmailMind cartographie vos conversations et révèle les opportunités,
          les contacts clés et les actions prioritaires — sans fouiller un seul thread.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          {/* Primary — frosted glass pill */}
          <button
            className="btn-hero-primary"
            style={{
              position: 'relative',
              padding: '15px 32px',
              minWidth: '200px',
              height: '52px',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 400,
              background: 'rgba(99,102,241,0.18)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderRadius: '100px',
              color: '#fff',
              border: '1px solid rgba(165,180,252,0.45)',
              boxShadow:
                '0 0 32px rgba(99,102,241,0.35), 0 0 80px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.18)',
              letterSpacing: '-0.02em',
              animation: 'hero-btn-breathe 4s ease-in-out infinite',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflow: 'hidden',
              isolation: 'isolate',
            }}
          >
            {/* Spinning conic border */}
            <span
              style={{
                content: '',
                position: 'absolute',
                inset: '-1px',
                borderRadius: 'inherit',
                background:
                  'conic-gradient(from var(--angle), transparent 0%, rgba(165,180,252,0.9) 18%, rgba(99,102,241,0.6) 35%, transparent 52%)',
                animation: 'spin-angle 3.5s linear infinite',
                zIndex: -1,
              }}
            />
            {/* Shimmer sweep */}
            <span
              style={{
                content: '',
                position: 'absolute',
                top: 0,
                left: '-80%',
                width: '50%',
                height: '100%',
                background:
                  'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)',
                transform: 'skewX(-15deg)',
                animation: 'btn-shimmer 4.5s ease-in-out infinite 0.8s',
                pointerEvents: 'none',
              }}
            />
            Commencer gratuitement
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>

          {/* Ghost pill */}
          <button
            className="h-[52px] px-8 flex items-center justify-center rounded-full border text-sm font-medium transition-all duration-200"
            style={{
              color: 'rgba(250,250,250,0.7)',
              borderColor: 'rgba(255,255,255,0.16)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              letterSpacing: '-0.02em',
              minWidth: '200px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.color = 'rgba(250,250,250,0.95)'
              el.style.borderColor = 'rgba(255,255,255,0.28)'
              el.style.background = 'rgba(255,255,255,0.07)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.color = 'rgba(250,250,250,0.7)'
              el.style.borderColor = 'rgba(255,255,255,0.16)'
              el.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            <Play size={14} strokeWidth={1.5} className="mr-2" />
            Voir une démo
          </button>
        </motion.div>
      </div>

      {/* Chat interface mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[680px] mx-auto px-6 pb-20 mt-8"
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#111',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Chat header */}
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: '#1a1a1a',
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            </div>
            <span
              className="text-xs"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
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
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent)' }}
                  >
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
                    <div
                      className="inline-block rounded-xl rounded-tl-sm px-4 py-3"
                      style={{
                        background: '#111',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <p
                        className="text-sm font-medium text-left"
                        style={{ color: 'var(--text-1)' }}
                      >
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
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent)' }}
                  >
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
                    <div
                      className="inline-block rounded-xl rounded-tl-sm px-4 py-3"
                      style={{
                        background: '#1a1a1a',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <p
                        className="text-sm text-left leading-relaxed"
                        style={{ color: 'var(--text-1)' }}
                      >
                        {chat.answer}
                      </p>
                    </div>
                    <p
                      className="text-xs mt-2 text-left"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      il y a quelques secondes · EmailMind
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Typing indicator */}
            {!showAnswer && (
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent)' }}
                >
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
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: 'var(--accent)' }}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Stats strip */}
      <div
        className="reveal"
        data-delay="4"
        style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          gap: '1px',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {[
          { value: '12K+', label: 'Emails / jour' },
          { value: '3×', label: 'Plus de réponses' },
          { value: '98%', label: 'Précision IA' },
          { value: '10K+', label: 'Équipes actives' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="flex-1 px-5 py-3 flex items-center gap-3"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(32px)',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-bricolage), sans-serif',
                fontSize: '20px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                background:
                  'linear-gradient(135deg, #E8E3FF, var(--accent-hi))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono), monospace',
                whiteSpace: 'nowrap',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Unicorn Studio loader */}
      <Script id="unicorn-loader" strategy="afterInteractive">
        {`
          !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
        `}
      </Script>
    </section>
  )
}
