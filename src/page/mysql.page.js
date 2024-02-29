import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import WhyMSsql from "../components/mssql.why";
import MySqlMainTitle from "../components/mysql.maintitle";
import MYsqlFeatures from "../components/mysql.features";

const MySqlPage = () => {
    return (
        <>
        <Navbar />
        <MySqlMainTitle />
        <br></br>
        <WhyMSsql />
        <br></br>
        <br></br>
        <MYsqlFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default MySqlPage