import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <p>Podana strona nie istnieje! Wróć do <Link to="/task02">strony głównej</Link>.</p>
        </>
    );
}
export default NotFound;