import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChanged, label }) => {
    //manage the toggle of dropdown
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const onBodyClick = (e) => {
        //check if the dropdown contains the e.target element 
        //if not then close
        if (ref.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    }

    useEffect(() => {
        document.body.addEventListener('click', onBodyClick);

        //cleanup
        //will work if dropdown is removed
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, []);

    const renderedOptions = options.map((option) => {
        //filter out the option that is selected
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChanged(option)}>
                {option.label}
            </div>
        )
    })
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
