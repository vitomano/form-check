import React/* , { useEffect, useState } */ from 'react'
import { Range } from './Range'

export const Pallet = ({ id, pallets, setPallets }) => {

    // const [found, setFound] = useState(pallets.data)

    // useEffect(() => {

    //     if(pallets.length > 0){
    //         let findIt = pallets.find(c => c.id === id)
    //     setFound(findIt.data || [])
    //     }

    // }, [id, pallets])

    // const data = [
    //     {check:false, label:"Check Weight", name:"check_weight", minVal:0, maxVal:10, value:0},
    //     {check:true, label:"Fruit punnet", name:"fruit_punnet", minVal:0, maxVal:10, value:0},
    //     {check:true, label:"Mould", name:"mould", minVal:0, maxVal:10, value:0},
    //     {check:true, label:"Soft", name:"soft", minVal:0, maxVal:10, value:0},
    //     {check:true, label:"Unripe", name:"unripe", minVal:0, maxVal:10, value:0}
    // ]


    const handleChange = (e) => {
        let findIt = pallets.find(c => c.id === id)
        findIt.images = e.target.files
    }

    console.log(pallets)

    return (
        <form className="mb-2" id={id}>
            <h3 className="mb-1">Pallet</h3>
            {/* <Range name="" label="Check weight" minVal={150} maxVal={300} />
            <Range name="" label="Fruit punnet" minVal={0} maxVal={100} />
            <Range name="" label="Mould" minVal={0} maxVal={10} />
            <Range name="" label="Soft" minVal={30} maxVal={400} />
            <Range name="" label="Unripe" minVal={1} maxVal={12} /> */}

            {
                pallets.data.length > 0 &&
                pallets.data.map((inp, i) => (
                    <div key={i}>
                        <Range
                            name={inp.name}
                            label={inp.label}
                            minVal={inp.minVal}
                            maxVal={inp.maxVal}
                            value={inp.value}
                            id={id}
                            setPallets={setPallets}
                            pallets={pallets}
                            />
                    </div>
                ))
            }


            <label htmlFor={`img${id}`} className="mb-1">
                <span>Choose Images</span>
            </label>
            <input
                id={`img${id}`}
                className="upload-btn"
                accept=".jpg, .png, .jpeg"
                multiple
                name="file"
                type="file"
                onChange={handleChange}
            />
        </form>
    )
}
