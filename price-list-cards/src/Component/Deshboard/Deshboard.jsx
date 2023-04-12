import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Deshboard = () => {
    let marksArray = [
        { id: 1, name: 'Osman', physics: 80, chemistry: 75, mathematics: 90 },
        { id: 2, name: 'Arif', physics: 85, chemistry: 90, mathematics: 75 },
        { id: 3, name: 'Ali', physics: 90, chemistry: 80, mathematics: 85 },
        { id: 4, name: 'Talha', physics: 70, chemistry: 75, mathematics: 95 },
        { id: 5, name: 'Sumon', physics: 95, chemistry: 80, mathematics: 85 },
        { id: 6, name: 'Khadija', physics: 85, chemistry: 90, mathematics: 75 },
        { id: 7, name: 'Bulbul', physics: 75, chemistry: 85, mathematics: 90 },
        { id: 8, name: 'Shimul', physics: 80, chemistry: 75, mathematics: 85 },
        { id: 9, name: 'Maoya', physics: 90, chemistry: 85, mathematics: 80 },
        { id: 10, name: 'Suborna', physics: 70, chemistry: 95, mathematics: 75 },
        { id: 11, name: 'Omor', physics: 85, chemistry: 80, mathematics: 90 },
        { id: 12, name: 'Hafsa', physics: 75, chemistry: 90, mathematics: 85 },
      ];
      
    return (
        <div>
          <LineChart 
          width={500}
          height={300}
          data={marksArray}
          >
            <Line stroke="blue" dataKey="physics"></Line>
            <Line dataKey="chemistry" stroke='red'></Line>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </LineChart>  
        </div>
    );
};

export default Deshboard;