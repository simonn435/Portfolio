import React, {useEffect, useState} from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.scrollY);
        };
    }, [scroll]);

    return (
        <>
            <Navbar />
            <Hero scroll={scroll} />
            <About scroll={scroll} />
            <Projects scroll={scroll} />
        </>
    );
}

export default App;
