import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"

export default function App() {
    const myData = data.map(element => {
        return (
            <Card
                img = {`./images/${element.coverImg}`}
                status = {(element.openSpots) ? "AVAILABLE" : "SOLD OUT"}
                rating = {element.stats.rating}
                reviewCount = {element.stats.reviewCount}
                country = {element.location}
                title = {element.title}
                price = {element.price}
            />
        )
    })

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <section className="cards">
                {myData}
            </section>
            
        </div>
    )
}