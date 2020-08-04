import React, { useState } from 'react'
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
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
const options = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Blue",
        value: "blue"
    },
    {
        label: "Green",
        value: "green"
    }
]
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            {/* <Accordian items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown options={options} selected={selected} onSelectedChanged={setSelected} /> */}
        </div>
    )
}

export default App;