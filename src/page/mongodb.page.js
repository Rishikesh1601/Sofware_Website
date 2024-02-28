import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import MongoDBMainTitle from "../components/mongodb.maintitle";
import WhyMongoDB from "../components/mongodb.why";
import MongoDBFeatures from "../components/mongodb.features";

const MongoDBPage = () => {
    return(
        <>
        <Navbar />
        <MongoDBMainTitle />
        <br></br>
        <WhyMongoDB />
        <br></br>
        <br></br>
        <MongoDBFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default MongoDBPage