import React from 'react'

interface ButtonProps {
    text: string,
    border?: boolean,
    background?: string,
    size?: string,
    bg?: string,
}

const ButtonComponent = ({text,background,bg,size}:ButtonProps) => {
    const backgroundColor = bg ? bg : 'bg-purple-950'
    const sz = size ? size : 'p-2'
    return (
        <button 
            className={`
                min-w-40
                ${sz}
                ${backgroundColor}
                text-white 
            `}
        >
            {text}
        </button>
    )
}

export default ButtonComponent