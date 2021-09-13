import React from 'react'

export const Range = ({ id, minVal, maxVal, label, name, value, setPallets, pallets }) => {

    //const [rangeVal, setRangeVal] = useState(minVal)
    console.log(pallets)
    //let findIt = pallets.find(c => c.id === id)

    const sliderValueChanged = (e) => {
        //setPallets(findIt.name = e.target.value)
    }

    return (
        <div className="range mb-1">
            <label>{label}</label>
            <div>
                <span>{minVal}</span>
                <input
                    type="range"
                    value={value}
                    min={minVal}
                    max={maxVal}
                    step="2"
                    name={name}
                    onChange={sliderValueChanged}
                />
                <span className="range__right">{maxVal}</span>
            </div>
        </div>
    )
}
