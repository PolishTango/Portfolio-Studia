import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; // Import Cell component
import './Statystyki.css';
import Animacja2 from './Animacja2';
function Statystyki() {
  const data = [
    { name: 'HTML', users: 5 },
    { name: 'CSS', users: 4 },
    { name: 'JavaScript', users: 2 },
    { name: 'React', users: 3 },
    { name: 'Premiere Pro', users: 8 },
    { name: 'After Effects', users: 5 },
    { name: 'Source Filmmaker', users: 2 },
  ];

  const colors = ['#ADD8E6', '#33FF57', '#5733FF', '#E63244', '#F75E25', '#FFFF00', '#1616FF']; // Add your desired colors here

  return (
    <div id="glowne" className='glowne'>
      <div style={{ textAlign: 'center' }}>
      <Animacja2 />
      <section className="hidden2">          

        <h1>Wykres umiejetosci</h1>
        </section>

        <div className='Wykres'>
        <section className="hidden2">          

          <PieChart width={1400} height={700}>
            <Pie
              dataKey='users'
              isAnimationActive={true}
              data={data}

              outerRadius={280}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          </section>
        </div>
      </div>
    </div>
    
  );
}

export default Statystyki;
