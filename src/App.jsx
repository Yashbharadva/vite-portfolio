import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/hero";
import About from "./Components/About/About";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
    </div>
  )
}

export default App;