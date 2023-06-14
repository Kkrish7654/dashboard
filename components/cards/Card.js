import React from 'react'

const Card = ({color, text, number}) => {
  return (
    <div style={{background:`${color}`}} className={`relative rounded-lg py-6 px-10 text-white text-center w-48 overflow-hidden`}>
      <h3 className="text-sm">{text}</h3>
      <p className="text-xl font-bold">{number}</p>
      <div className='absolute w-12 h-16 rotate-45 left-[-10px] bottom-[-20px] rounded-md shadow-xl shadow-black' style={{background:'#D8EFFE'}}></div>
      <img className='z-10 absolute  left-2 bottom-2 rounded-2xl' src='./user.png' alt='user'/>
    </div>
  )
}

export default Card;