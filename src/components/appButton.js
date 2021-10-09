// this component is not needed anymore
import * as styles from './appButton.module.css'

const appButton = ({buttonColor, buttonText, carsLink}) => {
    return (
        <button className={styles.appButton} style={{backgroundColor: `${buttonColor}`}}>{buttonText}</button>
    )
}

export default appButton;