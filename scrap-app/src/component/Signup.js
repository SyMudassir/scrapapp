import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import "./form.css";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./fAuthContext";

function Signup() {
  const [name, setName] = useState(""); // Optional
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const getFriendlyError = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "Something went wrong. Please try again.";
    }
  };
const location = useLocation();
const from = location.state?.from?.pathname || "/home"; // default to /home

const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
    setIsLoggedIn(true); // Update auth context
    navigate(from); // ✅ Go back to originally requested page
  } catch (error) {
    console.error("Firebase Signup Error:", error);
    alert(getFriendlyError(error.code));
  }
};



  return (
    <>
       <section id="hero" class="hero section">
             <div class="container">
               <div class="row align-items-center">
                 <div class="col-lg-6">
     
       <main className="main">
                  <div className="container">
                    <div className="wrapper">
                      <div className="heading">
                        <h1 className="text-text-large">Signup</h1>
                        <p className="text-text-normalsingup">
                          Already have an account?{" "}
                          <span>
                            <Link to="/">Login</Link>
                          </span>
                        </p>
                      </div>

                      <form onSubmit={handleSignup} className="form">
                        <div className="input-control">
                          <input
                            type="text"
                            placeholder="Name"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
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
                            value="Sign Up"
                            className="input-submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </main>
                   
     
                 </div> 
                 {/* leftpartclosing */}
     
     
        <div class="col-lg-6">
               <div class="hero-content">
              <h1>Scrap it, don’t stash it — sell with <span>RK Scrap</span></h1>
              <p class="herop">From paper to appliances — sell your scrap in one place with ScrapUncle.</p>
              <div class="hero-actions justify-content-center justify-content-lg-start">
         
               
                 <div class="hero-image">
                <img src="/ScrapuncleHomeBanner_ky5a6zP3j.png" class="img-fluid floating" alt="" />
              </div>
              </div>
            </div>
             
            </div>
               </div>
             </div>
           </section>

      <section className="process-section">
         <div class="container section-title">
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

export default Signup;
