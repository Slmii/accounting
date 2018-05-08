import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        404. Page not found! - <Link to='/'>Go to Home Page</Link>
    </div>
);

export default NotFound;