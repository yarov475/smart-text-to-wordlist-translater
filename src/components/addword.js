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
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

        let listArr = findTopWords(str)
        console.log(listArr + 'founded top 10 words')

        for (let i = 0; i < listArr.length; i++) {
            if (listArr[i]) {
                fetchFn(listArr[i], url)
            } else {
                props.setWords(prevWords => [...prevWords, 'pass']);
            }

        }

        /**
         * translate word fron input
         * @returns {Promise<void>}
         * @param {String} fetchWord - take one string from input and translate it
         */
        // TODO err bondary app shouldnt riun becose api cant find word in dictionary


        async function fetchFn(fetchWord, url) {
            try {
                 fetch(`${url}${fetchWord}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        return 'not a word'
                        // return Promise.reject('some other error: ' + response.status)
                    }
                })
                .then(json => props.setWords(prevWords => [...prevWords, `${json[0].word}  
             ${json[0].phonetic || '-'}
             ${json[0].meanings}  
                        
             `])
                )
            }catch(err){console.log(err)}



            // .catch(error => console.log('error is', error))
        }


    }


    return (
        <form onSubmit={handleChange}>
            <textarea cols='40' rows='40' className='inputForm' id='word'/>
            <button type='submit'>Analize text</button>
        </form>
    )
}