import React from 'react';
import { Link } from 'react-router-dom';

const ProjectScreen = () => (
  <div>
        <div className="slider" style={{height: "50vh"}}>
        <div className="load">
          
        </div>
        <div className="content" style={{height: "50vh"}}>
          <br /><br /><br />
          <h1 style={{marginLeft: "60px", color: "#80FF00"}}>Our Projects</h1>
          <div className="principal">
            
          </div>
        </div>
      </div>
      <br /><br />
      <center>
        <div className="lie" style={{backgroundColor: "red", width: "50px", height: "2px"}}></div>
        <br />
        <h2>Latest Projects</h2>
        <h5>Explore some of our latest projects</h5>
      </center>
      <center>
      <div className="row">
        <div className="col-md-3">
          <img src="image/home-wind-turbine-size-types-speed-maintenance-1024x576.jpg" className="img-fluid" style={{height: "230px"}} />
            <br /><br />
            <h5>An Hybr /id Home System of Wind and Solar Solution</h5>
        </div>
      <center />
        <div className="col-md-3">
          <img src="image/solar-panel-rooftop-featured.jpg" className="img-fluid" style={{height: "230px"}} />
          <center>
            <br />
            <h5>A Stand-alone Solar Home System</h5>
          </center>
        </div>
        <div className="col-md-3">
          <img src="image/solar-energy-seniors.jpg" className="img-fluid" />
          <center>
            <br />
            <h5>Grid Connected Solar Home Systems</h5>
          </center>
        </div>
        <div className="col-md-3">
          <img src="image/shutterstock_690061927-1200x802.jpg" className="img-fluid" />
          <center>
            <br />
            <h5>Grid Connected Solar Home Systems</h5>
          </center>
        </div>
      
      
      </div>
      <br /><br />
      <div className="row">
        <div className="col-md-3">
          <img src="image/PPhoriontalLineup-cropped2-1000-640x352.jpg" className="img-fluid" style={{height: "230px"}} />
          <center>
            <br />
            <h5>Renewable energy gasification biomass power generation(Small Power Generators that Run on Biomass)</h5>
          </center>
        </div>
        <div className="col-md-3">
          <img src="image/Energy-Saved-Biomass-Gasifier-for-Home-Use-or-Generation-Power-Plant.jpg" className="img-fluid" style={{height: "230px", width: "370px"}} />
          <center>
            <br />
            <h5>Energy-Saved biomass gasifier for home use or generation power plant</h5>
          </center>
        </div>
        <div className="col-md-3">
          <img src="image/mhg19.jpg" className="img-fluid" style={{height: "230px", width: "370px"}} />
          <center>
            <br />
            <h5>Hydro-electric Home Power Systems</h5>
          </center>
        </div>
        <div className="col-md-3">
          <img src="image/cdd1f005c53daf37ef0eb0c7cc1239d7.jpg" className="img-fluid" style={{height: "230px"}} />
          <center>
            <br />
            <h5>A Solar Car Port</h5>
          </center>
        </div>
      
      
      </div>
      
      
      
      </center>
      <br /><br /><br /><br />
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
      </center>
  </div>
)
export default ProjectScreen;