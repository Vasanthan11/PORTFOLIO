import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMailLock } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";


const headerData = {
    name: "Vasanthan R",
    designation: "Front-End Developer",
    imageThumb: "/images/logo.png",
    social: {
        mail: "vasavj70@gmail.com",
        phone: "7092778816",
        linkedIn: "linkedin.com/in/vasanthanR11",
        github: "github.com/Vasanthan11",
    },
};

function Header({ toggleHeader, toggleHandler }) {
    // using state to define the current path in the portfolio
    const [currentPath, setCurrentPath] = useState('');
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname, setCurrentPath]);

    return (
        <>
            {/* Mobile Navigation Process using Bootstrap */}
            <div className={toggleHeader ? "mobile-header py-2 px-3 mt-4 push" : "mobile-header py-2 px-3 mt-4"}>

                <button className='menu-icon mr-2' onClick={toggleHandler}>
                    {/* Nav Menu bar icon on mobile view */}
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Link to={'/'} className='logo'>
                    <img src={headerData.imageThumb} alt={headerData.name} />
                </Link>

                <Link to={'/'} className='site-title dot ml-2'>
                    {headerData.name}
                </Link>

            </div>

            <header className={toggleHeader ? "left float-left shadow-dark open" : "left float-left shadow-dark"}>

                <button className='close' type='button' aria-label='Close' onClick={toggleHandler}>
                    {/*&times; represents the symbol of x  */}
                    <span aria-hidden="true">&times;</span>
                </button>

                <div className="header-inner d-flex align-items-start flex-column">

                    <Link to={'/'}>
                        <img src={headerData.imageThumb} alt={headerData.name} />
                    </Link>

                    <Link to={'/'} className='site-title dot mt-3'>
                        {headerData.name}
                        <span className="dot"></span>
                    </Link>

                    <span className="site-slogan">{headerData.designation}</span>

                    {/* Nav-Bar */}
                    <nav>
                        <ul className="vertical-menu scrollspy">
                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-home'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-home'></i>Home
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-home'></i>Home
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-about'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-user'></i>About
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-user'></i>About
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-skills'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-star'></i>Skills
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-star'></i>Skills
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-services'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-bulb'></i>Services
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-bulb'></i>Services
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-experiences'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-graduation'></i>Resume
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-graduation'></i>Resume
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-portfolios'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-grid'></i>Works
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-grid'></i>Valo
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-blogs'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-pencil'></i>Blog
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-pencil'></i>Blog
                                    </Link>)}
                            </li>

                            <li>
                                {currentPath === '/' ? (
                                    <ScrollLink activeClass="active"
                                        to='section-contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>
                                        <i className='icon-phone'></i>Contact
                                    </ScrollLink>) :
                                    (<Link to={'/'}>
                                        <i className='icon-phone'></i>Contact
                                    </Link>)}
                            </li>
                        </ul>
                    </nav>

                    <div className="footer mt-auto">
                        <ul className="social-icons list-inline">

                            {/* the conditional statement is not mandatory on react it is best practice */}
                            {!headerData.social.mail ? null : (
                                <li className='list-inline-item'>
                                    <a href={`mailto:${headerData.social.mail}`} className="email-link">
                                        <MdMailLock />
                                    </a>
                                </li>
                            )}

                            {!headerData.social.phone ? null : (
                                <li className='list-inline-item'>
                                    <a href={`tel:${headerData.social.phone}`} className="phone-link">
                                        <FaPhoneSquareAlt />
                                    </a>
                                </li>
                            )}

                            {!headerData.social.linkedIn ? null : (
                                <li className='list-inline-item'>
                                    <a href={`https://${headerData.social.github}`} target="_blank" rel="noopener noreferrer" className="github-link">
                                        <BiLogoGithub />
                                    </a>
                                </li>
                            )}

                            {!headerData.social.phone ? null : (
                                <li className='list-inline-item'>
                                    <a href={`https://${headerData.social.linkedIn}`} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                        <BiLogoLinkedinSquare />
                                    </a>
                                </li>
                            )}
                        </ul>
                        <span className='copyright'>
                            &copy; {new Date().getFullYear()} Vasanthan Portfolio.
                        </span>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;
