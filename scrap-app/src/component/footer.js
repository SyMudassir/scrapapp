
import './header.css';

const Footer = () => {


  return (

<footer id="footer" class="footer position-relative light-background">

    <div class="container">
      <div class="row gy-5">

        <div class="col-lg-4">
          <div class="footer-content">
            <a href="index.html" class="logo d-flex align-items-center mb-4">
              <span class="sitename">RK Scrap</span>
            </a>
            <p class="herop">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.</p>

            <div class="newsletter-form">
             
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-6">
     <div class="footer-links">
            <h4>Company</h4>
            <ul>
               <li><a href="/"><i class="bi bi-chevron-right"></i> Home</a></li>
              <li><a href="/"><i class="bi bi-chevron-right"></i> About</a></li>
              <li><a href="/"><i class="bi bi-chevron-right"></i> Scrap Rates</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <div class="footer-links">
            <h4>Navigations</h4>
            <ul>
              <li><a href="/"><i class="bi bi-chevron-right"></i> Schedule</a></li>
              <li><a href="/"><i class="bi bi-chevron-right"></i> Pickups</a></li>
              <li><a href="/"><i class="bi bi-chevron-right"></i> Profile</a></li>


            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="footer-contact">
            <h4 className='footerh4'>Get in Touch</h4>
            <div class="contact-item">
             
              <div class="contact-info">
                <p>Address: Jalna Road</p>
              </div>
            </div>

            <div class="contact-item">
              
              <div class="contact-info">
                <p>Contact no: 9145651608</p>
              </div>
            </div>

            <div class="contact-item">
            
              <div class="contact-info">
                <p>Email: kamran@wintelsystems.in</p>
              </div>
            </div>

           
          </div>
        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="copyright">
              <p>© <span>Copyright</span> <strong class="px-1 sitename">MyWebsite</strong> <span>All Rights Reserved</span></p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="footer-bottom-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">Cookie Policy</a>
            </div>
            <div class="credits">
      
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>


  );
};

export default Footer;
