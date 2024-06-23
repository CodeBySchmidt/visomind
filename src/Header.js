import logo from './logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
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
                Test Link A
            </a>
            <a className="header-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer">
                Test Link B
            </a>
            <a className="header-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer">
                Test Link C
            </a>
        </header>
    );
}

export default Header;