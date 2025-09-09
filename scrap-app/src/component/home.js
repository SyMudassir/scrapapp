/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {

  return (
  <>
 <section id="hero" class="hero section">

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 >Schedule Your Scrap Pickup  <span>Hassle-Free!</span></h1>
              <p className='herop'> Our easy-to-use scheduling system lets you book a pickup at your convenience. Whether it’s old appliances, metal, electronics, or other recyclable items, we’ll come to your doorstep and <br/> collect it — quickly, cleanly, and responsibly.</p>
            
            </div>
          </div>
          <div class="col-lg-6">
          <div class="scrapuncle-card-wrapper">
    <h2 class="scrapuncle-greeting">Impact made by RK Scrap</h2>
    
    {/* <img class="scrapuncle-scale-image" src="https://ikp.edgekit.net/y8s2vhk66ef/Main_Page_Illustration_e9Jz4TCH361.png?updatedAt=1628127523534" alt="Recycle Scale" /> */}
    <div class="scrapuncle-question">Wish to recycle more?</div>
    <button class="scrapuncle-button">Schedule A Pickup</button>
    <button class="scrapuncle-button">Check My Pickups</button>
    <div class="scrapuncle-logout">
      <a href="/">Logout</a>
    </div>
    <div class="scrapuncle-support">
      Facing Problems? Call us at <a href="tel:+918595358613">+919145651608</a>
    </div>
  </div>
          </div>
        </div>
      </div>

    </section>


    {/* tab section */}
     <section id="tabs" class="tabs section">
 <div class="container section-title">
        <h2>Why us</h2>
      </div>
      <div class="container">

        <div class="tabs-wrapper">
          <div class="tabs-header">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tabs-tab-1">
                  <div class="tab-content-preview">
                    <span class="tab-number">01</span>
                    <div class="tab-text">
                      <h6>Best Rates</h6>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tabs-tab-2">
                  <div class="tab-content-preview">
                    <span class="tab-number">02</span>
                    <div class="tab-text">
                      <h6>Convenience</h6>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tabs-tab-3">
                  <div class="tab-content-preview">
                    <span class="tab-number">03</span>
                    <div class="tab-text">
                      <h6>Trust</h6>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tabs-tab-4">
                  <div class="tab-content-preview">
                    <span class="tab-number">04</span>
                    <div class="tab-text">
                      <h6>Eco-friendly</h6>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="tab-content">

            <div class="tab-pane fade active show" id="tabs-tab-1">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="content-area">
                    <div class="content-badge">
                      <i class="bi bi-lightbulb"></i>
                      <span>Best Rates</span>
                    </div>
                    <h3> Best Rates for Scrap Pickup</h3>
                    <p className='herop'>At RK Scrap, we’re committed to providing the best rates for scrap pickup, ensuring you get top value for your materials without breaking the bank. We believe in offering affordable and transparent pricing to all our customers.</p>

                  

                    <div class="feature-points">
                      <div class="point-item">
                        <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Affordable and Transparent Pricing</span>
                      </div>
                      <div class="point-item">
                        <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Flexible Payment Options</span>
                      </div>
                      <div class="point-item">
                        <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>No Hidden Charges</span>
                      </div>
                    </div>

                  
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="visual-content">
                    <img src="/assets_task_01k1dv8fcwf119ayy8nqej3r62_1753885335_img_0_prev_ui.png" alt="" class="img-fluid"/>
                    <div class="floating-element">
                      <div class="floating-card">
                        <i class="bi bi-lightning-charge"></i>
                        <div class="card-info">
                         
                          <strong>Best Rates</strong>
                           <span>For Scraps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="tabs-tab-2">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="content-area">
                    <div class="content-badge">
                      <i class="bi bi-compass"></i>
                      <span>Convenience</span>
                    </div>
                    <h3>Scrap selling made simple — from your space, at your pace</h3>
                    <p className='herop'>Our scrap management app is designed to simplify the process of selling and tracking scrap, right from your home or business. No more middlemen, long calls, or confusion — everything is now just a few taps away.</p>
                

                    <div class="feature-points">
                      <div class="point-item">
                       <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Book pickups easily from your phone or computer.</span>
                      </div>
                      <div class="point-item">
                      <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Doorstep collection — no need to travel.</span>
                      </div>
                      <div class="point-item">
                       <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Track scrap weight and value instantly.</span>
                      </div>
                    </div>

                 
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="visual-content">
                    <img src="/Convenience.png" alt="" class="img-fluid"/>
                    <div class="floating-element">
                      <div class="floating-card">
                        <i class="bi bi-graph-up-arrow"></i>
                        <div class="card-info">
                          <span>Make Easy</span>
                          <strong>And Simply</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="tabs-tab-3">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="content-area">
                    <div class="content-badge">
                      <i class="bi bi-speedometer2"></i>
                      <span>Trust</span>
                    </div>
                    <h3>Earned with honesty, built to last trust in every transaction.</h3>
                    <p className='herop'>We believe in building long-lasting relationships with our users by offering full transparency, reliability, and professionalism at every step. From honest pricing to verified staff, your trust is our top priority.</p>

             

                    <div class="feature-points">
                      <div class="point-item">
                       <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Verified and background-checked pickup staff</span>
                      </div>
                      <div class="point-item">
                       <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Real-time scrap value and weight updates</span>
                      </div>
                      <div class="point-item">
                     <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Digital records and history for every transaction</span>
                      </div>
                    </div>

                   
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="visual-content">
                    <img src="/trust.png" alt="" class="img-fluid"/>
                    <div class="floating-element">
                      <div class="floating-card">
                        <i class="bi bi-cpu"></i>
                        <div class="card-info">
                          <strong>Trust is our top priority</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="tabs-tab-4">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="content-area">
                    <div class="content-badge">
                      <i class="bi bi-puzzle"></i>
                      <span>Eco-friendly</span>
                    </div>
                    <h3>Recycle smart, live green — go Eco-friendly with every scrap.</h3>
                    <p className='herop'>We care about the environment just as much as you do. Our app promotes responsible scrap disposal and recycling to reduce landfill waste and conserve natural resources. Every piece of scrap you sell supports a cleaner, greener planet.</p>
                

                    <div class="feature-points">
                      <div class="point-item">
                   <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Promotes sustainable scrap recycling practices</span>
                      </div>
                      <div class="point-item">
                     <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span>Helps reduce landfill waste and pollution</span>
                      </div>
                      <div class="point-item">
                    <img className='verifyicon' src="/verify.png" alt="Recycle Scale" />
                        <span> Partnered with certified recycling centers</span>
                      </div>
                    </div>

                    
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="visual-content">
                    <img src="/ecofreindly.png" alt="" class="img-fluid"/>
                    <div class="floating-element">
                      <div class="floating-card">
                        <i class="bi bi-link-45deg"></i>
                        <div class="card-info">
                          <strong>Eco-friendly with every scrap.</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  </>
  );
};

export default Home;
