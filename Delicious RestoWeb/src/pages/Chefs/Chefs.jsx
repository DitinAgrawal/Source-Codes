import React from 'react';

const Chefs = () => {
    return (
        <section id="chefs" className="chefs mt-5">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Our Proffesional <span>Chefs</span>
                    </h2>
                    <p>
                        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                        adipisci expedita at voluptas atque vitae autem.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="member">
                            <div className="pic">
                                <img
                                    src="/chefs/chefs-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Master Chef</span>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="member">
                            <div className="pic">
                                <img
                                    src="/chefs/chefs-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Patissier</span>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="member">
                            <div className="pic">
                                <img
                                    src="/chefs/chefs-3.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>Cook</span>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chefs;
