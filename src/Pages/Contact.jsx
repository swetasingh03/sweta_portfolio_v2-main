import React from 'react'
import { useTheme } from '../ThemeContext';
function Contact() {
    const { theme } = useTheme();
    return (
        <section className="py-5">
            <div className="container px-5">
                <div className={`rounded-4 py-5 px-4 px-md-5 ${theme === 'light' ? 'bg-light' : 'bg-dark-blue text-white border'}`}>
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">Get in touch</h1>
                        <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                    </div>
                    <div className="row gx-5 justify-content-center text-dark">
                        <div className="col-lg-8 col-xl-6">
                            <form id="contactForm" action="https://getform.io/f/431c91a0-7095-4d9f-8378-59f1d2f20b3f" method="POST">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" name="name" type="text" placeholder="Enter your name..." required data-sb-validations="required" />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" name="email" type="email" placeholder="name@example.com" required data-sb-validations="required,email" />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required data-sb-validations="required" />
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" name="message" type="text" required placeholder="Enter your message here..." style={{ "height": "10rem" }} data-sb-validations="required"></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>

                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact