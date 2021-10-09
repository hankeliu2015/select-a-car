import RedirectButton from './redirectButton'
import * as styles from './car.module.css'
import { carsLinkByColor } from './carsLinksByColor'

const car = ({onClose,carColor, showCar}) => {
    const showHideClass = showCar ? styles.showContainer : styles.noShowConstainer
    
    let carsLink= '';
    if(carColor === "black") {
        carsLink = carsLinkByColor.black
    } else if (carColor === "red") {
        carsLink = carsLinkByColor.red
    } else if (carColor === "blue") {
        carsLink = carsLinkByColor.blue
    }

    return (
        <div className={`${styles.backDrop} ${showHideClass}` }>
            <div className={styles.Container}> 
                <h3>ARE YOU SURE? </h3>
                <p>You want to leave the site to see the {carColor} car?</p>
                <div className={styles.carButtonsContainer}>
                    <img src={"images/blackCar.png"} style={{height: "150px", width: "150px"}} alt="illustrated black car logo"/>
                    <div className={styles.buttons}>
                        <RedirectButton  carsLink={carsLink} buttonColor="white" buttonText="YES"  onClickRedirect={(e) => {e.preventDefault(); window.location.href=`${carsLink}`} }/>

                        <RedirectButton  buttonColor="white" buttonText="NO" onClickRedirect={onClose}/>
                    </div>
                </div>
                <p>*Please remember to wear your seatbelt</p>
            </div>
        </div>
    )
}

export default car;