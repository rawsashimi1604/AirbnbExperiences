import React from "react"
import cardImg from "../images/card1.png"
import { FaStar } from "react-icons/fa"


export default function Card() {

    const iconStyle = {
        color: "red",
        marginRight: "4px",
        paddingTop: "2px"
    }

    return (
        <section className="card">
            <img src={cardImg}></img>
            
            <span className="card-status">SOLD OUT</span>

            <div className="card-subtitle">
                <FaStar style={iconStyle}/>
                <span className="card-rating">5.0</span>
                <span className="card-reviews gray">(6) . </span>
                <span className="card-country gray">USA</span>
            </div>

            <span className="card-title">
                Life lessons with Katie Zaferes
            </span>

            <div className="card-price">
                <span className="card-dollars-price">From $136</span> / person
            </div>
        </section>
    )
}