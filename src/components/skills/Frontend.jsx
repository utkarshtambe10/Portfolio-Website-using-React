import React from 'react';

const Frontend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Frontend Development</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bxl-html5"></i>

                        <div>
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-css3"></i>

                        <div>
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-javascript"></i>

                        <div>
                            <h3 className="skills_name">JavaScript</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-redux"></i>

                        <div>
                            <h3 className="skills_name">Redux</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bxl-git"></i>

                        <div>
                            <h3 className="skills_name">Git/Github</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-bootstrap"></i>

                        <div>
                            <h3 className="skills_name">Bootstrap</h3>
                            <span className="skills_level">Basics</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-sass"></i>

                        <div>
                            <h3 className="skills_name">Sass</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-react"></i>

                        <div>
                            <h3 className="skills_name">React</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;