import React, { useState } from 'react'
import { Modal } from './Modal'
import { Range } from './Range'

export const Pallet = ({ pallet }) => {

    const [open, setOpen] = useState(false)

    const handleImages = (e) => {
        pallet.images = e.target.files
    }


    return (
        <div className="card mb-2">
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
                        check={inp.check}
                        pallet={pallet}
                    />
                ))
            }

            <div className="mb-1">
                <button onClick={() => setOpen(true)}>
                    add item
                </button>
            </div>

            {
                open &&
                <Modal />
            }


            <input
                className="upload-btn mb-1"
                accept=".jpg, .png, .jpeg"
                multiple
                name="file"
                type="file"
                onChange={handleImages}
            />
            <hr />
        </div>
    )
}
