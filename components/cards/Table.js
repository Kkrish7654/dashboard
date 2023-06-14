import React from 'react';

const Table = ({title, dateType, bottomText}) => {
  const data = [
    { id:1 ,name: 'Sonali Shukla', phone: '8437897586', joinedOn: '2 mins ago' },
    { id:2 ,name: 'Ritika Raj', phone: '8437897586', joinedOn: '10 mins ago' },
    { id:3 ,name: 'Ritika Raj', phone: '8437897586', joinedOn: '44 mins ago' },
    { id:4 ,name: 'Ritika Raj', phone: '8437897586', joinedOn: '1 hrs ago' },
    { id:5 ,name: 'Ritika Raj', phone: '8437897586', joinedOn: '4 hrs ago' },
  ];

  return (
    <div className='p-4 w-full bg-white shadow-md '>
    <h4 className='pb-3 font-bold text-black'>{title}</h4>
    <table className="min-w-full ">
      <thead className="" style={{background:'#0099FB', color:'#FFFFFF'}}>
        <tr>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left w-full">{dateType}</th>
          <th className="py-3 px-4"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-1 px-4">{item.name}</td>
            <td className="py-1 px-4">{item.phone}</td>
            <td className="py-1 px-4">{item.joinedOn}</td>
            <td className="py-1 px-4">
              <button className="py-1 px-8 text-xs text-white rounded" style={{background:'#0099FB'}}>View More</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className='px-12 py-1 m-3 text-xs rounded-sm text-white' style={{background:'#0099FB'}}>{bottomText}</button>
    </div>
  );
};

export default Table;
