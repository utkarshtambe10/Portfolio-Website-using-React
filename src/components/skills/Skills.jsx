import React from 'react';
import './skills.css';
import ProgrammingLang from './ProgrammingLang';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Expertise</span>

            <div className="skills_container container grid">
                <ProgrammingLang />

                <Backend />

                <Frontend />

            </div>
        </section>
    );
}

export default Skills;