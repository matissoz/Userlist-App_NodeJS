import Navbar from "../Navbar/Navbar";
import style from "./Header.module.scss";

type HeaderProps = {
  onModalOpen: (state: boolean) => void;
};

const Header = ({ onModalOpen }: HeaderProps) => {
  return (
    <header className={style.header}>
      <span className={style.header__title}>CRUD</span>
      <Navbar onModalOpen={onModalOpen} />
    </header>
  );
};

export default Header;
