import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getFriendlyError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };

      // Save login session in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isAuthenticated", "true");

      // Navigate to home after login
      navigate("/home", { replace: true });
    } catch (error) {
      console.error("Login Error:", error);
      alert(getFriendlyError(error.code));
    }
  };

  return (
    <>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left side form */}
            <div className="col-lg-6">
              <main className="main">
                <div className="container">
                  <div className="wrapper">
                    <div className="heading">
                      <h1 className="text-text-large">Login</h1>
                      <p className="text-text-normalsingup">
                        Don’t have an account?{" "}
                        <span>
                          <Link to="/signup">Signup</Link>
                        </span>
                      </p>
                    </div>

                    <form onSubmit={handleLogin} className="form">
                      <div className="input-control">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="input-field"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="input-control">
                        <input
                          type="password"
                          placeholder="Password"
                          className="input-field"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="input-control">
                        <Link to="/" className="text text-links">
                          Forgot Password
                        </Link>
                        <input
                          type="submit"
                          value="Login"
                          className="input-submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </div>

            {/* Right side hero content */}
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>
                  Scrap it, don’t stash it — sell with <span>RK Scrap</span>
                </h1>
                <p className="herop">
                  From paper to appliances — sell your scrap in one place with
                  ScrapUncle.
                </p>
                <div className="hero-actions justify-content-center justify-content-lg-start">
                  <div className="hero-image">
                    <img
                      src="/ScrapuncleHomeBanner_ky5a6zP3j.png"
                      className="img-fluid floating"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container section-title">
          <h2>How It works</h2>
        </div>
        <div className="process-container">
          <div className="process-box">
            <div className="circle-img">
              <img src="/Raisereqimg.png" alt="Raise a request" />
            </div>
            <h3>Raise A Request</h3>
            <p>
              Schedule a scrap pickup based on your category. Choose your
              preferred date and time.
            </p>
          </div>
          <div className="process-box">
            <div className="circle-img">
              <img src="/pickup-truck.png" alt="Pickup Schedule" />
            </div>
            <h3>Pickup Schedule</h3>
            <p>
              Select a pickup date and time at your convenience. Our
              representative will call to confirm the details.
            </p>
          </div>
          <div className="process-box">
            <div className="circle-img">
              <img src="/pay.png" alt="Get Paid" />
            </div>
            <h3>Get Paid</h3>
            <p>
              Once your scrap is picked up and weighed, receive your payment
              without any hassle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
