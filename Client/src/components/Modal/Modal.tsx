import { ReactNode } from "react";

import style from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => (
  <div className={style.modal} onClick={() => onClose()}>
    <div onClick={(e) => e.stopPropagation()} className={style.modal__body}>
      {children}
    </div>
  </div>
);

export default Modal;
