import React from "react";
import '../../Components/Css/SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologoup from '../../Components/Images/Logo.png';
import SignUpLogo from '../../Components/Images/signuplogo.png';




function SignUp() {
    return (
        <div className="Regform">

            <form>
                <img src={fundoologoup} alt="logo"></img>
                <h1>Create Your Fundoo Account</h1>
                <div className="Fn">
                    <TextField id="outlined-basic" label="First name" variant="outlined" />
                    <TextField id="outlined-basic" className="Ln" label="Last name" variant="outlined" />
                </div>
                <div className="email">
                    <TextField id="outlined" type="Email" label="Email" variant="outlined" />
                </div>
                <div>


                </div>
                <p>You can use letters,numbers & periods</p>

                <div >
                    <TextField id="outlined-password" type="password" label="Password" variant="outlined" />
                    <TextField className="dob" id="outlined-basic" type="password" label="Confirm Password" variant="outlined" />

                    <p>Use 8 or more characters with a mix of letters,numbers &
                        symbols
                    </p>
                </div>
                <div>
                    <a className="signinbtn" href="/SignIn.js">Sign in insted</a>
                    <Button className="btn" variant="contained">Register</Button>
                </div>
            </form>
            <div>
            <img className="img1" src={SignUpLogo} alt="logo"></img>
            </div>
        </div>
    )
}
export default SignUp