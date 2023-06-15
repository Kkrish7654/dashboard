import Link from 'next/link'
import React, { Fragment } from 'react'

const RenewalCard = () => {
  return (
    <Fragment>
        <div className='bg-white shadow-md rounded-md flex flex-col items-center mt-3'>
            <h2 className='font-semibold mb-2 mt-2'>Upcoming Renewal Client</h2>
            <div className='w-[70%]'>
                <ul className='w-full'>
                    <li className='border-2 flex items-center justify-between px-2 py-1 text-xs'>
                        <div>
                            <p>Nitin Singhal</p>
                            <span className='px-2 rounded-md text-xs' style={{background:'#E7FB00'}}>Gold</span>
                        </div>
                        <p>R.80,762</p>
                    </li>
                    <li className='border-2 flex items-center justify-between px-2 py-1 text-xs'>
                    <div>
                            <p>Balraj</p>
                            <span className='px-2 rounded-md text-xs' style={{background:'#EEEEEE'}}>Platinum</span>
                        </div>
                        <p>R.80,762</p>
                    </li>
                    <li className='border-2 flex items-center justify-between px-2 py-1 text-xs'>
                    <div>
                            <p>Raghav</p>
                            <span className='px-2 rounded-md text-xs' style={{background:'#0099FB'}}>Titanium</span>
                        </div>
                        <p>R.80,762</p>
                    </li>
                </ul>
            </div>
            <Link className='text-xs pt-1 font-semibold' href="#">See All</Link>
        </div>
        

    </Fragment>
  )
}

export default RenewalCard