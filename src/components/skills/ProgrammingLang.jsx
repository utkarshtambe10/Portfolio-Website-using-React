import React from 'react';

const ProgrammingLang = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Programming Languages</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bxl-c-plus-plus"></i>

                        <div>
                            <h3 className="skills_name">C/C++</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-python"></i>

                        <div>
                            <h3 className="skills_name">Python</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bx-data"></i>

                        <div>
                            <h3 className="skills_name">SQL</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgrammingLang;