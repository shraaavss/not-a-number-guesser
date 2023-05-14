import React, {useState, useEffect} from "react";
// import App from "./App";
import UserNum from "./UserNum";


export default function ThinkDoing(props){

    var brain = ["Connecting to the database...", "Collecting required data...", "Looking into the stars...", "Mining the Earth...", "Catching the brain waves...",
                "Contacting your thoughts...", "Checking the libraries...", "Flipping the pages...", "Calculating probabilities...", "Checking the storage...", "Hacking your phone..."];
    
    const randomElement = brain[Math.floor(Math.random() * brain.length)];
    const randomElement2 = brain[Math.floor(Math.random() * brain.length)];
    const randomElement3 = brain[Math.floor(Math.random() * brain.length)];

    const [BrainContent, SetBrainContent] = useState("Hmm, let me see what I can do...");

    useEffect(()=> {
        setTimeout(() => {
            SetBrainContent(randomElement);
        }, 2000);

        setTimeout(() => {
            SetBrainContent(randomElement2);
        }, 4000);


        setTimeout(() => {
            SetBrainContent(randomElement3)
        }, 6000);

        setTimeout(() => {
            SetBrainContent(<span>The number you're thinking of is: {props.numba}</span>);     
        }, 8000);

    }, []);

    return(
        <div className="container">
            <div className="brainrot">{BrainContent}</div>
        </div>
    )
}