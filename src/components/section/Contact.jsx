import React, { useState } from 'react';
import '../../style/base.css';

const contactData = {
    phone: ["+917092778816"],
    email: ['vasavj70@gmail.com'],
    location: '82/2, Gokulapuram Avenue, Edayarpalayam Main Road, Sundarapuram, Coimbatore-24 ',
};

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const sumbitHandler = (event) => {
        event.preventDefault();
        if (!formData.name) {
            setError(true);
            setMessage("Name is required");
        }
        else if (!formData.email) {
            setError(true);
            setMessage("Email is required");
        }
        else if (!formData.subject) {
            setError(true);
            setMessage("Subject is required");
        }
        else if (!formData.message) {
            setError(true);
            setMessage("Message is required");
        }
        else {
            setError(false);
            setMessage("Your message has been sent!!!");
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.currentTarget.name]: event.currentTarget.value,
        })
    };

    const handleAlerts = (event) => {
        if (error && message) {
            return <div className="alert alert-danger mt-4">{message}</div>
        }
        else if (!error && message) {
            return <div className="alert alert-success mt-4">{message}</div>
        }
        else {
            return null;
        }
    }

    return (
        <div className='row'>
            <div className="col-md-4 mb-4 mb-md-0">
                <div className="contact-info mb-4">
                    <i className="icon-phone"></i>
                    <div className="details">
                        <h5>Phone</h5>
                        {contactData.phone.map((singlePhone, index) => (
                            <span key={index}>{singlePhone}</span>
                        ))}
                    </div>
                </div>

                <div className="contact-info mb-4" >
                    <i className="icon-envelope"></i>
                    <div className="details">
                        <h5>Email Address</h5>
                        {contactData.email.map((singleEmail, index) => (
                            <span key={index}>{singleEmail}</span>
                        ))}
                    </div>
                </div>

                <div className="contact-info">
                    <i className="icon-location-pin"></i>
                    <div className="details">
                        <h5>Location</h5>
                        <span>{contactData.location}</span>
                    </div>
                </div>
            </div>


            <div className="col-md-8">
                <form className="contact-form" onSubmit={sumbitHandler}>
                    <div className="row">
                        <div className="column col-md-6 mb-4">
                            <div className="form-group">
                                <input type="text"
                                    className='form-control'
                                    name='name'
                                    placeholder='Your Name'
                                    onChange={handleChange}
                                    value={formData.name} />
                            </div>
                        </div>

                        <div className="column col-md-6 mb-4">
                            <div className="form-group">
                                <input type="email"
                                    className='form-control'
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={formData.email} />
                            </div>
                        </div>

                        <div className="column col-md-12 mb-4">
                            <div className="form-group">
                                <input type="text"
                                    className='form-control'
                                    name='subject'
                                    placeholder='Subject'
                                    onChange={handleChange}
                                    value={formData.subject} />
                            </div>
                        </div>

                        <div className="column col-md-12 mb-4">
                            <div className="form-group">
                                <textarea rows="10"
                                    className='form-control'
                                    name='message'
                                    placeholder='Message'
                                    onChange={handleChange}
                                    value={formData.message} >
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <button
                        type='submit'
                        name='submit'
                        value='submit'
                        className='btn btn-default' >
                        <i className="icon-paper-plane"></i>Send Message
                    </button>
                </form>

                {handleAlerts()}
            </div>
        </div>
    )
}

export default Contact