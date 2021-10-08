import React from 'react'
import AppButton from './appButton'
import ColorSelectedCars from './car'

export default function Cars() {
    const [selectedColor, setSelectedColor] = React.useState(false)

    return (
        <div>
            <AppButton buttonColor="black" buttonText="Black" />
            <AppButton buttonColor="red" buttonText="RED" />
            <AppButton buttonColor="blue" buttonText="BLUE" />
            <ColorSelectedCars />
        </div>
    )
}
