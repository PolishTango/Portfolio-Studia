import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './Statystyki.css';
import Animacja2 from './Animacja2';

function Statystyki() {
  const data = [
    { name: 'HTML', users: 5 },
    { name: 'CSS', users: 4 },
    { name: 'JS', users: 2 },
    { name: 'React', users: 3 },
    { name: 'Premiere Pro', users: 8 },
    { name: 'After Effects', users: 5 },
    { name: 'Illustrator', users: 5 },
    { name: 'Photoshop', users: 5 },
  ];

  const colors = ['#33FF57', '#E63244', '#5733FF', '#ADD8E6', '#F75E25', '#FFFF00', '#f8a829','#83caff   '];

  return (
    <div id="glowne" className='glowne'>
      <div className='glowne2' style={{ textAlign: 'center' }}>
        <Animacja2 />
        <section className="hidden2">
          <h1>Skills chart</h1>
        </section>

        <div className='Wykres'>
          <section className="hidden2">
            <PieChart width={window.innerWidth > 1200 ? 1200 : window.innerWidth - 20} height={window.innerHeight * 0.8}>
              <Pie
                dataKey='users'
                isAnimationActive={true}
                data={data}
                outerRadius={window.innerWidth > 1200 ? 280 : window.innerWidth * 0.20}
                label={({ name }) => name} 
                labelLine={false} 
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
