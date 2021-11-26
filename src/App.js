import { useState, useEffect } from 'react'
import EzReactTable from 'ez-react-table'
import logo from './logo.svg';
import './App.css';

function App() {

    const [coins, setCoins] = useState([])

    const fetchCoins = async () => {
        try{
            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            const data = await res.json()
            setCoins(data)
        }catch(e){
            alert("API Err")
        }
    }

    useEffect(() => {
        fetchCoins();
    },[]);

    const columns = [
        {
            title: "Name",
            key: "name",
            width: 200,
            render: (value, object) => {
                <div style={{display: "flex", alignItems: "center"}}>
                    <img height="20px" width="20px"  src={object?.image} alt="ccoin"/>
                </div>
            }
        }
    ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
