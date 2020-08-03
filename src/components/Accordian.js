import React from 'react'

const Accordian = ({ items }) => {

    //on click of title
    const onTitleClick = (index) => {
        console.log("title clicked", index)
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
        </div>
    )
}

export default Accordian;