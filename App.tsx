import * as React from 'react';
import './style.css';
import GridList from './GridList';
import DataList from './Data.json';

function control(today: Date, limit: number) {}

export default function App() {
  let sourceProp = DataList;
  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <GridList />
    </div>
  );
}
