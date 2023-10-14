import React, {useState} from 'react';

const Contact = () => {

    const [input,setInput] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setInput(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput({
            name:"",
            email:"",
            subject:"",
            message:""
        })
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <span>Contact</span> Us
                    </h2>
                    <p>
                        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                        adipisci expedita at voluptas atque vitae autem.
                    </p>
                </div>
            </div>
            <div className="map">
                <iframe
                    style={{ border: 0, width: "100%", height: 350 }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28325.010705952252!2d77.68965119999999!3d27.4497536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697072169518!5m2!1sen!2sin"
                    frameBorder={0}
                    allowFullScreen=""
                />
            </div>
            <div className="container mt-5">
                <div className="info-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 info">
                            <i className="bi bi-geo-alt" />
                            <h4>Location:</h4>
                            <p>
                                A108 Adam Street
                                <br />
                                New York, NY 535022
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i className="bi bi-clock" />
                            <h4>Open Hours:</h4>
                            <p>
                                Monday-Saturday:
                                <br />
                                11:00 AM - 2300 PM
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i className="bi bi-envelope" />
                            <h4>Email:</h4>
                            <p>
                                info@example.com
                                <br />
                                contact@example.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i className="bi bi-phone" />
                            <h4>Call:</h4>
                            <p>
                                +1 5589 55488 51
                                <br />
                                +1 5589 22475 14
                            </p>
                        </div>
                    </div>
                </div>
                <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                >
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                                value={input.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required=""
                                value={input.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required=""
                            value={input.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
        <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required=""
            defaultValue={""}
            value={input.message}
            onChange={handleChange}
        />
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                            Your message has been sent. Thank you!
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" onClick={handleSubmit} >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
