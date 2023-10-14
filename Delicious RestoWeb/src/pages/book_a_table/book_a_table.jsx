import React, {useState} from 'react';

const Book_a_table = () => {

    const [input,setInput] = useState({
        name:"",
        email:"",
        phone:"",
        date:"",
        time:"",
        people:"",
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
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            people: "",
            message: ""
        })
    }

    return (
        <>
            <section id="book-a-table" className="book-a-table">
                <div className="container">
                    <div className="section-title">
                        <h2>
                            Book a <span>Table</span>
                        </h2>
                        <p>
                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                            adipisci expedita at voluptas atque vitae autem.
                        </p>
                    </div>
                    <form
                        role="form"
                        className="php-email-form"
                    >
                        <div className="row">
                            <div className="col-lg-4 col-md-6 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value={input.name}
                                    onChange={handleChange}
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={input.email}
                                    onChange={handleChange}
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    value={input.phone}
                                    onChange={handleChange}
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input
                                    type="text"
                                    name="date"
                                    className="form-control"
                                    id="date"
                                    placeholder="Date"
                                    value={input.date}
                                    onChange={handleChange}
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="time"
                                    id="time"
                                    placeholder="Time"
                                    value={input.time}
                                    onChange={handleChange}
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="people"
                                    id="people"
                                    placeholder="# of people"
                                    value={input.people}
                                    onChange={handleChange}
                                    data-rule="minlen:1"
                                    data-msg="Please enter at least 1 chars"
                                />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
          <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              value={input.message}
              onChange={handleChange}
              defaultValue={""}
          />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">
                                Your booking request was sent. We will call back or send an Email to
                                confirm your reservation. Thank you!
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={handleSubmit}>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Book_a_table;
