import AppButton from './appButton'

const car = (carsLink) => {
    return (
        <div> 
            <h3>ARE YOU SURE? </h3>
            <p>You want to leave the site to see the (black) car?</p>
            <img src={"images/blackCar.png"} style={{height: "150px", width: "150px"}} />
            <div>
                <AppButton  carsLink={carsLink} buttonColor="white" buttonText="YES" />
                <AppButton  buttonColor="white" buttonText="No" />
            </div>
            <p>*Please remember to wear your seatbelt</p>
        </div>
    )
}

export default car;