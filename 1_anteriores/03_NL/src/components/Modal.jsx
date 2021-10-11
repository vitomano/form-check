import React, { useState } from 'react'

export const Modal = ({addItem}) => {

    const [propiedad, setPropiedad] = useState("")
    const [inputVal, setInputVal] = useState("")

    return (
        <div>
            <div>
                <label htmlFor="label-name">Propiedad</label>
                <input
                    type="text"
                    value={propiedad}
                    onChange={(e) => setPropiedad(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="label-name">Valor</label>
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
            </div>
            <div>
                <button
                    onClick={() => addItem(propiedad, inputVal)}
                >
                    add
                </button>
            </div>
        </div>
    )
}
