
import './Footer.css';
import {Link} from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li> <Link to="/about-us">about us</Link></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li> <a href="#">our services</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li> <a href="#">privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">FAQ</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">Impressum</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">More</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className={"social-links"}>
                            <ul>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a href="#">is this needed?</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a href="#">Git</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;