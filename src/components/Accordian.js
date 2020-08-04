import React, { useState } from 'react'

const Accordian = ({ items }) => {
    //state
    const [chosenIndex, setChosenIndex] = useState(null);

    //on click of title
    const onTitleClick = (index) => {
        console.log("title clicked", index);
        setChosenIndex(index);
    }

    const renderedList = items.map((item, index) => (
        <React.Fragment key={item.title}>
            <div className="title active" onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    ))
    return (
        <div className="ui styled accordion">
            {renderedList}
            {chosenIndex}
        </div>
    )
}

export default Accordian;