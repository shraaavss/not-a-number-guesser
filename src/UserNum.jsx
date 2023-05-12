import React from "react";

export default function UserNum(props){
    
    return(
        <div className="container">
            <h1 className="question"> Enter a number {`${props.name}`} :)</h1>
            <form className="takeInput">
                <input autoFocus type="text" id="username"/>
            </form>
        </div>
    )
}