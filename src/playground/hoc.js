// HIGHER ORDER COMPONENT (HOC)
// A COMPONENT (HOC) THAT RENDERS ANOTHER COMPONENT(S)
// REUSE CODE
// RENDER HIJACKING
// PROP MANIPULATION
// ABSTRACT STATE

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? ( <WrappedComponent {...props} /> ) : ( <p>Please Login to see info</p> )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('id'));
ReactDom.render(
    <AuthInfo isAuthenticated={true} info="These are the details" />, 
    document.getElementById('id')
);