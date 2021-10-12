import React from 'react'
import ColorSelectedCars from './car'
import * as styles from './cars.module.css'

export default function Cars() {
    const [selectedColor, setSelectedColor] = React.useState("none")
    const [showCar, setShowCar] = React.useState(false)
    const buttonRef = React.useRef(null)

    const selectCarColor = () => {
        setSelectedColor(buttonRef.current.textContent.toLowerCase()) 
        setShowCar(true)
    }

    return (
        <div className={styles.buttonContainer}>
            <button 
                ref={buttonRef}
                onClick={selectCarColor} 
                className={styles.blackButton} style={{backgroundColor: 'black'}}>Black
            </button>
            <button 
                ref={buttonRef}
                onClick={selectCarColor}
                className={styles.redButton} style={{backgroundColor: 'red'}}>RED</button>
            <button 
                ref={buttonRef}
                onClick={selectCarColor}
                className={styles.blueButton} style={{backgroundColor: 'blue'}}>BLUE</button>
            <ColorSelectedCars carColor={selectedColor} showCar={showCar} onClose={() => {setShowCar(false)}} />
        </div>
    )
}
