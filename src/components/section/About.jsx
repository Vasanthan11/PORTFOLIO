import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../../style/base.css';

const aboutData = {
    cvpath: "media/empty.pdf",
    image: "images/about.png",
    name: "Vasanthan R",
    location: "Gokulapuram Avenue, Edayarpalayam, Coimbatore-641024",
    birthday: "11 August, 2001",
    email: "vasavj70@gmail.com",
    aboutMe: "I'm Vasanthan R, a creative force at Personiv. Specializing in graphic design for medical, food, and cosmetic industries, I bring ideas to life with visual flair. Beyond design, I've mastered HTML, CSS, JavaScript, React.js, and Redux for a seamless fusion of aesthetics and functionality. Let's transform your vision into captivating reality!",
};

const About = () => {
    return (
        <div className='row'>

            <div className="col-md-3">
                <img src={aboutData.image} alt={aboutData.name} />
            </div>

            <div className="col-md-9">
                <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
                <p className="mb-0">{aboutData.aboutMe}</p>

                <div className="row my-4">

                    <div className="clo-md-6">
                        <p className="mb-2">
                            Name: <span className="text-dark">{aboutData.name}</span>
                        </p>
                        <p className="mb-2">
                            Birthday: <span className="text-dark">{aboutData.birthday}</span>
                        </p>
                    </div>

                    <div className="col-md-12 mt-2 mt-md-0 mt-sm-2">
                        <p className="mb-2">
                            Location: <span className="text-dark">{aboutData.location}</span>
                        </p>
                        <p className="mb-0">
                            Email: <span className="text-dark">{aboutData.email}</span>
                        </p>
                    </div>
                </div>

                <a href={aboutData.cvpath} className='btn btn-default mr-3'>
                    <i className="icon-cloud-download"></i>Download CV
                </a>

                <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                    className="btn btn-alt mt-2 mt-md-0 mt-xs-2">

                    <i className='icon-envelope'></i>Hire me
                </ScrollLink>
            </div>

        </div>
    )
}

export default About;