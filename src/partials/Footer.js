import { Link } from "react-router-dom";

const Footer = () => (
        <div className="ftt">
            <div className="item1">
                <div>
                    <h3>Green Energy</h3>
                    <p>Our energy businnes aims to deliver renewable energy
                        solutions to the African population</p>
                    <p>We build and install sustainable green energy soultions (such
                        as solar, biomass, wind, hydro etc)</p>
                </div>
                <div>
                    <h5>GET IN TOUCH</h5>
                    <p>PHONE: ***********************</p>
                    <p>EMAIL: info@greenenergy.com</p>
                    <p>ADRESS: *********************88</p>
                </div>
                <div>
                    <h5>NEWS LETTER</h5>
                    <p>SIGN UP YOUR NEWSLETTER</p>
                    <form action="newsletterreg.php" method="post">
                        <input className="form-control" type="email" name="email" placeholder="EMAIL ADRESS" />
                        <input type="submit" name="submit" value="SIGN UP"
                            className="btn btn-primary" />
        
                    </form>
                </div>
            </div>
            <div className="item2">
                <div className="">
                    <a style={{color: "white"}}><Link to="/projects">Projects</Link></a>
                </div>
    
                <div className="">
                    <a href="#" style={{color: "white"}}>|</a>
                </div>
    
                <div className="">
                    <a style={{color: "white"}}><Link to="/contact">Contact</Link></a>
                </div>
    
                <div className="">
                    <a href="#" style={{color: "white"}}>|</a>
                </div>
    
                <div className="">
                    <a href="training.php" style={{color: "white"}}><Link to="/training">Training</Link></a>
                </div>
    
                <div className="">
                    <a href="#" style={{color: "white"}}>|</a>
                </div>
                <div className="">
                    <a style={{color: "white"}}><Link to="/careers">Careers</Link></a>
                </div>
                <div className="">
                    <a href="#" style={{color: "white"}}>|</a>
                </div>
                <div className="">
                    <a style={{color: "white"}}><Link to="/contact">Get A Quote</Link></a>
                </div>
            </div>
            <div className="item3">
                <h6 style={{color: "white"}}>&copy; 2022 Green Energy All rights reserved.</h6>
            </div>
        </div>
    
    )

export default Footer;
