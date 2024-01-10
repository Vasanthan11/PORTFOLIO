import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../../style/button.css';

const herosectionData = {
    name: 'Vasanthan R',
    aboutme: "Greetings! Transitioning from 1.5 years of graphic design, I'm now immersing myself in the world of front-end development. Armed with a flair for design, I'm diving into HTML, CSS, and JavaScript to enhance websites aesthetically and functionally. Exploring React.js adds an extra layer of magic to my creations. My mission is to seamlessly blend style and functionality in web experiences. Let's connect and embark on a journey where design meets the exciting realm of front-end development!"
}

const Herosection = () => {
    return (

        <section className="hero background parallax shadow-dark d-flex align-items-center" style={{ backgroundImage: "url(/images/hero.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>

            <div className="cta mx-auto mt-2">

                <h1 className="mt-0 mb-4">
                    I'm {herosectionData.name}
                    <span className="dot"></span>
                </h1>

                <p className="mb-4">{herosectionData.aboutme}</p>

                <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                    className="btn btn-default btn-lg mr-3">

                    <i className='icon-grid'></i>View Portfolio
                </ScrollLink>

                <div className='spacer d-md-none d-lg-none d-sm-none' data-height='10'>

                </div>

                <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                    className="btn btn-border-light btn-lg">

                    <i className='icon-envelope'></i>Hire me
                </ScrollLink>
            </div>
            <div className="overlay"></div>
        </section>

    )
}

export default Herosection;