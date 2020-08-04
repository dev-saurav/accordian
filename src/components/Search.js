import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    //useEffect for term 
    //    -> set the debounced term as the term after timeout 
    //    -> if the user types again then reset the timer
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        //clear a timer
        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    //useEffect for debounced term
    //    -> run on first render
    //    -> run only when debounced term changes
    useEffect(() => {
        //api call
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            });
            setResults(data.query.search);
        }
        if (debouncedTerm) {
            search();
        }

    }, [debouncedTerm]);

    //rendering the list
    const renderedResults = results.map(result => (
        <div key={result.pageid} className="item">
            <div className="right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer">Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        </div>
    ));

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        type="text"
                        className="input"
                        value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;
