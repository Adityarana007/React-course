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
        {/* <h2>you can connect with us.</h2> */}
        <form className='flex flex-col items-center mb-10'>
        <h1 className='font-bold text-3xl p-4 m-4'>Contact</h1>
          <input type='text' className='border border-black p-2 mb-4 rounded-md' placeholder='Name'/>
          <input type='text' className='border border-black p-2 mb-4 rounded-md' placeholder='message'/>
          <button className='bg-orange-400 p-2 rounded-md w-24'>Submit</button>
        </form>
    </div>
  )
}

export default Contact