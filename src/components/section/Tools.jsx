import React from 'react';
import Skill from '../items/Skill';
import TrackVisibility from 'react-on-screen';

const ToolsData = {
    skillContent: "As a Front-End Developer, I code with HTML, CSS, and JavaScript, ensuring websites are both functional and visually engaging. My toolkit extends to Git for version control and React.js for dynamic UIs. Adding a creative touch, I use Adobe Creative Suite to design interfaces that captivate and enhance user experiences.",
    progressData: [
        {
            id: 1,
            name: "Adobe Photoshop",
            percentage: 80,

        },
        {
            id: 2,
            name: "Adobe Illustrator",
            percentage: 75,

        },
        {
            id: 3,
            name: "Adobe Indesign",
            percentage: 90,

        },
        {
            id: 4,
            name: "Figma",
            percentage: 81,

        },
        {
            id: 5,
            name: "HTML & CSS",
            percentage: 95,

        },
        {
            id: 6,
            name: "Bootstrap",
            percentage: 70,

        },
        {
            id: 7,
            name: "Visual Studio Code",
            percentage: 88,

        },
        {
            id: 8,
            name: "Javascript",
            percentage: 82,

        },
        {
            id: 9,
            name: "React Js",
            percentage: 86,

        },
        {
            id: 10,
            name: "Git & GitHub",
            percentage: 73,

        },
    ],
};

const Tools = () => {
    return (
        <div>
            <p className="mb-0">{ToolsData.skillContent}</p>

            <div className="mt-5">
                <div className="row -mt-50">
                    {ToolsData.progressData.map((progress) => (
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

export default Tools;