import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </div>
            </div>

            <Dropdown options={options} selected={language} onSelectedChanged={setLanguage} label="Select language" />

            <hr />

            <h3 className="ui header">Output</h3>
            <Convert language={language} inputText={inputText} />
        </div>
    )
}

export default Translate;
