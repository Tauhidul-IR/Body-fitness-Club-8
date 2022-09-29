import React from 'react';

const Break = (props) => {
    console.log(props)
    return (
        <div>
            <li><a>{props.breaks.time}sec</a></li>
        </div>
    );
};

export default Break;