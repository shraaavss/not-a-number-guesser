import React, {useState} from "react";
import UserNum from "./UserNum";
import ThinkDoing from "./Thinking";


export default function App(){

    const [name, setName] = useState();

    function handleSub(e){
        const inp = document.getElementById("username");
        setName(inp.value);
        e.preventDefault(); // prevents from getting reloaded
    }
    
    
    return(
        // <div className="papaDiv">
        //     <div className="container">
        //         <h1 className="question"> What's Your Name? </h1>
        //         <form className="takeInput" onSubmit={handleSub}>
        //             <input autoFocus type="text" id="username"/>
        //         </form>
        //         {/* {console.log(name)} STATES FOR NAME IS WORKING */}
        //     </div>
        // </div>

        <div className="papaDiv">
            {
            name? <UserNum name={name} /> : 
                    <div className="container"> 
                        <h1 className="question"> What's Your Name? </h1>
                        <form className="takeInput" onSubmit={handleSub}>
                            <input autoFocus type="text" id="username"/>
                        </form>
                        {/* {console.log(name)} STATES FOR NAME IS WORKING */}
                    </div>
            
            }
    </div>

    )
}

// condition ? exprIfTrue : exprIfFalse ==> Ternary Operator