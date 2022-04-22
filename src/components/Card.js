import React from "react"
import cardImg from "../images/card1.png"
import { FaStar } from "react-icons/fa"


export default function Card() {
    return (
        <section className="card">
            <img src={cardImg}></img>
            
            <span className="card-status">SOLD OUT</span>

            <div className="card-subtitle">
                <FaStar/>
                <span className="card-rating">5.0</span>
                <span className="card-reviews">(6).</span>
                <span className="card-country">USA</span>
            </div>

            <span className="card-title">
                Life lessons with Katie Zaferes
            </span>

            <div className="card-price">
                From $<span className="card-dollars-price">136</span> / person
            </div>
        </section>
    )
}