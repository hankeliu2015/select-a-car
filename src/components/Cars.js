import React from 'react'
import ColorSelectedCars from './car'
import * as styles from './cars.module.css'

export default function Cars() {
    const [selectedColor, setSelectedColor] = React.useState("none")
    const [showCar, setShowCar] = React.useState(false)

    return (
        <div className={styles.buttonContainer}>
            <button 
                onClick={()=> {
                setSelectedColor("black") 
                setShowCar(true)
                }} 
                className={styles.blackButton} style={{backgroundColor: 'black'}}>Black</button>
            <button 
                onClick={()=> {
                setSelectedColor("red") 
                setShowCar(true)
                }} 
            className={styles.redButton} style={{backgroundColor: 'red'}}>RED</button>
            <button 
                onClick={()=> {
                setSelectedColor("blue") 
                setShowCar(true)
                }} 
            className={styles.blueButton} style={{backgroundColor: 'blue'}}>BLUE</button>
            <ColorSelectedCars carColor={selectedColor} showCar={showCar} />
        </div>
    )
}
