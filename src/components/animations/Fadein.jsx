import React, { useEffect, useRef, useState } from 'react'

const Fadein = ({children, delay=0, duration=500, threshold=0.1}) => {
  const [isvisbile, setIsvisible] = useState(false)
  const elementRef = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entery])=>{
        // trigerr animation when elemt enter viewport
        if(entery.isIntersecting && !isvisbile){
          setIsvisible(true)
        }
      },{
        threshold : threshold,
        rootMargin : '0px 0px -50px 0px' //triger slightly before elemnt
      }
    )
    if(elementRef.current){
      observer.observe(elementRef.current)
    }
    return()=>{
      if(elementRef.current){
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, isvisbile])
  return <div ref={elementRef}
  className={isvisbile ? 'animate-Fadein' : 'opacity-0'}
  style={{
    animationDelay : isvisbile ? `${delay}ms` : '0ms', animationDuration : `${duration}ms`,
    animationFillMode : 'both'
  }}
  >
    {children}
  </div>
}

export default Fadein
