import React from "react";
import { Link } from "react-router-dom";

const CareersScreen = () => (
 <div>
     <div className="slider" style={{height: "50vh"}}>
          <div className="load">
            
          </div>
          <div className="content" style={{height: "50vh"}}>
            <br /><br /><br />
            <h1 style={{marginLeft: "60px", color: "#80FF00"}}>Join Green Energy</h1>
            <div className="principal">
              
            </div>
          </div>
        </div>
        <br /><br />
        <center><div className="lie" style={{backgroundColor: "red", width: "50px", height: "2px"}}></div>
        <br />
        <h2>Thank you for showing interest to join Green Energy</h2>
        <h5>Kindly fill in the form below to apply for a position with us</h5>
        </center>
        <br /><br />
        <center>
        <form method="post" action="careerreg.php">
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="name" placeholder="Your Name" className="form-control" required="" /><br />
              <input type="email" name="email" placeholder="Your Email" className="form-control" required="" /><br />
              <input type="text" name="phonenumber" placeholder="Your Phone Number" className="form-control" required="" /><br />
              <input type="text" name="experience" placeholder="Work Experience" className="form-control" required="" style={{height: "130px"}} /><br />
            </div>
        
            <div className="col-md-6">
              <input type="text" name="qualifications" placeholder="Qualifications" className="form-control" required="" style={{height: "130px"}} /><br />
              <input type="text" name="skills" placeholder="Skills" className="form-control" required="" style={{height: "130px"}} /><br />
              <input type="button" value="Register" className="btn btn-danger" style={{backgroundColor: "#80FF00"}} />
            </div>
          </div>
            
          </form>
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

export default CareersScreen;