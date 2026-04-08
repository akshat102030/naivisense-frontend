import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import landingImage from '../assets/landing_image.png'
import startVideo from '../assets/start_video.mp4'

const highlights = [
  {
    title: 'AI-Assisted Therapy Intelligence',
    text: 'Converts sessions, behavior logs, and feedback into clear next-step recommendations for families and therapists.',
  },
  {
    title: 'Unified Care Team Collaboration',
    text: 'Parents, therapists, and center heads work in one coordinated flow with role-specific dashboards and alerts.',
  },
  {
    title: 'Daily Home Plan + Diet Guidance',
    text: 'Provides structured day-wise routines, home activities, and nutrition guidance to support consistency outside clinic hours.',
  },
]

const pillars = [
  'Personalized child progress tracking',
  'Speech, behavior, and sensory-support workflows',
  'Anomaly alerts for early intervention',
  'Actionable reports for clinical decisions',
]

export function LandingPage() {
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const handleVideoEnded = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      setIsVideoLoading(false)
    }, 800) // Duration of fade-out animation
  }

  // Backup timeout in case video doesn't load or play properly
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVideoLoading) {
        handleVideoEnded()
      }
    }, 6000) // 6 seconds backup

    return () => clearTimeout(timer)
  }, [isVideoLoading])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {isVideoLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isFadingOut ? 0 : 1,
            transition: 'opacity 0.8s ease-in-out',
            pointerEvents: isFadingOut ? 'none' : 'auto', // Allow clicks only after fade-out starts
          }}
          onClick={() => {
            if (!isFadingOut) handleVideoEnded() // Simple "click anywhere to skip"
          }}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={startVideo} type="video/mp4" />
          </video>
        </div>
      )}

      <header
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '22px 20px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="Naivisense logo" style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border)' }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>Naivisense</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link
            to="/login"
            style={{
              textDecoration: 'none',
              padding: '9px 14px',
              borderRadius: 10,
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontSize: 13,
              fontWeight: 700,
              background: 'var(--bg2)',
            }}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            style={{
              textDecoration: 'none',
              padding: '9px 14px',
              borderRadius: 10,
              border: 'none',
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              background: 'var(--accent)',
            }}
          >
            Get Started
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 1180, margin: '0 auto', padding: '8px 20px 32px' }}>
        <section
          style={{
            border: '1px solid var(--border)',
            borderRadius: 18,
            overflow: 'hidden',
            background: 'var(--bg2)',
            boxShadow: '0 14px 32px rgba(2, 16, 35, 0.08)',
          }}
        >
          <div
            style={{
              minHeight: 420,
              display: 'grid',
              alignItems: 'end',
              backgroundImage: `linear-gradient(180deg, rgba(3,17,39,0.08) 0%, rgba(3,17,39,0.58) 72%, rgba(3,17,39,0.84) 100%), url(${landingImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: 'clamp(18px, 3vw, 36px)',
            }}
          >
            <div style={{ maxWidth: 760 }}>
              <div style={{ color: '#dff1ff', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                Autism & Child Development Care Platform
              </div>
              <h1 style={{ margin: '10px 0 8px', color: '#fff', fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.08, fontWeight: 900 }}>
                Better therapy outcomes, together with Naivisense.
              </h1>
              <p style={{ margin: 0, color: '#e3edf8', fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: 1.55 }}>
                Naivisense helps parents, therapists, and care centers plan daily interventions, track progress, detect risk signals early,
                and deliver more personalized support for every child.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                <Link
                  to="/login"
                  style={{
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: 'none',
                    background: '#fff',
                    color: '#0b2341',
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  Start with Dashboard
                </Link>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.35)',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {highlights.map((item) => (
            <article key={item.title} style={{ border: '1px solid var(--border)', borderRadius: 14, background: 'var(--bg2)', padding: 14 }}>
              <h2 style={{ margin: 0, color: 'var(--text)', fontSize: 15, fontWeight: 800 }}>{item.title}</h2>
              <p style={{ margin: '8px 0 0', color: 'var(--text2)', fontSize: 12.5, lineHeight: 1.6 }}>{item.text}</p>
            </article>
          ))}
        </section>

        <section
          style={{
            marginTop: 14,
            border: '1px solid var(--border)',
            borderRadius: 14,
            background: 'var(--bg2)',
            padding: 16,
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 16,
          }}
        >
          <div>
            <h2 style={{ margin: 0, color: 'var(--text)', fontSize: 19, fontWeight: 900 }}>About Naivisense</h2>
            <p style={{ margin: '8px 0 0', color: 'var(--text2)', fontSize: 13, lineHeight: 1.7 }}>
              Naivisense is built to make child therapy programs measurable, collaborative, and practical at home and at the center.
              It combines clinical structure with AI support to help families and professionals make faster, data-informed care decisions.
            </p>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 12, background: 'var(--bg3)', padding: 12 }}>
            <div style={{ color: 'var(--text)', fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Core Capabilities</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text2)', fontSize: 12.5, lineHeight: 1.6 }}>
              {pillars.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

