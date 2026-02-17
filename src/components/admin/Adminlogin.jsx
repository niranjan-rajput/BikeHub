import { setsEqual } from 'chart.js/helpers';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Adminlogin() {

    let navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        if (userId.toLowerCase() === "admin" && password.toLowerCase() === "admin") {
            // alert("WELCOME");

            localStorage.setItem("isLoggedIn", true);

            navigate("/admin");

        } else {
            alert("Invalid Credential");

            setUserId("");
            setPassword("");
        }
        // console.log(userId, password);
    };

    useEffect(() => {

        let isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn) {
            navigate("/admin")
        };

    }, [])

    return (
        <>
            <section className="bg-dark py-3 mt-1 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-light-subtle rounded-3 shadow-sm">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="text-center mb-3">
                                        <a href="#!">
                                            <img src="https://img.freepik.com/premium-vector/motorcycle-icon-logo-design_775854-635.jpg" alt="BootstrapBrain Logo" width="135" height="90" />
                                        </a>
                                    </div>
                                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
                                    <form action="#!">
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                    <label for="userId" className="form-label">UserId</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" placeholder="Password" required />
                                                    <label for="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-2 justify-content-between">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe" />
                                                        <label className="form-check-label text-secondary" for="rememberMe">
                                                            Keep me logged in
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button onClick={handleSubmit} className="btn btn-primary btn-lg" type="submit">Log in</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="m-0 text-secondary text-center">Don't have an account? <a href="#!" className="link-primary text-decoration-none">Sign up</a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Adminlogin