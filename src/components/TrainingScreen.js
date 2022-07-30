import React from "react";
import { Link } from "react-router-dom";

const TrainingScreen = () => (
    <div>
      <div className="slider" style={{height: "50vh"}}>
          <div className="load">
            
          </div>
          <div className="content" style={{height: "50vh"}}>
            <br /><br /><br />
            <h1 style={{marginLeft: "60px", color: "black"}}>Enroll for Training</h1>
            <div className="principal">
              
            </div>
          </div>
        </div>
        <br /><br />
        <center>
        <form action="reg.php" method="post">
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="name" placeholder="Your Name" className="form-control" required="" /><br />
            <input type="email" name="email" placeholder="Your Email" className="form-control" required="" /><br />
            <input type="text" name="phonenumber" placeholder="Your Phone Number" className="form-control" required="" /><br />
            
            </div>
        
            <div className="col-md-6">
              <select name="days" className="form-control" required="">
              <option className="ho" value="-1">Preffered Days</option>
              <option className="ho" value="weekdays">weekdays</option>
              <option className="ho" value="weekends">weekends</option>
              </select>
              <br />
              <select name="className" className="form-control" required="">
              <option className="ho" value="-1">ClassName</option>
              <option className="ho" value="Solar Photovoltaic Installation">Solar Photovoltaic Installation</option>
              <option className="ho" value="Solar Photovoltaic Installation and Supervision">Solar Photovoltaic Installation and Supervision</option>
              <option className="ho" value="Mini Grid Design">Mini Grid Design</option>
        
              </select>
              <br />
              <select name="aboutus" className="form-control" required="">
              <option className="ho" value="-1">How did you hear about us</option>
              <option className="ho" value="Social Media">Social Media</option>
              <option className="ho" value="World of Mouth">World of Mouth</option>
        
              </select>
              <br />
              <input type="text" name="message" placeholder="Your Message" className="form-control" style={{height: "100px"}} required="" /><br />
              <input type="submit" name="submit" value="Register" className="btn btn-danger" />    
            </div>
          </div>
            
          </form>
          </center>
          <br /><br /><br />
          <div className="row">
            <div className="col-md-6">
              <img src="image/about-us-570x370.jpg" className="img-fluid" />
            </div>
        
            <div className="col-md-6">
              <h2>WHY CHOOSE US</h2><br />
              <p>
        WHY CHOOSE US
        We Are solar the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, We Are solar the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.<br /><br />
        
        We Are solar the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, We Are solar the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
            </div>
          </div>
        <center>
          <Link to="/contact">
            <a className="btn btn-info" href="http://localhost/greenenergy/contact.php" style={{backgroundColor: "#80FF00", width: "200px"}}><i className="fas fa-hand-point-right"></i> GET A QUOTE</a>
          </Link>
        </center>
        <br />
    </div>
)
export default TrainingScreen;
