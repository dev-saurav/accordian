import React from 'react'
import Accordian from './components/Accordian';
import Search from './components/Search';

const items = [
    {
        title: "What is React?",
        content: "React is frontend js library"
    },
    {
        title: "How to use React",
        content: "Use react by creating components"
    },
    {
        title: "Why use React?",
        content: "React is amazing js library"
    }
]

const App = () => {
    return (
        <div>
            {/* <Accordian items={items} /> */}
            {/* <Search /> */}
        </div>
    )
}

export default App;