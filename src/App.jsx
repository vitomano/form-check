import React, { useEffect, useState } from 'react'
//import { Pallet } from './components/Pallet'
import { v4 as uuidv4 } from 'uuid';
import { Pallet } from './components/Pallet';

export const App = () => {

  const totalPallets = 2;
  const [pallets, setPallets] = useState([])

  useEffect(() => {

    for (let i = 0; i < totalPallets; i++) {

      setPallets(c => [...c, {
        id: i,
        images: [],
        data: [
          { check: true, tipe:"range", valor: 0, label: "Check Weight", name: "check_weight", minVal: 0, maxVal: 10  },
          { check: true, tipe:"range", valor: 0, label: "Fruit punnet", name: "fruit_punnet", minVal: 0, maxVal: 10  },
          { check: true, tipe:"range", valor: 0, label: "Mould", name: "mould", minVal: 0, maxVal: 10  },
          { check: true, tipe:"range", valor: 0, label: "Soft", name: "soft", minVal: 0, maxVal: 10  },
          { check: true, tipe:"range", valor: 0, label: "Unripe", name: "unripe", minVal: 0, maxVal: 10  }
        ]
      }])

    }

  }, [])


  const handleSend = () => {
    const mainForm = document.getElementById('mainForm')
    // const form1 = document.getElementById('1')
    // const form2 = document.getElementById('2')

    let mainData = {}
    for (let item of mainForm) {
      mainData[item.name] = item.value;
    }


    for(let pal of pallets){
      const palo = pal.data
      console.log(palo.filter( p => p.check === true ))
    }
    

  }

  const handleAddNew = () => {

    setPallets(c => [...c, {
      id: pallets.length,
      images: [],
      data: [
        { check: true, tipe:"range", label: "Check Weight", name: "check_weight", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Fruit punnet", name: "fruit_punnet", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Mould", name: "mould", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Soft", name: "soft", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Unripe", name: "unripe", minVal: 0, maxVal: 10, valor: 0 }
      ]
    }])

  }


  return (
    <>
      <h1 className="mb-2">Hola</h1>
      <form className="mb-2" id="mainForm">
        <div className="range mb-1">
          <label>Nombre</label>
          <input
            name="name"
            type="text" onChange={(e) => e.target.value} />
        </div>
        <div className="range mb-1">
          <label>Apellido</label>
          <input
            name="lastname"
            type="text" onChange={(e) => e.target.value} />
        </div>
        <div className="range mb-1">
          <label>Edad</label>
          <input
            name="age"
            type="number" onChange={(e) => e.target.value} />
        </div>
      </form>

      {/* {
        [...Array(parseInt(totalPallets))].map((e, i) => (
          <Pallet
            key={uuidv4()}
            id={i}
            pallets={pallets}
            setPallets={setPallets}
          />
        ))
      } */}

      {
        (pallets.length > 0)
          ? pallets.map((pall) => {

            return (
              <div key={uuidv4()}>
                <Pallet
                  pallet={pall}
                  id={pall.id}
                  setPallets={setPallets}
                />
              </div>
            )
          })

          : <p>No pallets</p>

      }

      <div>
      <button
        onClick={handleAddNew}
      >Add New</button>
      </div>

      <button
        onClick={handleSend}
      >Enviar</button>

    </>
  )
}
