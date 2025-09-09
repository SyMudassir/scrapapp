// import React, { useState } from "react";

// // function SubmitForm() {
// //   const [formData, setFormData] = useState({
// //     Title: "",
// //     Name: "",
// //     Email: ""
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(
// //         `${process.env.REACT_APP_API_URL}/api/submitData`,
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData)
// //         }
// //       );

// //       const result = await response.json();
// //       console.log("Response from backend:", result);
// //       alert("Data submitted successfully!");
// //     } catch (err) {
// //       console.error("Error submitting data:", err);
// //       alert("Something went wrong!");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
// //       <input
// //         type="text"
// //         name="Name"
// //         placeholder="Name"
// //         value={formData.Name}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="text"
// //         name="Title"
// //         placeholder="Title"
// //         value={formData.Title}
// //         onChange={handleChange}
// //       />
    
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default SubmitForm;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './header.css';
import React from 'react'

export default function schedule() {
  return (
  <>
    <section id="contact" class="contact section">


      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <div><span>Let's</span> <span class="description-title">Connect</span></div>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

    
        <div class="row gy-4 mb-5">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-info-box">
              <div class="icon-box">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div class="info-content">
                <h4>Our Address</h4>
                <p>1842 Maple Avenue, Portland, Oregon 97204</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="contact-info-box">
              <div class="icon-box">
                <i class="bi bi-envelope"></i>
              </div>
              <div class="info-content">
                <h4>Email Address</h4>
                <p>info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="contact-info-box">
              <div class="icon-box">
                <i class="bi bi-headset"></i>
              </div>
              <div class="info-content">
                <h4>Hours of Operation</h4>
                <p>Sunday-Fri: 9 AM - 6 PM</p>
                <p>Saturday: 9 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="map-section" data-aos="fade-up" data-aos-delay="200">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="container form-container-overlap">
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
          <div class="col-lg-10">
            <div class="contact-form-wrapper">
              <h2 class="text-center mb-4">Get in Touch</h2>

              <form action="forms/contact.php" method="post" class="php-email-form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="input-with-icon">
                        <i class="bi bi-person"></i>
                        <input type="text" class="form-control" name="name" placeholder="First Name" required=""/>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="input-with-icon">
                        <i class="bi bi-envelope"></i>
                        <input type="email" class="form-control" name="email" placeholder="Email Address" required=""/>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="input-with-icon">
                        <i class="bi bi-text-left"></i>
                        <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <div class="input-with-icon">
                        <i class="bi bi-chat-dots message-icon"></i>
                        <textarea class="form-control" name="message" placeholder="Write Message..." style="height: 180px" required=""></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>

                  <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary btn-submit">SEND MESSAGE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    </section>
  </>
  )
}
