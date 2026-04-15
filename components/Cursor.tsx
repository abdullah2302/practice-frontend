'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const[clientX, clientY] = [e.clientX, e.clientY]
      gsap.to('.cursor', {
        x: clientX - 20/2,
        y: clientY - 20/2,
        duration: 0.1,
        ease: 'power4.out',
        
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div className="cursor absolute top-0 left-0 h-[20px] w-[20px] rounded-full bg-[#2f86ff] z-10 " />
}

export default Cursor
