import React, {useState, useEffect} from 'react';
import findTopWords from "./findTopWords";

/**
 * function take string and analize it
 * translate define number of most used words exept from stoplist
 * render it
 * render input and button submit
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export default function AddWord(props) {

    /**
     * add new word
     * render form to add and button
     * @param e
     */

    function handleChange(e) {
        e.preventDefault()
        const str = e.target.elements.word.value;
        let listArr = findTopWords(str)
        console.log(listArr)

        for (let i = 0; i < listArr.length; i++) {
            fetchFn(listArr[i])

        }

        /**
         * translate word fron input
         * @returns {Promise<void>}
         * @param {String} fetchWord - take one string from input and translate it
         */
        // TODO err bondary app shouldnt riun becose api cant find word in dictionary
        async function fetchFn(fetchWord) {
            try {
                fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${fetchWord}`)
                    .then(r => r.json())
                    .then(json => props.setWords(prevWords => [...prevWords, `${json[0].word}  
             ${json[0].phonetic}  
            ${json[0].meanings[1]['definitions'][0]['definition']} `])
                    )
            } catch (err) {
                console.log(err)
            }
        }


    }


    return (
        <form onSubmit={handleChange}>
            <input type=' text' id='word'/>
            <button type='submit'>Analize text</button>
        </form>
    )
}