import React from "react";
import "./Delivery Address.css"
import img from './img/arrow-left-circle.png'
const DeliveryAddress = () => {
    return (
<div className="section1">
            <div className="chap">
                <img src={img} alt="" />
            </div>
            <div className="orta">
                <h1>Delivery Address</h1>
            </div>
            <div className="ong">
                <img src={require('./img/search.png')} alt="" />
            </div>
            </div>
    );
}

export default DeliveryAddress;
