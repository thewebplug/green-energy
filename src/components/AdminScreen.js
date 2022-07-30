import React from "react";

const AdminScreen = () => {
  // style={
  //       .line{
  //         width: 100%;
  //         height: 2px;
  //         background-color: #ccc;
  //         float: none;
  //         margin-top: 10px;
  //         margin-bottom: 10px;
  //         background-color: #80FF00;
  //       }
  //       h3{
  //         color: #000;
  //         font-size: 20px;
  //       }
        
  //       .dropdown-menu{
  //         width: 300px;
  //       }
  //       .jumbotron{
  //         background-color: #ccc;
  //       }
  //       a{
  //         font-size: 20px;
  //         color: #000;
  //         font-weight: bold;
  //       }
      
  // }
  return (
<div>
  <div className="slider">
        <div className="load">
          
        </div>
        <div className="content">
          <br /><br /><br />
          <h1 style={{marginLeft: "60px", color: "#80FF00"}}>Greenerg Energy Admin Panel</h1>
          <div className="principal">
            
          </div>
        </div>
      </div>
      
      
      <div className="jumbotron" style={{backgroundColor: "#80FF00"}}>
        
          <div className="line" style={{
            width: "100%",
          height: "2px",
          backgroundColor: "#ccc",
          float: "none",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#80FF00"
          }}></div>
          <nav className="navbar navbar-expand-sm bg-light navbar-light vv">
        
        <ul className="navbar-nav">
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>
            <h3 style={{
              color: "#000",
              fontSize: "20px"
            }}>Training</h3>
            </a>
            <div className="dropdown-menu" style={{width: "300px"}}>
            <center>
              <p><a href="admintraining.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Insert New Training Record</a></p>
              <p><a href="updateoptions.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Update Training Record</a></p>
              <p><a href="removetraining.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Delete Training Record</a></p>
          <p><a href="viewtraining.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>View Training Record</a></p>
            </center>
            </div>
          </li>
        </ul>
      </nav>
        <div className="line" style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#ccc",
          float: "none",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#80FF00"
        }}></div>
      
        <nav className="navbar navbar-expand-sm bg-light navbar-light vv">
        
        <ul className="navbar-nav">
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>
            <h3 style={{
              color: "#000",
              fontSize: "20px"
            }}>Contact Us</h3>
            </a>
            <div className="dropdown-menu" style={{width: "300px"}}>
              <p><a href="admincontact.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Insert New Contact Record</a></p>
              <p><a href="updatecontact.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Update Contact Record</a></p>
              <p><a href="removecontact.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Delete Contact Record</a></p>
          <p><a href="viewcontact.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>View Contact Record</a></p>
            </div>
          </li>
        </ul>
      </nav>
      
      
        <div className="line" style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#ccc",
          float: "none",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#80FF00"
        }}></div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light vv">
        
        <ul className="navbar-nav">
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>
            <h3 style={{
              color: "#000",
              fontSize: "20px"
            }}>Careers</h3>
            </a>
            <div className="dropdown-menu" style={{width: "300px"}}>
              <p><a href="admincareers.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Insert New Career Record</a></p>
              <p><a href="updatecareer.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Update Career Record</a></p>
              <p><a href="removecareer.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>Delete Career Record</a></p>
          <p><a href="viewcareer.php" style={{fontSize: "20px", color: "#000", fontWeight: "bold"}}>View Career Record</a></p>
            </div>
          </li>
        </ul>
      </nav>
        
        <div className="line" style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#ccc",
          float: "none",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#80FF00"
        }}></div>
        
      
      </div>
      
      
</div> 
)
}
export default AdminScreen;
