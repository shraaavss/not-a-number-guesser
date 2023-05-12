import React, {useState} from "react";

export default function App(){

    const [name, setName] = useState();

    function handleSub(){
        const inp = document.getElementById("username");
        setName(inp.value);
        // console.log(name);
    }
    
    
    return(
        <div className="papaDiv">
            <h1 className="question"> What's Your Name? </h1>
            <form className="takeInput" onSubmit={handleSub}>
                <input autoFocus type="text" id="username"/>
            </form>
            {/* {console.log(name)} STATES FOR NAME IS WORKING*/}
        </div>

    )
}

// condition ? exprIfTrue : exprIfFalse ==> Ternary Operator