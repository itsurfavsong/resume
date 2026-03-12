import { useState, useEffect } from 'react'
import './Home.css'
import { MousePosition } from '../types'

export default function Home() {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="home" className="hero">
      {/* Animated cursor glow */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Background effects */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-badge">Full-stack Web Developer</div>
        
        <h1 className="hero-title">
          <span className="line">반가워요!</span>
          <span className="line gradient-text">송보미입니다</span>
        </h1>

        <p className="hero-description">
          사용자가 편하게 사용할 수 있는 <br />
          웹 서비스를 만드는 풀스택 웹 개발자입니다.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={handleScrollToProjects}>
            프로젝트 보기
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={handleScrollToContact}>
            연락하기
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </div>
  )
}