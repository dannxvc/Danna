import "../css/NavBar.css";
function NavBar() {
    const navItems = [
        "#intro",
        "#about-me",
        "#my-projects",
        "#contact",
    ];
    return ( 
        <nav className="navBar">
            <ul>
                {navItems.map((links,i)=>
                    <li key={i}>
                        <a className="link-nav" href={links}>
                            {links}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
     );
}

export default NavBar;
<nav>

</nav>