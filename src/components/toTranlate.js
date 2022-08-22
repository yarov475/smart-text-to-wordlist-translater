import React, {useEffect} from "react";


/**
 * Render list  of words to lesrn
 * @param words String
 * @returns {JSX.Element}
 * @constructor
 */
export default function Totranslate({words}) {
    useEffect(() => {
        console.log(words + 'useEfect')
    }, [words])
    return (
        <div className='listWord'>

            <ul>
                {words.map((word) => (
                    <li className='item' key={word}> {word}
                        <button>DELETE</button>
                    </li>
                ))}

            </ul>
        </div>
    );
}