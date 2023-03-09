import Navbar from '../Navbar/Navbar';
import style from './Header.module.scss'


const Header = () => {

    
    return (
        <header className={style.header}>
            <span className={style.header__title}>
                CRUD
            </span>
            <Navbar/>
        </header>
    )
}


export default Header;