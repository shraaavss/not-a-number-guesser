import React, {useState} from "react";
import ThinkDoing from "./Thinking";

export default function UserNum(props){

    const [num, setNum] = useState();

    function numEnt(p){
        const inpNum = document.getElementById("numberEntered");
        setNum(inpNum.value);
        p.preventDefault();
    }

    return(

    <div className="papaDiv"> 
        {num? <ThinkDoing name={props.name} numba={num}/> : 
                    <div className="container">
                        <h1 className="question"> Enter a number {`${props.name}`} :)</h1>
                        <form className="takeInput" onSubmit={numEnt}>
                            <input autoFocus type="text" id="numberEntered"/>
                        </form>
                        
                    </div>
        }
    </div>
    )
}