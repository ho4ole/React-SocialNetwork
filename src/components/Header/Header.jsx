import headerClasses from './Header.module.css'

function Header() {
    return  <header className={headerClasses.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
    </header>
}

export default Header;