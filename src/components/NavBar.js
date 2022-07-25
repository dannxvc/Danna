function NavBar({classNav}) {
    const navItems = [
        "#intro",
        "#about-me",
        "#my-projects",
        "#contact",
    ];
    return ( 
        <nav className={classNav}>
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