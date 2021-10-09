import * as styles from './redirectButton.module.css'

const redirectButton = ({onClickRedirect,buttonColor, buttonText}) => {
    return (
        <button className={styles.redirectButton} onClick={onClickRedirect} style={{backgroundColor: `${buttonColor}`}}>{buttonText}</button>
    )
}

export default redirectButton;