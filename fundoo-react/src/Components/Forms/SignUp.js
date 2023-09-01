import React from "react";
import '../../Components/Css/SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologoup from '../../Components/Images/Logo.png';
import SignUpLogo from '../../Components/Images/signuplogo.png';
import { Checkbox } from "@mui/material";


function SignUp() {
    return (
        <div className="Regform">

            <form>
                <img className="img"src={fundoologoup} alt="logo"></img>
                <h1>Create Your Fundoo Account</h1>
                <div className="Fn">
                    <TextField id="outlined-fn" label="First name" variant="outlined" required/>
                    <TextField id="outlined-ln" className="Ln" label="Last name" variant="outlined" required/>
                </div>
                <div className="email">
                    <TextField id="outlined" type="Email" label="Email" variant="outlined" required/>
                </div>
                <div>


                </div>
                <p className="p1">You can use letters,numbers & periods</p>

                <div className="pcf">
                    <TextField id="outlined-p" type="password" label="Password" variant="outlined" required/>
                    <TextField className="dob" id="outlined-cp" type="password" label="Confirm Password" variant="outlined" required/>

                    <p>Use 8 or more characters with a mix of letters,numbers &
                        symbols
                    </p>
                    <Checkbox className="ShowPasswordCheckBox" ></Checkbox>Show Password
                </div>
                <div>
                    <a className="signinbtn" href="/SignIn">Sign in insted</a>
                    <Button className="btn" variant="contained">Next</Button>
                </div>
            </form>
            <div>
            <img className="img1" src={SignUpLogo} alt="logo"></img>
            </div>
        </div>
    )
}
export default SignUp