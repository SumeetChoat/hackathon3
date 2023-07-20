import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
    const styles = ({isActive}) => ({
        textDecoration: isActive ? "underline" : "none"
    });

    return(
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/pokepage" style={styles}>Pokemon</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>

    )
};


