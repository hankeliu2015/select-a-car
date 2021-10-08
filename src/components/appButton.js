import * as styles from './appButton.module.css'

const appButton = ({buttonColor, buttonText, carsLink}) => {
    return (
        <button className={styles.appButton} onClick={(e) => {e.preventDefault(); window.location.href=`${carsLink}`}} style={{backgroundColor: `${buttonColor}`}}>{buttonText}</button>
    )
}

export default appButton;