import React from "react";
import { useState } from "react";

function Register() {
  const [userRegister, setUserRegister] = useState({
    username: "vis0912",
    email: "",
    password: "",
    mobile: "",
  });

  const handleInput=(e)=>{
    const name=e.target.name
    const value=e.target.value

    setUserRegister({
      ...userRegister,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(userRegister);
  }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="Loading"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={userRegister.username}
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
                      value={userRegister.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile">mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      placeholder="Enter mobile"
                      id="mobile"
                      required
                      autoComplete="off"
                      value={userRegister.mobile}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={userRegister.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
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

export default Register;
