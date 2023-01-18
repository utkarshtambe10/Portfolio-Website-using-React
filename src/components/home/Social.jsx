import React from 'react';

const Social = () => {
    return (
        <div className="home_social">
            <a href="https://linkedin.com/in/utkarshtambe-10" className="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://www.twitter.com/utkarshtambe_10" className="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-twitter"></i>
            </a>

            <a href="https://slack.com/" className="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-slack"></i>
            </a>

            <a href="https://www.github.com/utkarshtambe10" className="home_social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github"></i>
            </a>
        </div>
    );
}

export default Social;