import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Convert = ({ language, inputText }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(inputText);
    //useEffect for the inputText
    useEffect(() => {

        const timeOutId = setTimeout(() => {
            setDebouncedText(inputText)
        }, 1000);

        //cleanup function
        return () => {
            clearTimeout(timeOutId);
        }
    }, [inputText]);
    //useEffect for the debounced text and language

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        }
        if (debouncedText) {
            doTranslation();
        }

    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert;
