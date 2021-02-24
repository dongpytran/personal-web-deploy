import React from 'react'
import "./HeadingContent.css"
function HeadingContent({title}) {
    return (
        <div className="headingContent">
            <h1>{title}</h1>
        </div>
    )
}

export default HeadingContent
