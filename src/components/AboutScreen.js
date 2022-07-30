import React from 'react';
import { Link } from 'react-router-dom';

const AboutScreen = () => (
  <>
          <div class="slider" style={{height: "50vh"}}>
            <div class="load">
              
            </div>
            <div class="content" style={{height: "50vh"}}>
              <br /><br /><br />
              <h1 style={{marginLeft: "60px", color: "#80FF00"}}>About Us</h1>
              <div class="principal">
                
              </div>
            </div>
          </div>
          <br /><br />
              <Link to="/about">
                <a class="btn btn-info" style={{width: "150px", marginLeft: "50px", backgroundColor: "orange"}}>WHO WE ARE</a>
              </Link>
          <br /><br /><br />
          <center><div class="lie" style={{backgroundColor: "red", width: "50px", height: "2px"}}></div>
          <br />
          <h2>We Are Green Energy</h2>
          <h5>We have the latest technologies</h5>
          </center>
          <br /><br />

          <div class="row">
            <div class="col-md-6">
              <img src="image/z2-570x370.jpg" class="img-fluid" /><br /><br />
            </div>

            <div class="col-md-6">
              <h5>Our Strategy</h5>
              <p>INTEGRITY - our actions are of the highest ethical standards whilst ensuring total honesty in everything we do</p>
              <p>EXCELLENCE - we deploy solutions to exceed our customers' expectations all the time.</p>
              <p>LEADERSHIP - we are the best in every business that we do and a pioneer of green energy business around the globe.</p>
              <p>VALUE - we deliver value for money.</p>
              <p>INNOVATION - we are creative always deploy research & development capability to the limit.</p>
              <br />
              <br />
             
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="container" style={{backgroundColor: "lightgreen", height: "320px", marginTop: "105px", width: "80%", float: "left"}}>
                <h4 style={{paddingTop: "20px"}}>Mission</h4>
              <p>Our Mission is to generate sustainable renewable energy solutions to cover the demands of every community and industry around the world</p>

              <h4>Vision</h4>
              <p>Our vison is to become the world's best producer of clean energy that runs the world</p>
              </div>
            </div>

            <div class="col-md-6" style={{marginTop: "105px"}}>
              <h5>Why Choose Us</h5>
              <p>We have undergone expert training and have a passion for what we do. Money is secondary and the aim is to deliver viable and effective solutions to our clients.
          Our energy business aims to deliver renewable energy solutions to the African population. We build and install sustainable green energy solutions (such as solar, biomass, wind, geothermal and hydro), we troubleshoot, maintain installations and also we consult in the renewable energy space/sector. Our Services Include:</p>
              <div class="row" align="left">
                <div class="col-md-4"><h6>Solar Energy</h6></div>
                <div class="col-md-4"><h6>Biomass Energy</h6></div>
                <div class="col-md-4"><h6>Hydro Energy</h6></div>
              </div>

              <div class="row" align="left">
                <div class="col-md-4"><h6>Wind Energy</h6></div>
                <div class="col-md-4"><h6>Geothermal Energy</h6></div>
                <div class="col-md-4"><h6>Geological Services</h6></div>
              </div>
            </div>
          </div>
          <br /><br /><br />
          <center>
            <div class="row">
            <div className="col-md-4" style={{display: "flex", justifyContent: "space-between", margin: "auto"}}>
            <Link to="/contact">
                <a className="btn btn-info" style={{backgroundColor: "#80FF00", width: "150px"}}>
                    <i className="fas fa-hand-point-right"></i> GET A QUOTE
                </a>
              </Link>
            <Link to="/training">
                <a className="btn btn-danger" style={{width: "150px"}}>
                    <i className="fas fa-hand-point-right"></i> TRAINING
                </a>
            </Link>
            </div>
          </div><br /><br />
          </center>
              <Link to="/about"><a class="btn btn-info" href="#" style={{width: "150px", marginLeft: "10px", backgroundColor: "orange"}}>OUR TEAM</a>
              </Link>
              <br /><br />
                  <center>
                  <br />
                  <br />
                  </center>
          <div class="row">
            <div class="col-md-4"><img src="image/avatar.jpg" width="300" height="300" style={{borderRadius: "400px"}} /></div>
            <div class="col-md-8">
              <h4>Lorem Ipsum</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
                  <center>
                  <br />
                  <br />
                  </center>
            
  </>
)

export default AboutScreen;
