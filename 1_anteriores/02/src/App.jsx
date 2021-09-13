import React, { useEffect, useState } from 'react'
//import { Pallet } from './components/Pallet'
import { v4 as uuidv4 } from 'uuid';

export const App = () => {

  const totalPallets = 2;
  const [pallets, setPallets] = useState([])

  useEffect(() => {

    for (let i = 0; i < totalPallets; i++) {

      setPallets(c => [...c, {
        id: i,
        images: [],
        data: [
          { check: false, label: "Check Weight", name: "check_weight", minVal: 0, maxVal: 10, value: 0 },
          { check: true, label: "Fruit punnet", name: "fruit_punnet", minVal: 0, maxVal: 10, value: 0 },
          { check: true, label: "Mould", name: "mould", minVal: 0, maxVal: 10, value: 0 },
          { check: true, label: "Soft", name: "soft", minVal: 0, maxVal: 10, value: 0 },
          { check: true, label: "Unripe", name: "unripe", minVal: 0, maxVal: 10, value: 0 }
        ]
      }])

    }

  }, [])


  const handleChange = (e, id) => {
    let findIt = pallets.find(c => c.id === id)
    findIt.images = e.target.files
}


  const handleSend = () => {
    const mainForm = document.getElementById('mainForm')
    // const form1 = document.getElementById('1')
    // const form2 = document.getElementById('2')

    let mainData = {}
    for (let item of mainForm) {
      mainData[item.name] = item.value;
    }

    console.log(pallets)
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
            <div key={uuidv4()} className="card">
              <h3>Pallet</h3>
              {
                pall.data.map((inp, i) => (
                  <div key={i}>
                    <label>{inp.label}</label>
                    <input
                      type="range"
                      name={inp.name}
                    />
                  </div>
                ))
              }

              <label className="upload-label mb-1">
                <span>Choose Images</span>
              </label>
              <input
                className="upload-btn"
                accept=".jpg, .png, .jpeg"
                multiple
                name="file"
                type="file"
                onChange={(e)=>handleChange(e, pall.id)}
              />
            </div>
          )
        })

        : <p>No pallets</p>

      }


      <button
        onClick={handleSend}
      >Enviar</button>

    </>
  )
}
