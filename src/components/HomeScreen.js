import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
        return(
            <div>
                    <div className="slider">
                    <div className="load">

                    </div>
                    <div className="content">
                        <br/><br/><br/>
                        <h1 style={{marginLeft: "60px", marginTop: "110px", color: "#80FF00"}}>Using Renewable Energy to better Lives
                        </h1>
                        <div className="principal">

                        </div>
                    </div>
                </div>
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
                <div className="line" style={{backgroundColor: "red", height: "1px"}}></div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>We Provide Energy</h3>
                        <p>To many clients such as Government, Commercial, Offices and Residential buildings</p>
                    </div>
                </div>
                <div className="ll"></div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <img src="image/blog-post3.jpg" width="200px" height="150px" alt="" />
                        <br/><br/>
                        <h6 style={{fontWeight: "bold"}}>GOVERNMENT</h6>
                        <div className="line" style={{backgroundColor: "green", height: "3px"}}></div>
                        <br/>
                        <p>We do business with Government Ministries, Agencies e.t.c to supply electricity to major <br/>
                            institutions. </p>
                    </div>

                    <div className="ll"></div>
                    <br/>
                    <div className="col-md-4">
                        <img src="image/blog-post2.jpg" width="200px" height="150px" alt="" />
                        <br/><br/>
                        <h6 style={{fontWeight: "bold"}}>COMMERCIAL</h6>
                        <div className="line" style={{backgroundColor: "green", height: "3px"}}></div>
                        <br/>
                        <p>Commercial Establishments such as supermarkets, hotels, shopping centers,<br/> medical institutions e.t.c
                            would require 24hours power supply which we provide</p>
                    </div>

                    <div className="ll"></div>
                    <br/>
                    <div className="col-md-4">
                        <img src="image/blog-post1.jpg" width="200px" height="150px" />
                        <br/><br/>
                        <h6 style={{fontWeight: "bold"}}>RESIDENTIAL</h6>
                        <div className="line" style={{backgroundColor: "green", height: "3px"}}></div>
                        <br/>
                        <p>Installations can be done on residential buildings at a very affordable rate with additional<br/>service
                            time. </p>
                    </div>
                </div>

                <div className="ll"></div>
                <br/>

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
                <div className="line" style={{backgroundColor: "red", height: "1px"}}></div>
                <br/><br/>
                <footer className="footer" style={{height: "260px", margin: "auto",
                background: "url(image/clear-light-bulb-planter-on-gray-rock-1108572.jpg) no-repeat 50% 50%",
                backgroundSize: "cover",
                display: "table",
                position: "relative"}}>


                    <div className="row">
                        <div className="col-md-12">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>SAVE THE PLANET!</h3>
                            <p style={{color: "white", fontWeight: "bolder"}}>Strong winds, sunny skies, abundant plant matter, heat
                                from the earth, and fast-moving<br/> water can each provide a vast and constantly replenished supply
                                of energy.<br/> A relatively small fraction of Nigerian electricity curentlly comes from from these
                                sources, but that<br/> could change. studies have repeatedly shown that renewable energy can provide
                                a<br/> significant share of future electricity needs, even after accounting for potential constants.
                            </p><br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </footer>
                <br/>
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

                <div className="line" style={{backgroundColor: "red", height: "1px"}}></div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Renewable Energy</h3>
                        <p>Different renewable energy<br/>resources to choose from</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <i className="fas fa-sun" style={{fontSize: "79px"}}></i><br/>
                        <h4>SOLAR ENERGY</h4>
                        <p align="left">Solar power is the conversion of energy from sunlight into electricity, either directly
                            using photovoltaics, BIPV(Building Integrated Photovoltaic), indirectly using concentrated solar power,
                            or a combination of all.</p>
                    </div>

                    <div className="col-lg-3">
                        <img src="image/noun_biomass_2208992.png" height="80" width="80" />
                        <h4>BIOMASS ENERGY</h4>
                        <p>Biomass is a plant or animal based materials used for electricity production, heat production, or in
                            various industrial processes as raw material for a range of products. </p>
                    </div>

                    <div className="col-lg-3">
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/wind-turbine-2.png" width="80" height="80" />
                        <h4>WIND ENERGY</h4>
                        <p>Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric
                            generators and traditionally to do other work, like milling or pumping.</p>
                    </div>

                    <div className="col-lg-3">
                        <img src="image/noun_Geothermal Energy_1147944.png" width="80" height="80" />
                        <h4>GEOTHERMAL ENERGY</h4>
                        <p>Geothermal energy is the conversion of heat energy generated and stored in the Earth to electricity
                            production. Thermal energy is the energy that determines the temperature of matter.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <img src="image/noun_Hydropower_1364808.png" width="150" height="150" />
                        <h4>HYDRO-ELECTRIC ENERGY</h4>
                        <p>Hydro Electric energy is the conversion of energy from the running water into electricity production.</p>
                    </div>
                </div>
                <div className="body2" style={{height: "100%", height: "260px", margin: "auto",
                background: "url(image/project_5-380x254.jpg) no-repeat 50% 50%",
                backgroundSize: "cover",
                display: "table",
                position: "relative"}}>
                    <center>
                        <div className="color-overlay"
                            style={{background: "#000", opacity: ".7", position: "absolute", width: "100%", height: "100%"}}></div>
                        <div className="col-md-12">
                            <h2 style={{color: "white"}}>Latest Projects</h2>
                            <p style={{color: "#CCC"}}>Recent Installations done by Green Energy <br/> Creating Renewable Energy for
                                All</p>
                        </div>
                    </center>
                    <div className="row">
                        <div className="col-lg-3">
                            <img src="image/solar2.jpg" width="100%" height="350" />
                            <div className="container"
                                style={{width: "100%", height: "100px", margin: "auto", float: "none", backgroundColor: "white"}}>
                                <br/>
                                <center>
                                    <h5 style={{fontWeight: "bolder"}}>Lorem Ipsum is simply dummy text.</h5>
                                </center>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <center><img src="image/solar1.jpg" width="100%" height="350" /></center>
                            <div className="container"
                                style={{width: "100%", height: "100px", margin: "auto", float: "none", backgroundColor: "white"}}>
                                <br/>
                                <center>
                                    <h5 style={{fontWeight: "bolder"}}>Lorem Ipsum is simply dummy text.</h5>
                                </center>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <center><img src="image/biomass.jpg" width="100%" height="350" /></center>
                            <div className="container"
                                style={{width: "100%", height: "100px", margin: "auto", float: "none", backgroundColor: "white"}}>
                                <br/>
                                <center>
                                    <h5 style={{fontWeight: "bolder"}}>Lorem Ipsum is simply dummy text.</h5>
                                </center>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <center><img src="image/biomass2.jpg" width="100%" height="350" /></center>
                            <div className="container"
                                style={{width: "100%", height: "100px", margin: "auto", float: "none", backgroundColor: "white"}}>
                                <br/>
                                <center>
                                    <h5 style={{fontWeight: "bolder"}}>Lorem Ipsum is simply dummy text.</h5>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6" style={{display: "flex", justifyContent: "space-between", margin: "auto", flexWrap: "wrap"}}>
                            <Link to="/contact">
                                <a className="btn btn-info" style={{backgroundColor: "#80FF00", width: "150px"}}>
                                    <i className="fas fa-hand-point-right"></i> GET A QUOTE
                                </a>
                            </Link>
                            <Link to="/projects">
                                <a className="btn btn-danger"  style={{width: "170px", backgroundColor: "yellow"}}>
                                    <i className="fas fa-hand-point-right"></i> MORE PROJECTS
                                </a>
                            </Link>
                            <Link to="/training">
                                <a className="btn btn-danger" style={{width: "150px"}}>
                                    <i className="fas fa-hand-point-right"></i> TRAINING
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }


export default HomeScreen;