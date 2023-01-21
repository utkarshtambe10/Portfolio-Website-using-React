import React, { useState } from 'react';
import './qualifications.css';

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal Journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">SRM Institute of Science & Technology, Chennai</h3>
                                <span className="qualification_subtitle">Bachelors in Computer Science & Engineering w/s in Big Data Analytics</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> September, 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Pratibha Junior College, Chinchwad</h3>
                                <span className="qualification_subtitle">Higher Sec. School Certificate (12th)</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> July, 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">SPM English School, Nigdi</h3>
                                <span className="qualification_subtitle">Secondary School Certificate (10th)</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> June, 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Committee Head - Finance</h3>
                                <span className="qualification_subtitle">Aaruush, SRM University, Chennai</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> June, 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Data Science Intern</h3>
                                <span className="qualification_subtitle">LetsGrowMore, Chennai</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> October, 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Taiwan-India Lab Research Assistant</h3>
                                <span className="qualification_subtitle">SRMIST, Chennai</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> March, 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Undergraduate Research Assistant</h3>
                                <span className="qualification_subtitle">SRMIST, Chennai</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> February, 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Development & Designing Intern</h3>
                                <span className="qualification_subtitle">The Sparks Foundation, Singapore</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> February, 2022 - March, 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;