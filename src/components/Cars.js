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

    const colorSelectButtons = {blackButton: 'black', redButton: 'red', blueButton: 'blue'}
    const colorButtonStyle = {
        borderRadius: '15px',
        height: '2rem',
        width: '6rem',
        color: 'white',
        border: '4px',
        margin: '0.25rem', 
        backgroundColor:` ${colorSelectButtons.blackButton}`,
        border: `solid ${colorSelectButtons.blackButton} 4px`
    }

    return (
        <div className={styles.buttonContainer}>
            <button 
                ref={buttonRef}
                onClick={selectCarColor} 
                className={styles.blackButton} style={colorButtonStyle}>Black
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
