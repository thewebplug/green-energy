import React from 'react';
import { Link } from 'react-router-dom';

const ContactScreen = () => (
  <div>
    <div className="slider" style={{height: "50vh"}}>
      <div className="load"></div>
      <div className="content" style={{height: "50vh"}}>
        <br /><br /><br />
          <h1 style={{marginLeft: "60px", color: "#80FF00"}}>Contact Us</h1>
          <div className="principal"></div>
      </div>
    </div>
        <br /><br />
    <center>
      <form method="post" action="contactreg.php">
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="name" placeholder="Your Name" className="form-control" required="" /><br />
              <input type="email" name="email" placeholder="Your Email" className="form-control" required="" /><br />
              <input type="text" name="phonenumber" placeholder="Your Phone Number" className="form-control" required="" /><br />
            </div>
            <div className="col-md-6">
              <select name="aboutus" className="form-control" required="">
                <option className="ho" value="-1">How did you hear about us</option>
                <option className="ho" value="Social Media">Social Media</option>
                <option className="ho" value="Word of Mouth">Word of Mouth</option>
              </select><br />
              <input type="text" name="message" placeholder="Your Message" className="form-control" required=""
                style={{height: "100px"}} /><br />
              <input type="button" value="GET A QUOTE" className="btn btn-primary" />
            </div>
          </div>
      </form>
    </center>
    <br /><br /><br /><br />
    <center>
      <div className="lie" style={{backgroundColor: "red", width: "50px", height: "2px"}}></div>
    </center>
    <br />
    <center>
    <Link to="/training">
      <a className="btn btn-danger" href="http://localhost/greenenergy/training.php" style={{width: "150px", backgroundColor: "orange"}}>
        <i className="fas fa-hand-point-right"></i> TRAINING
      </a>
    </Link>
    <br />
    <br />
    </center>
  </div>
)

export default ContactScreen