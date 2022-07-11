import NavBarHead from "./navbar";
import Home from "./Home";
import React from "react";


import Samples from "./samples";
import Equipment from "./equipment";
import FAQ from "./faq"
import Quote from "./quote";
import SampleOne from "./sampleone";
import SampleTwo from "./sampletwo";
import SampleThree from "./samplethree";
import SampleFour from "./samplefour";
import SampleFive from "./samplefive";
import SampleSix from "./samplesix"
import Contacter from "./contactpage";
import Footer from "./footer";
import {BrowserRouter as Router, HashRouter, Routes, Route} from 'react-router-dom'


function App(){
    return(
<Router >
    <div>
        <NavBarHead />

        
<Routes>
            <Route path="/" element={<Home />}></Route>
        
            <Route path="/contact" element={<Contacter />}></Route>
            <Route path="/samples" element={<Samples />}></Route>  
            <Route path="/equipment" element={<Equipment/>}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/quote" element={<Quote />}></Route>
            <Route path="/sampleone" element={<SampleOne />}></Route>
            <Route path="/sampletwo" element={<SampleTwo />}></Route>
            <Route path="/samplethree" element={<SampleThree />}></Route>
            <Route path="/samplefour" element={<SampleFour />}></Route>
            <Route path="/samplefive" element={<SampleFive />}></Route>
            <Route path="/samplesix" element={<SampleSix />}></Route>
            </Routes>
        <Footer />
    </div>

    </Router>
    );
}


export default App;