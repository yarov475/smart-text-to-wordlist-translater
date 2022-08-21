import React from "react"
import TotranslateList from "./toTranlate";
import AddWord from "./addword";
import SaveWordList from "./saveList";


export default function Glossary() {
    const [words, setWords] = React.useState(['love', 'sex','With food poisoning.'])
    return (
        <>
            <AddWord
                setWords={setWords||'err'}
            />

            <TotranslateList
                words={words}
            />

            <SaveWordList words={words}/>
        </>

    )
}



