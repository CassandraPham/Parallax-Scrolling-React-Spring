import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="." className={({ isActive }) => isActive ? styles.activeLink : undefined}>Witch</NavLink>
            <NavLink to="helicopter" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Helicopter</NavLink>
        </div>
    );
}