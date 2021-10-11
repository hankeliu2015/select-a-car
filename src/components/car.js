import RedirectButton from './redirectButton'
import * as styles from './car.module.css'
import { carsLinkByColor } from './carsLinksByColor'
import {ReactComponent as CarLogo} from './blackCar.svg'
import CarLogo2 from './carLogo'

const car = ({onClose,carColor, showCar}) => {
    const showHideClass = showCar ? styles.showContainer : styles.noShowConstainer
    
    let currentCarsLink= '';
    if(carColor === "black") {
        currentCarsLink = carsLinkByColor.black
    } else if (carColor === "red") {
        currentCarsLink = carsLinkByColor.red
    } else if (carColor === "blue") {
        currentCarsLink = carsLinkByColor.blue
    }

    return (
        <div className={`${styles.backDrop} ${showHideClass}` }>
            <div className={styles.popupContainer}> 
                <h3>ARE YOU SURE? </h3>
                <p>You want to leave the site to see the {carColor} car?</p>
                <div className={styles.carRedirectButtonsContainer}>
                    <CarLogo2 fill={carColor} width={150} height={150}/>
                    {/* <img src={"images/blackCar.svg"} style={{height: "150px", width: "150px"}} alt="illustrated black car logo"/> */}
                    {/* <CarLogo /> */}

                    <div className={styles.redirectButtonsContainer}>
                        <RedirectButton buttonColor="white" buttonText="YES"  onClickRedirect={(e) => {e.preventDefault(); window.location.href=`${currentCarsLink}`} }/>
                        <RedirectButton  buttonColor="white" buttonText="NO" onClickRedirect={onClose}/>
                    </div>
                </div>
                <p>*Please remember to wear your seatbelt</p>
            </div>
        </div>
    )
}

export default car;