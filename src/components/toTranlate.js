import React from "react";


/**
 * Render list  of words to lesrn
 * @param words String
 * @returns {JSX.Element}
 * @constructor
 */
 export default  function Totranslate({words}) {

    return (
        <ul>
            {words.map((word)=>(
                <li key = {word} > {word}</li>
                ))}
        </ul>
    );
}