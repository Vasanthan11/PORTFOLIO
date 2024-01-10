import React from 'react';
import Skill from '../items/Skill';
import TrackVisibility from 'react-on-screen';
import '../../style/base.css';

const skillData = {
    skillContent: "As a Front-End Developer, I bring a blend of user-friendly coding skills in HTML, CSS, and JavaScript, complemented by a design sensibility that turns ideas into visually engaging and intuitive websites.",
    progressData: [
        {
            id: 1,
            name: "Problem Sloving",
            percentage: 80,

        },
        {
            id: 2,
            name: "Creativity",
            percentage: 89,

        },
        {
            id: 3,
            name: "Continuous Learning",
            percentage: 96,

        },
        {
            id: 4,
            name: "Adaptability",
            percentage: 84,

        },
        {
            id: 5,
            name: "Communication",
            percentage: 85,

        },
        {
            id: 6,
            name: "Wireframing and Prototyping",
            percentage: 73,

        },
    ],
};

const Skills = () => {
    return (
        <div>
            <p className="mb-0">{skillData.skillContent}</p>

            <div className="mt-5">
                <div className="row -mt-50">
                    {skillData.progressData.map((progress) => (
                        <div className="col-md-6 mt-50" key={progress.id}>
                            <TrackVisibility>
                                <Skill progress={progress} />
                            </TrackVisibility>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;