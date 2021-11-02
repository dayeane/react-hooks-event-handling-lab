// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(props) {
    function onFoc() {
     console.log("Good!");   
    }

    function onBlu() {
     console.log("Hey! Eyes on me!");   
    }

    return( 
       <button onFocus={onFoc} onBlur={onBlu}>Eyes on me</button>
    )
}


export default EyesOnMe; 

