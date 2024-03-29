import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech-Artificial Intelligence and Data Science</h3>
                                <span className="qualification__subtitle">Sri Sairam Engineering College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2021 - 2025</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Higher Secondary</h3>
                                <span className="qualification__subtitle">Nazareth Matric. Hr. Sec. School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2019 - 2021</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Development Intern</h3>
                                <span className="qualification__subtitle">Workiy Inc. Canada</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Mar 2024 - Apr 2024</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">ML Engineer Intern</h3>
                                <span className="qualification__subtitle">Shade 6, Mumbai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Sep 2023 - Oct 2023</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification