import React from "react";
import { useState } from "react";

function Contact() {
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserContact({
      ...userContact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userContact);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="container grid grid-two-cols">
              <div className="contact-image">
                <img
                  src="/images/support.png"
                  alt="Loading"
                  width="500"
                  height="500"
                />
              </div>
              <div className="contact-form">
                <h1 className="main-heading mb-3">contact form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      id="username"
                      required
                      autoComplete="off"
                      value={userContact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      id="email"
                      required
                      autoComplete="off"
                      value={userContact.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">message</label>
                    <textarea
                      name="message"
                      placeholder="Enter message"
                      id="message"
                      required
                      autoComplete="off"
                      value={userContact.message}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Contact;
