import AppButton from './appButton'

const car = () => {
    return (
        <div> 
            <h3>ARE YOU SURE? </h3>
            <p>You want to leave the site to see the (black) car?</p>
            <img src="../images/redCar.png" />
            <div>
                <AppButton buttonColor="red" buttonText="YES" />
                <AppButton buttonColor="blue" buttonText="No" />
            </div>
            <p>*Please remember to wear your seatbelt</p>
        </div>
    )
}

export default car;