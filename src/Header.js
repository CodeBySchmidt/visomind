import logo from './logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-group-left">
                <a
                    className="header-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={logo} className="header-logo" alt="logo"/>
                </a>
                <a className="header-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Link
                </a>
            </div>
            <div className="header-group-right">
                <a className="header-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Abouts Us
                </a>
                <a className="header-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Contacts Us
                </a>
            </div>

        </header>
    );
}

export default Header;