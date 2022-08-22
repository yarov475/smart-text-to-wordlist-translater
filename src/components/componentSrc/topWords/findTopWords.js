import React from "react";
import {stickyWords} from "./stickyWords";

/**
 * find top words with stopwords
 * @param str: String
 */

export default function findTopWords(str) {
    let occur = nthMostCommon(str, 10);
    return occur


    function nthMostCommon(str, amount) {


        str = str.toLowerCase().replace(/[^0-9a-z]/gi, ' ');
        const splitUp = str.split(/\s/);
        const wordsArray = splitUp.filter(function (x) {
            return !stickyWords.includes(x);
        });
        const wordOccurrences = {};
        let arr = [];
        for (const item of wordsArray) {
            wordOccurrences['_' + item] = (wordOccurrences['_' + item] || 0) + 1;
        }
        const result = Object.keys(wordOccurrences).reduce(function (acc, currentKey) {
                /* you may want to include a binary search here */
                for (let i = 0; i < amount; i++) {
                    if (acc[i]) {
                        if (acc[i].occurences < wordOccurrences[currentKey]) {
                            acc.splice(i, 0, {
                                word: currentKey.slice(1, currentKey.length),
                                occurences: wordOccurrences[currentKey]
                            });
                            if (acc.length > amount) {
                                acc.pop();
                            }
                            break;
                        }
                    } else {
                        acc[i] = {word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey]};
                        break;
                    }
                }
                return acc;
            },
            []);
        let list = []
        for (const item of result) {
            list.push(item['word'])
        }

        return list;
    }

}

