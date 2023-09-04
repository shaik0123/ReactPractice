import React from "react";
import '../../Components/Css/SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fundoologo from '../../Components/Images/Logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";



function SignIn() {
    const [ userlogin,setuserlogin]=useState({
        email:"",
        password:""
    });
    let name,value;
    const input = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setuserlogin({...userlogin,[name]:value})
    }; 

    const handlelogin = (e) =>{
        console.log(userlogin); 
        alert("user registration successfull");
    };

    return (
        <div className="main">
            <div className="Loginform">
                <img className="imgin"  src={fundoologo} alt="logo"></img>
                <h1>Sign in</h1>

                <p>with your fundoo account</p>
                <div className="emailpassinput">
                    <TextField className="standard-basic"  label="Email" variant="outlined" required name="email" onChange={input} value={userlogin.email} />
                </div>
                <div className="emailpassinput">
                    <TextField className="standard-basic" type="password" label="password" variant="outlined" required name="password" value={userlogin.password} onChange={input}/>
                </div>
                <div className="inputPass">
                    <Link className="anchor" to="">Forgot Password?</Link>
                </div>
                <div className="bottom">
                    <Link className="signupbtn" to="/SignUp">Create account</Link>
                    <Button className="btn" variant="contained"  onClick={handlelogin}>Login</Button>
                </div>
            </div>
        </div>
    )
}
export default SignIn