import RedirectButton from './redirectButton'
import * as styles from './car.module.css'

const car = ({carColor, showCar}) => {
    const showHideClass = showCar ? styles.showContainer : styles.noShowConstainer
    let carsLink= '';
    if(carColor === "black") {
        carsLink = "https://duckduckgo.com/?q=black+car&t=brave&iax=images&ia=images"
    } else if (carColor === "red") {
        carsLink = "https://duckduckgo.com/?q=Red+car&t=brave&iar=images&iax=images&ia=images"
    } else if (carColor === "blue") {
        carsLink = "https://duckduckgo.com/?q=Blue+Car&t=brave&iar=images&iax=images&ia=images"
    }

    return (
        <div className={`${styles.backDrop} ${showHideClass}` }>
            <div className={styles.Container}> 
                <h3>ARE YOU SURE? </h3>
                <p>You want to leave the site to see the {carColor} car?</p>
                <div className={styles.carButtons}>
                    <img src={"images/blackCar.png"} style={{height: "150px", width: "150px"}} />
                    <div className={styles.buttons}>
                        <RedirectButton  carsLink={carsLink} buttonColor="white" buttonText="YES" />
                        <RedirectButton  buttonColor="white" buttonText="No" />
                    </div>
                </div>
                <p>*Please remember to wear your seatbelt</p>
            </div>
        </div>
    )
}

export default car;