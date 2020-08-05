import React from 'react'

export const Link = ({ className, href, children }) => {
    const onClick = (e) => {

        //use cmd + click to open the link in new tab
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        //this changes the url without full page reload
        window.history.pushState({}, '', href);

        //detect the url changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    )
}

export default Link; 