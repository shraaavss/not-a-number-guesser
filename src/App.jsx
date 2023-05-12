import React from "react";

export default function App(){
    
    return(
            <div className="papaDiv">
                <h1 className="question"> What's Your Name? </h1>
                <form className="takeInput">
                    <input autoFocus type="text" id="username"/>
                </form>
            </div>
    )
}

// condition ? exprIfTrue : exprIfFalse ==> Ternary Operator