import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import card1 from "./images/card1.png"


export default function App() {
    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <Card
                img = {card1}
                status = "SOLD OUT"
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title = "Life Lessons with Katie Zafares"
                price = {136}
            />


        </div>
    )
}