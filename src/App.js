import {useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import MintInfo from './components/MintInfo';
import Footer from './components/Footer';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
    <div className="App">
    <div className="moving-background">
    <NavBar accounts={accounts} setAccounts={setAccounts} />
    <MainMint accounts={accounts} setAccounts={setAccounts} />
    <MintInfo />
    <div className="footer">
    <Footer />
    </div>
    </div>
    </div>




  </div>

);
}



export default App;
