import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section id="hero">
            <div className="hero-container">
                <div
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <ol className="carousel-indicators" id="hero-carousel-indicators"/>
                    <div className="carousel-inner" role="listbox">
                        <div
                            className="carousel-item active"
                            style={{backgroundImage: "url(/slide/slide-1.jpg)"}}
                        >
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        <span>Delicious</span> Restaurant
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                                        est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                                        mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et tempore modi architecto.
                                    </p>
                                    <div>
                                        <Link
                                            to="/menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Our Menu
                                        </Link>
                                        <Link
                                            to="/book_a_table"
                                            className="btn-book animate__animated animate__fadeInUp scrollto"
                                        >
                                            Book a Table
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
