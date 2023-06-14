import React, { Fragment } from 'react'

const SalesCard = ({price, text, gold, platinum, titanium, image}) => {
  return (
    <Fragment>
        <div className='relative bg-white shadow-md rounded-md p-4 px-6 flex flex-col items-center justify-center mt-3 overflow-hidden'>
            <div className='w-32 h-44 absolute bottom-[-70px] left-[-40px] rotate-45 overflow-auto rounded-md' style={{background:'#D8EFFE'}}></div>
            <img className='absolute left-4 bottom-2' src={image} alt='img'/>
            <div className='flex flex-col gap-8 w-full'>
            <div className='flex relative'>
                <img src="./rupee.png" alt="ruppe"/>
                <h2 className='text-3xl'>{price}</h2>
                <p className='absolute top-8 left-12 z-10' style={{fontWeight:'200', color:'#878787'}}>{text}</p>
            </div>
            <div className='flex flex-col gap-2 items-end'>
                <div className='flex justify-between gap-4'>
                    <p style={{fontWeight:'200',color:'#878787'}}>Gold</p>
                    <p className='px-2 w-12 text-center rounded-md' style={{background:'#E7FB00'}}>{gold}</p>
                </div>
                <div className='flex justify-between gap-4'>
                    <p style={{fontWeight:'200', color:'#878787'}}>Platinum</p>
                    <p className='px-2 w-12 text-center rounded-md' style={{background:'#EEEEEE'}}>{platinum}</p>
                </div>
                <div className='flex justify-between gap-4'>
                    <p style={{fontWeight:'200', color:'#878787'}}>Titanium</p>
                    <p className='px-2 w-12 text-center rounded-md' style={{background:'#0099FB'}}>{titanium}</p>
                </div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SalesCard