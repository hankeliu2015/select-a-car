const appButton = ({buttonColor, buttonText, carsLink}) => {
    return (
        <button onClick={(e) => {e.preventDefault(); window.location.href=`${carsLink}`}} style={{backgroundColor: `${buttonColor}`}}>{buttonText}</button>
    )
}

export default appButton;