import RedirectButton from './redirectButton'
import * as styles from './popupWindow.module.css'
import { carsLinkByColor } from './carsLinksByColor'
import { ReactComponent as BlackCarLogo } from './carLogoBlack.svg'
// import CarLogo from './carLogo'

const popupWindow = ({onClose,carColor, showCar}) => {
    const showHideClass = showCar ? styles.showContainer : styles.noShowConstainer

    return (
        <div className={`${styles.backDrop} ${showHideClass}` }>
            <div className={styles.popupContainer}> 
                <h3>ARE YOU SURE? </h3>
                <p>You want to leave the site to see the {carColor} car?</p>
                <div className={styles.carRedirectButtonsContainer}>
                    <BlackCarLogo fill={carColor} width={150} height={150}/>
                    {/* <CarLogo fill={carColor} width={150} height={150}/> */}
                    <div className={styles.redirectButtonsContainer}>
                        <RedirectButton buttonColor="white" buttonText="YES"  onClickRedirect={(e) => {e.preventDefault(); window.location.href=`${carsLinkByColor[carColor]}`} }/>
                        <RedirectButton  buttonColor="white" buttonText="NO" onClickRedirect={onClose}/>
                    </div>
                </div>
                <p>*Please remember to wear your seatbelt</p>
            </div>
        </div>
    )
}

export default popupWindow;