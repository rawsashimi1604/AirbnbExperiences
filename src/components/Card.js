import React from "react"
import { FaStar } from "react-icons/fa"


export default function Card(props) {

    const iconStyle = {
        color: "red",
        marginRight: "4px",
        paddingTop: "2px"
    }

    return (
        <section className="card">
            <img src={props.img}></img>
            
            <span className="card-status">{props.status}</span>

            <div className="card-subtitle">
                <FaStar style={iconStyle}/>
                <span className="card-rating">{props.rating}</span>
                <span className="card-reviews gray">({props.reviewCount}) . </span>
                <span className="card-country gray">{props.country}</span>
            </div>

            <span className="card-title">
                {props.title}
            </span>

            <div className="card-price">
                <span className="card-dollars-price">From ${props.price}</span> / person
            </div>
        </section>
    )
}