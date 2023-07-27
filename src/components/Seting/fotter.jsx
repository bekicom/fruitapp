import React from 'react';
import "./fotter.css"
import img from "../img/arrow-left-circle.png"
const Fotter = () => {
    return (
        <div>
            <div className="section1">
            <div className="chap">
                <img src={img} alt="" />
            </div>
            <div className="orta">
                <h1>Setting</h1>
            </div>
            <div className="ong">
                <img src={require('../img/search.png')} alt="" />
            </div>
            </div>
            <div className="section2">
                <div className="i">
                    <img src={require('../img/image 3.png')} alt="" />
                <input type="text" placeholder='Adimas' /><br />
                </div>
                <input type="text" placeholder='Mail' /><br />
                <input type="text" placeholder='Contact' /><br />
                <input type="text" placeholder='Address' />
            </div>

            {/* <div className="section3">
                <img src={require('../img/home.png')} alt="" />
                <img src={require('../img/bell.png')} alt="" />
                <img src={require('../img/mid button.png')} alt="" />
                <img src={require('../img/shopping-cart.png')} alt="" />
                <img src={require('../img/settings.png')} alt="" />
            </div> */}
        </div>
    );
}

export default Fotter;