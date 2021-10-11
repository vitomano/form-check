import React, { useState } from 'react'

// export const Range = ({ id, label, name, minVal,maxVal, value}) => {
export const Range = ({ id, label, name, minVal, maxVal, valor , check , pallet }) => {


    const [valRef, setValRef] = useState(valor)
    const [checkRef, setCheckRef] = useState(check)

    const handleChange = (e) => {
        setValRef(e.target.value)
        pallet.data[id].valor = parseInt(e.target.value)
    }

    const handleCheck = (e) => {
        setCheckRef(e.target.checked)
        pallet.data[id].check = e.target.checked
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
                <span>{minVal}</span>
                <input
                    type="range"
                    value={valRef}
                    min={minVal}
                    max={maxVal}
                    step="2"
                    name={name}
                    onChange={handleChange}
                />
                <span className="range__right">{maxVal}</span>
            </div>
        </div>
    )
}
