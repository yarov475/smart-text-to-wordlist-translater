import React from "react"
import TotranslateList from "./toTranlate";
import AddWord from "./addword";
import SaveWordList from "./saveList";


export default function Glossary() {
    const [words, setWords] = React.useState(['love', 'sex'])
    return (
        <>
            <TotranslateList
                words={words}
            />
            <AddWord
                setWords={setWords}
            />
            <SaveWordList words={words}/>
        </>

    )
}



