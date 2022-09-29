import React from 'react';

const Break = (props) => {

    return (
        <div>
            <li onClick={() => props.loadBreakTime(props.breaks)}><a>{props.breaks.time}sec</a></li>
        </div>
    );
};

export default Break;