import { ReactNode } from 'react'

import style from './Modal.module.scss'


type Props = {
    children: ReactNode
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ 
    children,
    openModal,
    setOpenModal
}: Props) => { 
        
    
    if (!openModal) {
        return <></>;
    }


    return (
        <div 
            className={style.modal} 
            onClick={() => setOpenModal(false)}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className={style.modal__body}
            >   
                {children}
            </div>
        </div>
    )
}


export default Modal;