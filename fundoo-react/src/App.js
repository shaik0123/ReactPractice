import logo from './logo.svg';
//import './App.css';
import SignIn from './Components/Forms/SignIn';
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
    //</div>
    <div className='app'>
    <SignIn/>
    <SignUp/>
    </div>
  );
}

export default App;
