import React from 'react';
import '../../style/base.css';


const Service = ({ service: { name, content, icon } }) => {
    return (
        <div className='service-item text-center'>
            <i className={`${icon} icon-simle`}></i>
            <h4 className="my-3">{name}</h4>
            <p className="mb-0">{content}</p>
        </div>
    )
}

export default Service;