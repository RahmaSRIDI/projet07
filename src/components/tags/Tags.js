import React from 'react';
import "./tags.css"
const Tags = (props) => {
    return (
        <div className="tag">
            <p className="tag_text">{props.content}</p>
        </div>
    );
};

export default Tags;
