import React from "react";
import '../../Components/Css/SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologo from '../../Components/Images/Logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { signin } from "../../Services/UserServices";



function SignIn() {
    const [userlogin, setuserlogin] = useState({
        email: "",
        password: ""
    });
    let name, value;
    const input = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserlogin({ ...userlogin, [name]: value })
    };
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [errorObj, setErrorObj] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
    })

    const handlelogin = async(event) => {
        event.preventDefault();
        // console.log(userlogin);
        // alert("user registration successfull");
        let emailTest = emailRegex.test(userlogin.email);
        let passwordTest = passwordRegex.test(userlogin.password);
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
        console.log(userlogin)
        if( emailTest === true && passwordTest === true){
            let response = await signin(userlogin);
            console.log(response);
            localStorage.setItem("token",response.data.data);
            setTimeout(() => {
                 window.location.reload()
            }, 2000);
            

        }
    };

   

    return (
        <div className="main">
            <div className="Loginform">
                <img className="imgin" src={fundoologo} alt="logo"></img>
                <h1>Sign in</h1>

                <p>with your fundoo account</p>
                <div className="emailpassinput">
                    <TextField className="standard-basic" label="Email" variant="outlined" required name="email" onChange={input} value={userlogin.email} error={errorObj.emailError} helperText={errorObj.emailHelper} />
                </div>
                <div className="emailpassinput">
                    <TextField className="standard-basic" type="password" label="password" variant="outlined" required name="password" value={userlogin.password} error={errorObj.passwordError} helperText={errorObj.passwordHelper} onChange={input} />
                </div>
                <div className="inputPass">
                    <Link className="anchor" to="">Forgot Password?</Link>
                </div>
                <div className="bottom">
                    <Link className="signupbtn" to="/SignUp">Create account</Link>
                    <Button className="btn" variant="contained" onClick={handlelogin}>Login</Button>
                </div>
            </div>
        </div>
    )
}
export default SignIn