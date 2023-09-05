import React, { useState } from "react";
import '../../Components/Css/SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologoup from '../../Components/Images/Logo.png';
import SignUpLogo from '../../Components/Images/signuplogo.png';
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { FormControlLabel } from "@mui/material";


function SignUp() {

    const [userSignUp, setuserSignUp] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    let names, values;
    const signupinput = (e) => {
        names = e.target.name;
        values = e.target.value;
        setuserSignUp({ ...userSignUp, [names]: values })
    };
    const firstnameRegex = /^[a-zA-Z ]{2,30}$/;
    const lastnameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const confirmpasswordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const [errorObj, setErrorObj] = useState({
        firstnameError:false,
        firstnameHelper:"",
        lastnameError:false,
        lastnameHelper:"",
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
        confirmpasswordError:false,
        confirmpasswordHelper:""
    })

    const handlesignup = (e) => {
        // console.log(userSignUp);
        // alert("user registration successfull");
        let firstnameTest = firstnameRegex.test(userSignUp.firstname);
        let lastnameTest = lastnameRegex.test(userSignUp.lastname);
        let emailTest = emailRegex.test(userSignUp.email);
        let passwordTest =passwordRegex.test(userSignUp.password);
        let confirmpasswordTest = confirmpasswordRegex.test(userSignUp.comfirmpassword);
        if (firstnameTest == false) {
            setErrorObj((prev) => ({
                ...prev,
                firstnameError: true,
                firstnameHelper: "enter correct first name"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                firstnameError:false,
                firstnameHelper: ""
            }));

        }
        if (lastnameTest == false) {
            setErrorObj((prev) => ({
                ...prev,
                lastnameError: true,
                lastnameHelper: "enter correct last name"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                lastnameError:false,
                lastnameHelper: ""
            }));

        }
        if (emailTest == false) {
            setErrorObj((prev) => ({
                ...prev,
                emailError: true,
                emailHelper: "enter correct email"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                emailError:false,
                emailHelper: ""
            }));

        }
        if (passwordTest == false) {
            setErrorObj((prev) => ({
                ...prev,
                passwordError: true,
                passwordHelper: "enter correct password"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                passwordError:false,
                passwordHelper: ""
            }));

        }
        if (confirmpasswordTest == false) {
            setErrorObj((prev) => ({
                ...prev,
                confirmpasswordError: true,
                confirmpasswordHelper: "enter correct password"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                confirmpasswordError:false,
                confirmpasswordHelper: ""
            }));

        }
        console.log(userSignUp);
    }
    return (
        <div className="outer">
            <div className="maindiv">
                <div className="feilds">
                    <div><img src={fundoologoup} className="imgup" alt="logo"></img></div>
                    <h1>Create Your Fundoo Account</h1>
                    <div className="FnLn">
                        <div><TextField className="Fname" label="First name" variant="outlined" required name="firstname" value={userSignUp.firstname} onChange={signupinput} error={errorObj.firstnameError} helperText={errorObj.firstnameHelper} /></div>

                        <div><TextField className="Lname" label="Last name" variant="outlined" required name="lastname" value={userSignUp.lastname} onChange={signupinput} error={errorObj.lastnameError} helperText={errorObj.lastnameHelper}/></div>
                    </div>
                    <div className="email">
                        <TextField className="emailfeild" fullWidth type="Email" label="Email" variant="outlined" required name="email" value={userSignUp.email} onChange={signupinput} error={errorObj.emailError} helperText={errorObj.emailHelper}/>
                    </div>
                    <div className="p">
                        <p>You can use letters,numbers & periods</p>
                        <p>Use my current email insted</p>
                    </div>
                    <div className="FnLn">
                        <div><TextField id="outlined-p" type="password" label="Password" variant="outlined" required name="password" value={userSignUp.password} onChange={signupinput} error={errorObj.passwordError} helperText={errorObj.passwordHelper}/></div>

                        <div><TextField className="conpass" id="outlined-cp" type="password" label="Confirm Password" variant="outlined" required name="comfirmpassword" value={userSignUp.comfirmpassword} onChange={signupinput} error={errorObj.confirmpasswordError} helperText={errorObj.confirmpasswordHelper}/></div>
                    </div>
                    <div className="showpass">
                        <p>Use 8 or more characters with a mix of letters,numbers &symbols</p>
                        <FormControlLabel control={<Checkbox />} label="Show Password" />
                    </div>
                    <div className="btns">
                        <div><Link className="Link" to="/SignIn">Sign in insted</Link></div>
                        <div><Button variant="contained" onClick={handlesignup}>Next</Button></div>
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