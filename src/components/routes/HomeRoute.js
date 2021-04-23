import React from "react";
import Hero from "../Hero";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const HomeRoute = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    );
};

export default HomeRoute;
