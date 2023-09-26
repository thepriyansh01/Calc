import React from 'react'
import './ButtonArea.css'
import Button from '../button/button';

const ButtonArea = ({ text, setText }) => {
    let nums = [
        'C', 'X', '%', '/',
        7, 8, 9, '*',
        4, 5, 6, '-',
        1, 2, 3, '+',
        '∞', 0, '.', '=',
    ];

    let click = (num) => {
        if (num === '∞') return;
        if (num === 'C') {
            setText('');
            return;
        }
        if (num === 'X') {
            setText(text.slice(0, -1));
            return;
        }
        if (num === '=') {
            let ans = eval(text).toString();
            setText(ans);
            return;
        }
        setText(text + num);
    }

    return (
        <div className='ButtonArea'>
            {nums.map((num, i) => {
                return (
                    <div key={i} onClick={()=>click(num)}>
                        <Button value={num} />
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonArea