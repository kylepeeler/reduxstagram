import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Main = (props) => {
    return (
        <div>
            <h1>
                <Link to="/">Reduxstagram</Link>
            </h1>
            {React.cloneElement(props.children, props)}
        </div>
    );
};

export default Main;