
import navBar from "./Nav.module.css"
import {NavLink} from "react-router-dom";

function Nav() {
    return <nav className={navBar.nav}>
        <div className={navBar.item}>
            <NavLink to={'/profile'} activeClassName={navBar.active}>Profile</NavLink>
        </div>
        <div className={navBar.item}>
            <NavLink to={'/dialogs'} activeClassName={navBar.active}>Messages</NavLink>
        </div>
        <div className={navBar.item}>
            <NavLink to={'/users'} activeClassName={navBar.active}>Users</NavLink>
        </div>
        <div className={navBar.item}>
            <NavLink to={'/news'} activeClassName={navBar.active}>News</NavLink>
        </div>
        <div className={navBar.item}>
            <NavLink to={'/music'} activeClassName={navBar.active}>Music</NavLink>
        </div>
        <div className={navBar.item}>
            <NavLink to={'/settings'} activeClassName={navBar.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav;