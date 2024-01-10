import React from 'react';
import '../../style/base.css';

const SectionHeading = ({ title }) => {
    return (
        <div>
            <h3 className="section-title">
                {title}
            </h3>
            <div className="spacer" data-height="80"></div>
        </div>
    )
}

export default SectionHeading;