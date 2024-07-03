import { useState } from "react";

const Spellcheck =()=>{

    const customDictionary ={   teh: "the",
                                wrok: "work",
                                fot: "for",
                                exampl: "example" }
    
    const [inputText, setInputText]=useState('');
    const [suggestedText,setSuggestedText]=useState('');

    function handleChange(e){
        const text=(e.target.value);
        setInputText(text);

        const words = text.split(" "); //splits it into an array of words
        const correctedWords=words.map((word)=>{
            const correctedWord= customDictionary[word.toLowerCase()];
            return correctedWord || word
          })
        const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
        const firstCorrection = correctedWords.find((word, index) => word !== words[index]);
        setSuggestedText(firstCorrection || "");
    };
    
    return(
        <div>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea value={inputText} placeholder="Enter text..." onChange={handleChange}
            rows={5} cols={40}/>

            {suggestedText && (<p>Did you mean: <strong>{suggestedText}</strong>?</p> )}
        </div>
    )
}
export default Spellcheck;