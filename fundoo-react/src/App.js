import logo from './logo.svg';
import './App.css';
import SignIn from './Components/Forms/SignIn';
import './Components/Css/SignIn.css';
import fundoologo from './Components/Images/Logo.png';
import SignUp from './Components/Forms/SignUp';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <SignIn/>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='app'>
    <img src={fundoologo} className="logo" width="200px"alt="logo" />
    <SignIn/>
    <SignUp/>
    </div>
  );
}

export default App;
