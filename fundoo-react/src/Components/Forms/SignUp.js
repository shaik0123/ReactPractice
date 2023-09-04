import React from "react";
import '../../Components/Css/SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologoup from '../../Components/Images/Logo.png';
import SignUpLogo from '../../Components/Images/signuplogo.png';
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { FormControlLabel } from "@mui/material";


function SignUp() {
    return (
        <div className="outer">
            <div className="maindiv">

                <div className="feilds">
                    <div><img src={fundoologoup} className="imgup" alt="logo"></img></div>
                    <h1>Create Your Fundoo Account</h1>
                    <div className="FnLn">
                        <div><TextField className="Fname" label="First name" variant="outlined" required /></div>
                        <div><TextField className="Lname" label="Last name" variant="outlined" required /></div>
                    </div>
                    <div className="email">
                        <TextField className="emailfeild" fullWidth type="Email" label="Email" variant="outlined" required />
                    </div>
                    <div className="p">
                        <p>You can use letters,numbers & periods</p>
                        <p>Use my current email insted</p>
                    </div>
                    <div className="FnLn">
                        <div><TextField id="outlined-p" type="password" label="Password" variant="outlined" required /></div>
                        <div><TextField className="conpass" id="outlined-cp" type="password" label="Confirm Password" variant="outlined" required /></div>
                    </div>
                    <div className="showpass">
                        <p>Use 8 or more characters with a mix of letters,numbers &symbols</p>
                        <FormControlLabel control={<Checkbox />} label="Show Password" />
                    </div>
                    <div className="btns">
                        <div><Link className="Link" to="/SignIn">Sign in insted</Link></div>
                        <div><Button variant="contained">Next</Button></div>
                    </div>
                </div>
                <div className="img">
                    <img src={SignUpLogo} alt="logo"></img>
                    <p>One account. All of Google working for you.</p>
                </div>
            </div>
        </div>
    )
}
export default SignUp