import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <Card
                img = "./images/card1.png"
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