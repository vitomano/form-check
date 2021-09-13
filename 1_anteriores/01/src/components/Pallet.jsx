import React from 'react'
import { Range } from './Range'

export const Pallet = ({id}) => {


    return (
        <form className="mb-2" id={id}>
            <h3 className="mb-1">Pallet</h3>
            <Range label="Check weight" minVal={150} maxVal={300} />
            <Range label="Fruit punnet" minVal={0} maxVal={100} />
            <Range label="Mould" minVal={0} maxVal={10} />
            <Range label="Soft" minVal={30} maxVal={400} />
            <Range label="Unripe" minVal={1} maxVal={12} />
        </form>
    )
}
