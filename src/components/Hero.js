import React from "react"
import heroImg from "../images/hero.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroImg}></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activies led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
