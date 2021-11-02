// Code Keypad Component Here
 import React from "react";

 function Keypad(props) {
     function handleChange(e) {
      console.log("Entering password...");   
     }

     return( 
        <div>
            <label for="password">password: </label>
            <input id="password" type="password" onChange={handleChange} />
        </div>
     )
 }


 export default Keypad; 
