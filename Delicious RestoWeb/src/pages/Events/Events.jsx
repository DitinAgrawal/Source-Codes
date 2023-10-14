import React from 'react';

const Events = () => {
    return (
        <section id="events" className="events">
            <div className="container">
                <div className="section-title mb-5">
                    <h2>
                        Organize Your <span>Events</span> in our Restaurant
                    </h2>
                </div>
                <div className="events-slider swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide mb-5">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img
                                        src="/event-birthday.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Birthday Parties</h3>
                                    <div className="price">
                                        <p>
                                            <span>$189</span>
                                        </p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                            reprehenderit in voluptate velit.
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End testimonial item */}
                        <div className="swiper-slide mb-5">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img
                                        src="/event-private.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Private Parties</h3>
                                    <div className="price">
                                        <p>
                                            <span>$290</span>
                                        </p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                            reprehenderit in voluptate velit.
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End testimonial item */}
                        <div className="swiper-slide">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                    <img
                                        src="/event-custom.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Custom Parties</h3>
                                    <div className="price">
                                        <p>
                                            <span>$99</span>
                                        </p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                            reprehenderit in voluptate velit.
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End testimonial item */}
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </div>
        </section>
    );
};

export default Events;
