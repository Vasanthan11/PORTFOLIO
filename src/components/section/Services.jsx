import React from 'react';
import Service from '../items/Service';
import '../../style/base.css';

const serviceData = [
    {
        id: 1,
        name: "Logo Design",
        content: "Craft distinct logos embodying a brand's unique identity.",
        icon: 'icon-layers',
    },
    {
        id: 2,
        name: "Digital Media Design",
        content: "Create visuals for online platforms, websites, and social media.",
        icon: 'icon-event',
    },
    {
        id: 3,
        name: "Branding & Identity",
        content: "Develop visual elements to strengthen a brand's identity.",
        icon: 'icon-badge',
    },
    {
        id: 4,
        name: "Responsive Web Design",
        content: "Build websites adapting to various screen sizes for optimal user experiences.",
        icon: 'icon-screen-desktop',
    },
    {
        id: 5,
        name: "User Interface (UI) Development",
        content: "Design intuitive interfaces, enhancing user satisfaction in web applications.",
        icon: 'icon-frame',
    },
    {
        id: 6,
        name: "Front-end Development",
        content: "Proficient in crafting dynamic user interfaces with React.js for optimal experiences.",
        icon: 'icon-globe',
    },
]
const Services = () => {
    return (
        <div className='row -mt-20'>
            {serviceData.map((service) => (
                <div className="col-md-4 col-ms-6 mt-20" key={service.id}>
                    <Service service={service} />
                </div>
            ))}
        </div>
    )
}

export default Services;