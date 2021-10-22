import React, { useState } from 'react'

// export const Range = ({ id, label, name, minVal,maxVal, value}) => {
export const AppareanceInput = ({ id, label, tipe, name, minVal, maxVal, valor , check , pallet }) => {


    const [valRef, setValRef] = useState(valor)
    const [checkRef, setCheckRef] = useState(check)

    const handleChange = (e) => {
        if(tipe==="range"){
            setValRef(e.target.value)
            pallet.appareance[id].valor = e.target.value
        } else if(tipe==="checkbox"){
            setValRef(e.target.checked)
            pallet.appareance[id].valor = e.target.checked
        }else if(tipe==="text"){
            setValRef(e.target.value)
            pallet.appareance[id].valor = e.target.value
        }else if(tipe==="number"){
            setValRef(e.target.value)
            pallet.appareance[id].valor = e.target.value
        }
    }

    const handleCheck = (e) => {
        setCheckRef(e.target.checked)
        pallet.appareance[id].check = e.target.checked
    }

    return (
        <div className="range mb-1">

            <div className="label-name">
                <input
                    type="checkbox"
                    checked={checkRef}
                    onChange={handleCheck}
                />
            <label>{label}</label>
            </div>


            <div>
                {
                    tipe === "checkbox" &&
                    <input
                    type={tipe}
                    checked={valRef}
                    name={name}
                    onChange={handleChange}
                />
                }
                {
                    tipe === "text" &&
                    <input
                    type={tipe}
                    value={valRef}
                    name={name}
                    onChange={handleChange}
                />
                }
                {
                    tipe === "range" &&
                    <input
                    type={tipe}
                    value={valRef}
                    min={minVal}
                    max={maxVal}
                    step="1"
                    name={name}
                    onChange={handleChange}
                />
                }
                {
                    tipe === "number" &&
                    <input
                    type={tipe}
                    value={valRef}
                    name={name}
                    onChange={handleChange}
                />
                }
            </div>
        </div>
    )
}
