import React from 'react'
import PopupWindow from './popupWindow'
import * as styles from './buttons.module.css'

function ColorSelectButton (buttonColor) {
    const [selectedColor, setSelectedColor] = React.useState("none")
    const [showCar, setShowCar] = React.useState(false)
    const buttonRef = React.useRef(null)

    const selectCarColor = () => {
        setSelectedColor(buttonRef.current.textContent.toLowerCase()) 
        setShowCar(true)
    }

    const colorButtonStyle = {
        borderRadius: '15px',
        height: '2rem',
        width: '6rem',
        color: 'white',
        border: '4px',
        margin: '0.25rem', 
        backgroundColor:` ${buttonColor}`,
        border: `solid ${buttonColor} 4px`
    }

    return (
        <button
            ref={buttonRef}
            onClick={selectCarColor} 
            className={styles.blackButton} style={colorButtonStyle}>Black
        </button>
    )
}
export default function Buttons() {
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
            <PopupWindow carColor={selectedColor} showCar={showCar} onClose={() => {setShowCar(false)}} />
        </div>
    )
}
