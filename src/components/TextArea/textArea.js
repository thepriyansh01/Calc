import React from 'react'
import './textArea.css'

const TextArea = ({text}) => {
    return (
        <div>
            <div className='textArea'>{text}</div>
        </div>
    )
}

export default TextArea