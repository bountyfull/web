import React from "react";
import "./Nav.css";

const Nav = () =>
  
	<div className="container-fluid px-0">
	  	<nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
	  	    <div className="col-10">
	  	     	<a className="nav-item" href="/">BountyFull</a>
	  	    </div>
	  	    <div className="col-2">

	         	<button className="navbar-toggler" type="button">
	           		<span className="navbar-toggler-icon"></span>
	          	</button>
	          	<div className="collapse navbar-collapse" id="navbarNav">
	  	            <ul className="navbar-nav">
	  	            	<li className="nav-item active">
	  	              		<a className="nav-link" href="#">About</a>
	  	            	</li>
	  	             	<li className="nav-item active">
	  	               		<a className="nav-link" href="/">Signup</a>
	  	             	</li>
  	             		
	  	            </ul>
	          	</div>
  	        
  	    	</div>
  	    </nav>
	</div>;

export default Nav;