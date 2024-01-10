import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Herosection from '../components/section/Herosection';
import Layout from '../components/Layout/Layout';
import About from '../components/section/About';
import SectionHeading from '../components/items/SectionHeading';
import Skills from '../components/section/Skills';
import Tools from '../components/section/Tools';
import Services from '../components/section/Services';
import Contact from '../components/section/Contact';

function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Layout>

                <Element name="section-home">
                    <Herosection />
                </Element>

                <Element name="section-about">
                    <section className="shadow-blue white-bg padding">
                        <SectionHeading title="About Me" />
                        <About />
                    </section>
                </Element>

                <Element name="section-skills">
                    <section className="shadow-blue white-bg padding">
                        <SectionHeading title="My Skills" />
                        <Skills />
                    </section>
                </Element>

                <Element name="section-Tools">
                    <section className="shadow-blue white-bg padding">
                        <SectionHeading title="Tech Tool Proficiencies" />
                        <Tools />
                    </section>
                </Element>

                <Element name="section-services">
                    <section className="shadow-blue white-bg padding">
                        <SectionHeading title="Services" />
                        <Services />
                    </section>
                </Element>




                <Element name="section-contact">
                    <section className="shadow-blue white-bg padding">
                        <SectionHeading title="Get in Touch" />
                        <Contact />
                    </section>
                </Element>

            </Layout>
        </div>
    )
}

export default HomePage;