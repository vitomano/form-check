import React, { useState } from 'react'

// export const Range = ({ id, label, name, minVal,maxVal, value}) => {
export const Range = ({id, label, name, minVal, maxVal, valor, pallet}) => {

    
    const [valRef, setValRef] = useState(valor)

    const handleChange = (e) => {
        setValRef(e.target.value)
        pallet.data[id].valor = parseInt(e.target.value)
    }

    return (
        <div className="range mb-1">
            <label>{label}</label>
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
