import React from 'react';
import { Link } from 'react-router-dom';

const ServicesScreen = () => (
  <>
          <div className="slider" style={{height: "50vh"}}>
          <div className="load">
            
          </div>
          <div className="content" style={{height: "50vh"}}>
            <br /><br /><br />
            <h1 style={{marginLeft: "60px", color: "#80FF00"}}>Our Services</h1>
            <div className="principal">
              
            </div>
          </div>
        </div>
        <br /><br />
        <center><div className="lie" style={{backgroundColor: "red", width: "50px", height: "2px"}}></div>
        <br />
        <h2>Our Energy Solutions</h2>
        <h5>Renewable Energy for All.</h5>
        </center>
        <br /><br />
        <center>
        <div className="row">
            <div className="col-md-3">
              <a href="http://localhost/greenenergy/minigrid.php" style={{textDecoration: "none"}}>
                <div className="jumbotron" style={{backgroundColor: "#80FF00", height: "160px", width: "280px"}}>
                  <center>
                    <i className="fas fa-solar-panel" style={{width: "50px", height: "50px", marginTop: "-30px"}}></i>
                  </center>
                  <br /><br />
              <h6 style={{marginTop: "-30px", color: "white", fontWeight: "bolder"}}>MINI GRID & SOLAR HOME SYSTEM</h6>
            </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="http://localhost/greenenergy/streetlight.php" style={{textDecoration: "none"}}>
                <div className="jumbotron" style={{backgroundColor: "yellow", height: "160px", width: "280px"}}>
                  <center><i className="far fa-lightbulb" style={{width: "50px", height: "50px", marginTop: "-70px"}}></i></center><br /><br />
                  <h6 style={{marginTop: "-40px", color: "white", fontWeight: "bolder", marginBottom: "10px"}}>SOLAR STREET LIGHTING & SECURITY LIGHTING SYSTEMS</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="http://localhost/greenenergy/borehole.php" style={{textDecoration: "none"}}>
                <div className="jumbotron" style={{backgroundColor: "#80FF00", height: "160px", width: "280px"}}>
                  <center><i className="fas fa-water" style={{width: "50px", height: "50px", marginTop: "-100px"}}></i></center>
                  <h6 style={{color: "white", fontWeight: "bolder", marginTop: "20px"}}>SOLAR BOREHOLE AND WATER SYSTEMS</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="http://localhost/greenenergy/plant.php" style={{textDecoration: "none"}}>
                <div className="jumbotron" style={{backgroundColor: "yellow", height: "160px", width: "280px"}}>
                  <center><i className="fas fa-seedling" style={{width: "50px", height: "50px", marginTop: "-100px"}}></i></center>
                  <h6 style={{color: "white", fontWeight: "bolder", marginTop: "10px"}}>RENEWABLE ENERGY TRAINING</h6>
                </div>
              </a>
            </div>
          </div>
          </center>
        <div className="row">
          <div className="col-md-6">
            <i className="fas fa-sun" style={{fontSize: "80px"}}></i><br />
            <h4>SOLAR ENERGY</h4>
            <p>Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics, BIPV(Building Integrated Photovoltaic), indirectly using concentrated solar power, or a combination of all.</p>
          </div>
          <div className="col-md-6">
            <img src="image/noun_biomass_2208992.png" height="80" width="80" />
            <h4>BIOMASS ENERGY</h4>
            <p>Biomass is a plant or animal based materials used for electricity production, heat production, or in various industrial processes as raw material for a range of products. </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <i className="fas fa-wind" style={{fontSize: "80px"}}></i>
            <h4>WIND ENERGY</h4>
            <p>Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric generators and traditionally to do other work, like milling or pumping.</p>
          </div>
        
          <div className="col-md-6">
            <img src="image/noun_Geothermal Energy_1147944.png" width="80" height="80" />
            <h4>GEOTHERMAL ENERGY</h4>
            <p>Geothermal energy is the conversion of heat energy generated and stored in the Earth to electricity production. Thermal energy is the energy that determines the temperature of matter.</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <i className="fas fa-wind" style={{fontSize: "80px"}}></i>
            <h4>Geological Services</h4>
            <p>This includes Geophysical survey</p>
          </div>
        
          <div className="col-md-6">
            <img src="image/noun_Geothermal Energy_1147944.png" width="80" height="80" />
            <h4>Hydro Power Scheme</h4>
            <p>Hydro Electric energy is the conversion of energy from the running water into electricity production.</p>
          </div>
        </div>
        <br /><br />
        <center>
        <div className="row">
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
        </div>
        <div className="lie" style={{backgroundColor: "red", width: "50px", height: "2px"
        }}></div>
        <br /><br />
        </center>
        <center>
        <div className="row">
          <div className="col-md-12">
          <h3>We Provide Energy</h3>
          <p>To many clients like government homes and offices</p>
          </div>
        </div>
        <div className="ll"></div>
        <br />
          <div className="row">
          <div className="col-md-4">
            <img src="image/blog-post3.jpg" width="200px" height="150px" />
            <br /><br />
            <h6 style={{fontWeight: "bold"}}>GOVERNMENT</h6>
            <div className="line" style={{backgroundColor: "green", height: "3px", width: "80px"}}></div>
            <br />
            <p align="left">We do business with Government Ministries, Agencies e.t.c to supply electricity to major institutions. </p>
          </div>
        
        <div className="ll"></div>
        <br />
          <div className="col-md-4">
            <img src="image/blog-post2.jpg" width="200px" height="150px" />
            <br /><br />
            <h6 style={{fontWeight: "bold"}}>COMMERCIAL</h6>
            <div className="line" style={{backgroundColor: "green", height: "3px", width: "80px"}}></div>
            <br />
            <p align="left">Commercial Establishments such as supermarkets, hotels, shopping centers, medical institutions e.t.c would require 24hours power supply which we provide</p>
          </div>
        
          <div className="ll"></div>
        <br />
          <div className="col-md-4">
            <img src="image/blog-post1.jpg" width="200px" height="150px" />
            <br /><br />
            <h6 style={{fontWeight: "bold"}}>RESIDENTIAL</h6>
            <div className="line" style={{backgroundColor: "green", height: "3px", width: "80px"}}></div>
            <br />
            <p align="left">Installations can be done on residential buildings at a very affordable rate with additional service time. </p>
          </div>
        </div>
        
        
        
        
        
        </center>
        <center>
        <div className="contai" style={{width: "100%", height: "200px", backgroundColor: "#80FF00"}}>
          <br /><br />
        <div className="row">
          <div className="col-lg-10">
            <h4>NEED OUR SERVICE</h4>
            <p>Kindly Contact Us, If you require our Service, We offer you 100% Service wit just 70% down Payment.</p>
          </div>
          <div className="col-lg-2">
          <Link to="/contact">
            <a className="btn btn-info" href="#" style={{width: "150px", backgroundColor: "#80FF00"}}>CONTACT US</a>
          </Link>
          </div>
        </div>
        <br /><br /> 
        </div>
        <div className="line" style={{backgroundColor: "green", height: "5px", width: "100%"}}></div>
        </center>
        <br /><br />  
  </>
)

export default ServicesScreen;
