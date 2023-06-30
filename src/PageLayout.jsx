import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

export default function PageLayout() {
    return (
        <>
            <nav>
                <NavBar />
            </nav>

            <div className="container">
                <Outlet />
            </div>
        </>

    );
}