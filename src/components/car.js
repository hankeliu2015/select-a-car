import RedirectButton from './redirectButton'
import * as styles from './car.module.css'

const car = ({carsLink, carColor, showCar}) => {
    // console.log(carColor, showCar)
    // set a condition to have the correct carsLink base on carColor
    return (
        <div className={showCar ? styles.showContainer: styles.noDisplay}> 
            <h3>ARE YOU SURE? </h3>
            <p>You want to leave the site to see the (carColor vairable) car?</p>
            <div className={styles.carButtons}>
                <img src={"images/blackCar.png"} style={{height: "150px", width: "150px"}} />
                <div className={styles.buttons}>
                    <RedirectButton  carsLink="	https://duckduckgo.com/?q=black+car&t=brave&iax=images&ia=images" buttonColor="white" buttonText="YES" />
                    <RedirectButton  buttonColor="white" buttonText="No" />
                </div>
            </div>
            <p>*Please remember to wear your seatbelt</p>
        </div>
    )
}

export default car;