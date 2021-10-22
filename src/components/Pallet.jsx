import React from 'react'
//import { Modal } from './Modal'
import { LabelsInput } from './LabelsInput'
import { AppareanceInput } from './AppareanceInput'

export const Pallet = ({ pallet }) => {


    const handleImages = (e) => {
        pallet.images = e.target.files
    }


    return (
        <div className="card mb-2">
            <h3 className="mb-1">Pallet</h3>

            <strong>Labels</strong>

            {
                pallet.labels.map((inp, i) => (
                    <LabelsInput
                        key={i}
                        id={i}
                        tipe={inp.tipe}
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

            <strong>Appareance</strong>

            {
                pallet.appareance.map((inp, i) => (
                    <AppareanceInput
                        key={i}
                        id={i}
                        tipe={inp.tipe}
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
