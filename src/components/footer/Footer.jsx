import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Utkarsh</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://linkedin.com/in/utkarshtambe-10" className="home_social-icon" target="_blank" rel="noreferrer">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/utkarshtambe_10" className="home_social-icon" target="_blank" rel="noreferrer">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/utkarshtambe_10" className="home_social-icon" target="_blank" rel="noreferrer">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer_copy"><b>&#169;</b> Utkarsh Yashwant Tambe ❤️ All Rights Reserved!</span>
            </div>
        </footer>
    );
}

export default Footer;