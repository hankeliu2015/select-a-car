import * as styles from './redirectButton.module.css'

const redirectButton = ({buttonColor, buttonText, carsLink}) => {
    return (
        <button className={styles.redirectButton} onClick={(e) => {e.preventDefault(); window.location.href=`${carsLink}`}} style={{backgroundColor: `${buttonColor}`}}>{buttonText}</button>
    )
}

export default redirectButton;