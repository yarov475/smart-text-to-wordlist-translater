import React from "react";

export default function SaveWordList(props){
    /**
     * Save the state
     */
    function saveList(){
        console.log(props.words)
    }
    return(

        <>
        <button onClick={saveList}>Save list </button>
        </>
    )
}
