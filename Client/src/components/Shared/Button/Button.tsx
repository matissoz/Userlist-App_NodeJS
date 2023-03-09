import { ReactNode } from 'react'

import style from './Button.module.scss'


type ButtonStyleType = 'primary' | 'secondary' | 'tertiary' | 'delete'

type Props = {
    children: ReactNode
    onClick?: () => void
    disabled?: boolean
    BtnStyle?: ButtonStyleType
}


const Button = ({ 
    children,
    onClick,
    disabled,
    BtnStyle = 'primary'
}: Props) => {

    const getButtonClass = (BtnStyle: ButtonStyleType) => {
        switch(BtnStyle) {
            case 'secondary':
                return 'secondary';
            case 'tertiary':
                return 'tertiary';
            case 'delete':
                return 'delete';
            default:
                return 'primary'
        }
    }
    
    
    return (
        <button
            className={`${style.button} ${style[getButtonClass(BtnStyle)]}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )

};


export default Button;