import React from 'react';

const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Backend Development</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bxl-nodejs"></i>

                        <div>
                            <h3 className="skills_name">Node.js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-link"></i>
                        <div>
                            <h3 className="skills_name">Express.js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                <div className="skills_data">
                        <i className="bx bxl-mongodb"></i>

                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills_data">
                        <i className="bx bxl-firebase"></i>

                        <div>
                            <h3 className="skills_name">Firebase</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;