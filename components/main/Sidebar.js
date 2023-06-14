import Link from "next/link";
import { Fragment, useState } from "react";

const users = [
  { title: 'All Customers', path: '#' },
  { title: 'Manually Add Customers', path: '#' },
  { title: 'Free Trial Customers', path: '#' },
  { title: 'All Paid Customers', path: '#' },
  { title: 'Active Paid Customers', path: '#' },
  { title: 'Dormant Clients', path: '#' },
  { title: 'Upcoming Renewals', path: '#' },
  { title: 'Create User', path: '#' },
  { title: 'All Users', path: '#' },
  { title: 'All Unverified Clients', path: '#' },
];

const analytics = [
  { title: 'Notification', path: '#' },
  { title: 'Notification History', path: '#' },
  { title: 'Analytics Item 3', path: '#' },
  { title: 'Analytics Item 4', path: '#' },
  { title: 'Analytics Item 5', path: '#' },
];

const createReports = [
    {title:'demo', path:'#'}    
]
const documentations = [
    {title:'demo', path:'#'}    
]
const settings = [
    {title:'demo', path:'#'}    
]
const alerts = [
    {title:'demo', path:'#'}    
]
const Accordion = ({ headers, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2">
      <button
        style={{color:'#878788'}}
        className="flex items-start font-bold justify-between w-full p-3 rounded-md"
        onClick={toggleAccordion}
      >
        <span>{headers}</span>
        <svg
          className={`transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-3 mt-2 bg-white rounded-md">
          <ul className="flex flex-col gap-3">
            {items.map((item, index) => (
              <li key={index}>
                <Link className="text-sm" style={{color:'#878787'}} href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <Fragment>
        
        <i className="p-2 flex items-center justify-center">
            <img className="p-6 w-40" src="./favicon.png" alt="favicon"/>
        </i>

        <button className="flex gap-2 p-2 rounded-md items-center ml-8 mb-4 px-6 border-2 mt-12" style={{border:'2px solid #0099FB'}}>
            <img className="w-5 h-5" src="./dashboard.png" alt='icon'/>
            <span className="text-md font-bold" style={{color:'#0099FB'}}>DASHBOARD</span>
        </button>
      <Accordion headers="USERS" items={users} />
      <Accordion headers="ANALYTICS" items={analytics} />
      <Accordion headers="CREATE REPORTS" items={createReports} />
      <Accordion headers="DOCUMENTATIONS" items={documentations} />
      <Accordion headers="SETTINGS" items={settings} />
      <Accordion headers="ALERTS" items={alerts} />
    </Fragment>
  );
};
