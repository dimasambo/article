import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div className={s.header}>
        <div className={s.logoName}>
            <span>ARTICLES</span>
        </div>
        <nav>
            <NavLink to='/catalog' activeClassName={s.active} className={s.navLink}>
                <div className={s.item}>
                    Catalog
                </div>
            </NavLink>
        </nav>
    </div>
}

export default Header;