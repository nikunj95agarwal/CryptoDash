import { Component, useState } from 'react'; // Import useState hook if not already imported
import { Select } from "@mui/material";
import "../css/Header.css";
export default class Header extends Component {
  render() {
      return (
   
  <div className="appbar">
      <div className="logo">
      <div>
                <nav >
                    <div >

                        <select className='select' name='selectCoin'
                             onChange={this.props.handle_Submit}>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                        </select>

                        

                    </div>
                </nav>
            </div>      </div>
      <div className="right_bar">

    <p className='head_right'> CRYPTODASHBOARD</p> 
        
      </div>
    </div>
  
  );
  }
  
}