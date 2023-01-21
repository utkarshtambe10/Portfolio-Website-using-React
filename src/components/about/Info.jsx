import React from 'react';

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="bx bx-award about_icon"></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle"><b>7</b> Months Working <br /> (Internship)</span>
            </div>

            <div className="about_box">
                <i className="bx bx-briefcase-alt about_icon"></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle"><b>5+</b> Projects</span>
            </div>

            <div className="about_box">
                <i className="bx bx-support about_icon"></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">Online <b>9/5</b></span>
            </div>
        </div>
    );
}

export default Info;