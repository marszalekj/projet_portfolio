
import React, { useEffect } from 'react'

const TextEffect1 = () => {

  useEffect(() => {
    const style1 = document.createElement("style")
    const style2 = document.createElement("style")
    const after = document.getElementById("after-te1")
    const before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        const percent = (i / n) * 100
        const random1 = `${Math.random()*150}px`
        const random2 = `${Math.random()*150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      
      return steps
    }
    const keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    const keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])

  return (
    <div >
      <h1 className="relative inline-block text-6xl font-bold uppercase text-black">
        <span id="before-te1" className="absolute left-0.5 top-0 h-full w-full bg-transparent" style={{ textShadow: "-2px 0 #49FC00", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">Text Effect 1</span> {/* glitch::before */}
        From law to code
        <span id="after-te1" className="absolute -left-0.5 top-0 h-full w-full bg-transparent" style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">Text Effect 1</span> {/* glitch::after */}
      </h1>
    </div>
  )
}

export default TextEffect1
