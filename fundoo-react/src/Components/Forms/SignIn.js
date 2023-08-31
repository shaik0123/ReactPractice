import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import fundoologo from './Components/Images/Logo.png';



function SignIn() {
    return (
        <div className="form"><form>

            <h1>Sign in</h1>

            <p>with your google account</p>
            <div className="input">
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" type="password" label="password" variant="standard" />
            </div>
            <a className="anchor">Forgot Email?</a>
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            <a className="anchor">Learn more</a>
            <div >
                <Button variant="text">Creat account</Button>
                <Button className="btn" variant="contained">Next</Button>
            </div>
        </form>
        </div>
    )
}
export default SignIn