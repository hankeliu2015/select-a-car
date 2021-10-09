import RedirectButton from './redirectButton'
import * as styles from './car.module.css'

const car = ({carsLink, carColor, showCar}) => {
    const showHideClass = showCar ? styles.showContainer : styles.noShowConstainer

    // console.log(carColor, showCar)
    // will set a condition to have the correct carsLink value base on carColor
    // the following cardLink value in redirectButton is just for testing purpose
    return (
        <div className={`${styles.backDrop} ${showHideClass}` }>
            <div className={styles.Container}> 
                <h3>ARE YOU SURE? </h3>
                <p>You want to leave the site to see the {carColor} car?</p>
                <div className={styles.carButtons}>
                    <img src={"images/blackCar.png"} style={{height: "150px", width: "150px"}} />
                    <div className={styles.buttons}>
                        <RedirectButton  carsLink="	https://duckduckgo.com/?q=black+car&t=brave&iax=images&ia=images" buttonColor="white" buttonText="YES" />
                        <RedirectButton  buttonColor="white" buttonText="No" />
                    </div>
                </div>
                <p>*Please remember to wear your seatbelt</p>
            </div>
        </div>
    )
}

export default car;