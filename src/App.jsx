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
        labels: [
          { check: true, tipe:"checkbox", label: "Box Label", name: "box_label", valor: true },
          { check: true, tipe:"checkbox", label: "Punnet Label", name: "punnet_label", valor: true },
          { check: true, tipe:"checkbox", label: "Name & Weight", name: "name_weight", valor: true },
          { check: true, tipe:"text", label: "L Code", name: "l_code", valor: "" },
          { check: true, tipe:"text", label: "T Code", name: "t_code", valor: "" },
          { check: true, tipe:"text", label: "EAN Code", name: "ean_code", valor: "" },
          { check: true, tipe:"text", label: "Variety", name: "variety", valor: "" },
         
        ],
        appareance: [
          { check: true, tipe:"checkbox", label: "Insect", name: "insect", valor: true },
          { check: true, tipe:"range", label: "Fresh", name: "fresh", minVal: 1, maxVal: 7, valor: 0 },
          { check: true, tipe:"range", label: "Size", name: "size", minVal: 1, maxVal: 7, valor: 0 },
          { check: true, tipe:"range", label: "Coloration", name: "coloration", minVal: 1, maxVal: 7, valor: 0 },
          { check: true, tipe:"range", label: "Taste", name: "taste", minVal: 1, maxVal: 7, valor: 0 },
          { check: true, tipe:"checkbox", label: "Pollution", name: "pollution", valor: true },
          { check: true, tipe:"checkbox", label: "Humidity", name: "humidity", valor: true },
          { check: true, tipe:"checkbox", label: "Juicing", name: "juicing", valor: true },
          { check: true, tipe:"checkbox", label: "Wet", name: "wet", valor: true },
          { check: true, tipe:"range", label: "Pallet Integrity", name: "pallet_integrity", minVal: 1, maxVal: 7, valor: 0 },
          { check: true, tipe:"number", label: "Temperature C", name: "temperature", valor: 0 },
          { check: true, tipe:"number", label: "Brix", name: "brix", valor: 0 },
          { check: true, tipe:"number", label: "Weight Check", name: "weight_check", valor: 0 },

          
        ],
        pallgrow: [
          { check: true, tipe:"range", label: "Check Weight", name: "check_weight", minVal: 0, maxVal: 10, valor: 0 },
          { check: true, tipe:"range", label: "Fruit punnet", name: "fruit_punnet", minVal: 0, maxVal: 10, valor: 0 },
          { check: true, tipe:"range", label: "Mould", name: "mould", minVal: 0, maxVal: 10, valor: 0 },
          { check: true, tipe:"range", label: "Soft", name: "soft", minVal: 0, maxVal: 10, valor: 0 },
          { check: true, tipe:"range", label: "Unripe", name: "unripe", minVal: 0, maxVal: 10, valor: 0 }
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
      const palo = pal.labels
      console.log(palo.filter( p => p.check === true ))
      console.log(pal.images)
    }
    

    console.log(mainData)
  }

  const handleAddNew = () => {

    setPallets(c => [...c, {
      id: pallets.length,
      images: [],
      labels: [
        { check: true, tipe:"range", label: "Check Weight", name: "check_weight", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Fruit punnet", name: "fruit_punnet", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Mould", name: "mould", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Soft", name: "soft", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Unripe", name: "unripe", minVal: 0, maxVal: 10, valor: 0 }
      ],
      appareance: [
        { check: true, tipe:"range", label: "Check Weight", name: "check_weight", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Fruit punnet", name: "fruit_punnet", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Mould", name: "mould", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Soft", name: "soft", minVal: 0, maxVal: 10, valor: 0 },
        { check: true, tipe:"range", label: "Unripe", name: "unripe", minVal: 0, maxVal: 10, valor: 0 }
      ],
      pallgrow: [
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
