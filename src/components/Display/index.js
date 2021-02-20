import React from 'react';

const Display = ({title,text}) => {
    return (
        <div>
            <h1 data-testid="title">{title}</h1>
            <p data-testid="text">{text}</p>
        </div>
    );
};

export default Display;