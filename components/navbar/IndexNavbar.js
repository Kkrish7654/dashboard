import React from "react";
import Card from "../cards/Card";

export const IndexNavbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <form>
          <input
            className="
            w-62 px-8 pr-24 py-1 rounded-md
          "
            type="search"
            placeholder="search"
          />
        </form>
        <ul className="flex items-center gap-6">
          <img className="w-9" src="./bell.png" alt="icon1" />
          <img className="w-9" src="./Ellipse.png" alt="icon2" />
          <img className="w-6" src="./arrow-down.png" alt='icon'/>
        </ul>
      </nav>

      <nav className="flex justify-between">
        <div>
          <h4 className="text-xl">Dashboard</h4>
          <p className="text-sm" style={{ color: "#878787" }}>
            Good Afternoon, Onkaresh
          </p>
        </div>
        <ul className="flex gap-3 items-center">
          <button
            type="button"
            className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
          >
            Reports
          </button>
          <button
            type="button"
            className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
          >
            Exports
          </button>
        </ul>
      </nav>
      <section className="flex items-center justify-start gap-3 mt-4">
      <Card color="#FE6976" text="All Customers" number={500}/>
      <Card color="#19A2FB" text="Free Trial" number={35}/>
      <Card color="#74CDFF" text="Paid Clients" number={288}/>
      <Card color="#83B3C0" text="Active Paid" number={96}/>
      <Card color="#FF9066" text="Dormant" number={42}/>
      </section>
    </>
  );
};
