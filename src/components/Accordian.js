import React, { useState } from 'react'

const Accordian = ({ items }) => {
    //state
    const [chosenIndex, setChosenIndex] = useState(null);

    //on click of title
    const onTitleClick = (index) => {
        setChosenIndex(index);
    }

    const renderedList = items.map((item, index) => {
        //check if chosen index then apply the active class
        const activeClass = index === chosenIndex ? "active" : '';
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${activeClass}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeClass}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedList}
        </div>
    )
}

export default Accordian;