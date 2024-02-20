import React, { Component } from 'react'
import "../css/Cardsection.css"
export class CardSection extends Component {
    render() {
        return (
            <div >
                {/* <div className="Coin_name">
                    {this.props.coinName}
                </div> */}
                <section className='section_head'>
                <div className='section_up' style={{display:'flex'}}>

                     <div className="card-body">
                            <h2 className="card-title" >Market Cap 24Hrs</h2>
                            <p className="p1" >
                                {this.props.mCap24} %
                            </p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">All Time High</h2>
                            <p className="p1" >
                                ${this.props.ath}
                            </p>
                        </div>
                        <div className="card-body remove">
                            <h2 className="card-title" >All Time Low</h2>
                            <p  className="p1">
                                ${this.props.atl}
                            </p>
                        </div>
                        </div>
                       <div className='section_bottom' style={{display:'flex'}}>
                        <div className="card-body remove">
                            <h2 className="card-title">Positive Sentiments </h2>
                            <p className="p1" >
                                {this.props.sentiment} %
                            </p>
                        </div>
                        <div className="card-body card-5">
                            <h2 className="card-title" > High 24Hrs </h2>
                            <p  className="p1" style={{color:'greenyellow'}} >
                                ${this.props.high24}
                            </p>
                        </div>
                        <div className="card-body card-6">
                            <h2 className="card-title" > Low 24Hrs </h2>
                            <p  className="p1" style={{color:'red'}} >
                                ${this.props.low24}
                            </p>
                        </div>
                        </div>
                </section>
                <div>
                    <div className="Current_price"> 
                <span style={{color:'gold', fontFamily:'cursive'}}>   {this.props.coinName+ " "} </span>   Current  Price: </div>
                    <div className='price'>
                        ${this.props.currentPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection;