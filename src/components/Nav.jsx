
import navBar from "./Nav.module.css"

function Nav() {
    return <nav className={navBar.nav}>
        <div className={navBar.item}>
            <a>Profile</a>
        </div>
        <div className={navBar.item}>
            <a>Messages</a>
        </div>
        <div className={navBar.item}>
            <a>News</a>
        </div>
        <div className={navBar.item}>
            <a>Music</a>
        </div>
        <div className={navBar.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Nav;