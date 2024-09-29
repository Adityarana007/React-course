import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('contact setinterval starts')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
        <h1>Contact</h1>
        <h2>you can connect with us.</h2>
    </div>
  )
}

export default Contact