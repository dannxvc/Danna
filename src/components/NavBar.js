import { useRef } from "react";
import { useInView } from "framer-motion";
function NavBar({classNav, onLinkClick}) {
    const ref=useRef(null);
    const isInView = useInView(ref, { once: false});
    const style = {
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      };
    const navItems = [
        "#intro",
        "#about-me",
        "#my-projects",
        "#contact",
    ];    
    return ( 
        <nav 
            className={classNav}
        >
            <ul>
                {navItems.map((links,i)=>
                    <li 
                        key={i}   
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: `all .7s cubic-bezier(0.17, 0.55, 0.55, 1) ${i + 3}00ms`
                        }}  
                    >
                        <a className="link-nav" href={links} onClick={onLinkClick}>
                            {links}
                        </a>
                    </li>
                )}
            </ul>
            <div 
                className="nav-icons"
                ref={ref}
                style={style}   
            >
                    <a href="https://github.com/dannxvc" target="_blank" rel="noreferrer">
                        <svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path fill="var(--icon)" d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/dannxvc/" target="_blank" rel="noreferrer">
                        <svg className="icon-nav" data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/>
                            <path  fill="var(--icon)" d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM183.435,382.667H126.381V203.653h57.054ZM154.908,180.208a32.1,32.1,0,1,1,32.1-32.1A32.1,32.1,0,0,1,154.908,180.208ZM389.2,382.667h-56l0-97.882c0-4.973.785-37.949-27.219-37.949a30.948,30.948,0,0,0-25.681,12.576,39.134,39.134,0,0,0-7.818,23.8v99.451H216.55V203.653h53.216v25.124c12.737-19.541,28.789-26.694,44.578-29.573,28.027-5.11,74.851,11.952,74.851,62.9Z"/>
                        </svg>
                    </a>
                    <a href="mailto:dannavila.1809@gmail.com?Subject=Hi!%20I%20Saw%20your%20portfolio!" target="_blank" rel="noreferrer">
                        <svg className="icon-nav" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--icon)" fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM23.9639 26.0193L14.9987 19.5115V33.23H13.5009C12.6664 33.23 12.0031 32.5667 12.0031 31.7322V16.562C12.0031 16.4985 12.007 16.4389 12.0144 16.3831C12.0416 16.1451 12.1284 15.9122 12.2813 15.7061C12.7734 15.0428 13.7363 14.893 14.421 15.3851L23.9853 22.3391L33.6138 15.2996C34.2771 14.8074 35.2186 14.9572 35.7107 15.6419C35.9723 15.9945 36.0525 16.4256 35.9674 16.8261V31.7536C35.9674 32.5667 35.3041 33.23 34.4697 33.23H32.9719V19.4788L23.9639 26.0193Z" />
                        </svg>
                    </a>
            </div>
        </nav>
     );
}

export default NavBar;
<nav>

</nav>