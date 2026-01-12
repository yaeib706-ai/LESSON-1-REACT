import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header.jsx'
import Flower from './components/flower.jsx' 
function App() {
   const flowers = [
    {
      id: 1,
      flowerName: "ורד",
      petalColor: "red",
      leafColor: "green"
    },
    {
      id: 2,
      flowerName: "חמניה",
      petalColor: "yellow",
      leafColor: "brown"
    },
    {
      id: 3,
      flowerName: "סיגלית",
      petalColor: "purple",
      leafColor: "darkgreen"
    }
    
  ];

  return (
    <>
      <Header />

      {flowers.map((flower) => (
        <Flower
          key={flower.id}
          flowerName={flower.flowerName}
          petalColor={flower.petalColor}
          leafColor={flower.leafColor}
        />
      ))}
    </>
  );
}
export default App
