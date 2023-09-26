import React, { useState } from 'react'
import './Home.css'
import TextArea from '../components/TextArea/textArea'
import ButtonArea from '../components/buttonArea/ButtonArea'

const Home = () => {
    const [text, setText] = useState('');
    return (
        <div className='Home'>
            <TextArea text={text} />
            <ButtonArea text={text} setText={setText} />
        </div>
    )
}

export default Home