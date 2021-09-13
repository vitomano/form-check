import React from 'react'
import { Range } from './Range'

export const Pallet = ({ pallet }) => {

    const handleImages = (e) => {
        pallet.images = e.target.files
    }

    /* FUNCIONA */
    // const handleChange = (e, i) => {
    //     pallet.data[i].valor = e.target.value
    //     console.log(pallet.data[i].valor)
    // }

    return (
        <div className="card">
            <h3 className="mb-1">Pallet</h3>

            {
                pallet.data.map((inp, i) => (
                    <Range
                        key={i}
                        id={i}
                        label={inp.label}
                        name={inp.name}
                        minVal={inp.minVal}
                        maxVal={inp.maxVal}
                        valor={inp.valor}
                        pallet={pallet}
                    />
                ))
            }


            <input
                className="upload-btn"
                accept=".jpg, .png, .jpeg"
                multiple
                name="file"
                type="file"
                onChange={handleImages}
            />
        </div>
    )
}
