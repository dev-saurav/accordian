import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const [currPath, setCurrPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrPath(window.location.pathname);
        }
        //listen to popstate event
        window.addEventListener('popstate', onLocationChange);
        //cleanup
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);
    return currPath === path ? children : null;
}

export default Route;