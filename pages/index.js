

import { ChartGraph } from '@/components/cards/Chart';
import SalesCard from '@/components/cards/SalesCard';
import Table from '@/components/cards/Table';
import { Sidebar } from '@/components/main/Sidebar';
import { IndexNavbar } from '@/components/navbar/IndexNavbar';
import React from 'react'

const Home = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 gap-3 p-5" style={{fontFamily:'Montserrat, sans-serif'}}>
      <section className="side_bar bg-white col-span-1 h-200">
        <Sidebar/>
      </section>
      <section style={{background:'#F5F6FA'}} className="main_body col-span-4 rounded-l-3xl p-5 pt-8 pr-24 pl-8 flex flex-col gap-3">
        <IndexNavbar/>
        <ChartGraph/>
        <div className='grid grid-cols-2 gap-4'>
            <Table title="Latest Customer Onboards" dateType="Joined On" bottomText="View All Customers"/>
            <Table title="Upcoming Follow Ups" dateType="Date" bottomText="View All Follow Ups"/>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <SalesCard price="16,58,000" text="Last Month Sales" gold={4} platinum={15} titanium={12} image="./money.png"/>
          <SalesCard price="20,00,000" text="Upcoming Renewals" gold={4} platinum={15} titanium={12} image="./next-week.png"/>
        </div>
      </section>
    </main>
  )
}

export default Home;