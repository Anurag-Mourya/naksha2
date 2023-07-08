import React from 'react';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic goes here
    };

    return (
        <div className="container mt-5">
            <h1> <span className='mainColor'>Contact</span> Us</h1>
            <p>Please fill out the form below to get in touch with us.</p>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea className="form-control" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn my-3 mainBgColor text-white">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h4>Contact Information</h4>
                    <p>
                        <strong>Address:</strong> 123 Main St, City, Country
                    </p>
                    <p>
                        <strong>Email:</strong> info@example.com
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 123 456 7890
                    </p>
                    <p>
                        <strong>Working Hours:</strong> Monday-Friday, 9am-5pm
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
