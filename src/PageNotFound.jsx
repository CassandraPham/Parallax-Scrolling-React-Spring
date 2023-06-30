import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const { pathname } = useLocation();

    return (
        <div id='textblock-container'>
            <p id='textblock-content'>Sorry, we couldn't find what you're looking for! Is the path <code>{pathname}</code> correct?</p>
        </div>
    )
}