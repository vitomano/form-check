import React from 'react'
import { Pallet } from './components/Pallet'

import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  return (
    <div>
      <h1 className="mb-2">Hola</h1>
      <form className="mb-2">
        <div className="range mb-1">
          <label>Nombre</label>
          <input type="text" onChange={(e)=>e.target.value}/>
        </div>
        <div className="range mb-1">
          <label>Apellido</label>
          <input type="text" onChange={(e)=>e.target.value}/>
        </div>
        <div className="range mb-1">
          <label>Edad</label>
          <input type="number" onChange={(e)=>e.target.value}/>
        </div>
      </form>

      <Pallet id={uuidv4()}/>
      <Pallet id={uuidv4()}/>
    </div>
  )
}
