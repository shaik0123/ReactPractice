import React from "react";
import '../../Components/Css/SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologo from '../../Components/Images/Logo.png';


function SignIn() {
    return (
        <div className="form">
            <img className="imgin " src={fundoologo} alt="logo"></img>
            <h1>Sign in</h1>

            <p>with your fundoo account</p>
            <div className="input">
                <TextField className="standard-basic" label="Email" variant="outlined" />
            </div>
            <div className="input">
                <TextField className="standard-basic" type="password" label="password" variant="outlined" />
            </div>
            <div>
                <a className="anchor" href="">Forgot Password?</a>
            </div>
            <div className="bottom">
                <a className="signinbtn" href="/SignUp">Create account</a>
                <Button className="btn" variant="contained">Register</Button>
            </div>
        </div>
    )
}
export default SignIn