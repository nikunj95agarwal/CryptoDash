import { Component } from "react";
import "../css/Front.css"
import CardSection from "./Cardsection.jsx";
import ChartSection from "./ChartSection.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
export default class Front extends Component {
    constructor() {
      super();
      this.state = {
        Id: "bitcoin",
        Data: {}
      }
    }
    fetchData = async () => {
      let data = await fetch('https://api.coingecko.com/api/v3/coins/'+ this.state.Id)
      let JsonData = await data.json()
      this.setState({ Id: this.state.Id, Data: JsonData })
    }
    handleSubmit=async(event)=>{
        console.log(event.target.value)
        await this.setState({Id: event.target.value, Data:this.state.Data})
        this.fetchData();
    }
    componentDidMount() {
        this.fetchData()
        this.interval = setInterval(() => this.fetchData(), 2000);
    
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
render(){
return(<>
<div className="Banner">
    {/* <div className="Title">Crypto Dashboard</div> */}
    {/* <div className="Title_under">Live CryptoCurrency Tracking Dashboard</div> */}
    {/* <div className="Trending"></div> */}
    <div>
    <Header handle_Submit = {this.handleSubmit}/>
        <CardSection coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""}
          mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
          ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}
          sentiment={this.state.Data.sentiment_votes_up_percentage} high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""}
          low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"] : ""} />
          <ChartSection Id={this.state.Id} priceChange24={this.state.Data.market_data ? this.state.Data.market_data.price_change_24h_in_currency.usd : ""} 
        MarketCap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.usd  : ""}
        TotVol={this.state.Data.market_data ? this.state.Data.market_data.total_volume.usd  : ""}
        Circulating= {this.state.Data.market_data ? this.state.Data.market_data["circulating_supply"] : ""}
        twitterF = {this.state.Data.community_data ? this.state.Data.community_data.twitter_followers : ""}
        />
      </div>
</div>

</>)


}
}