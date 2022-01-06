import React, { useContext } from "react";
import{AppContext} from "./context";


function NavBar(){
  const{result } = useContext(AppContext)
    return(
        <>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    
  <a className="navbar-brand" href="a" style={{color:"white" , fontWeight:"bolder" , fontSize:"1.5rem"}}>Shortner</a>
  <p className="profile">{result.name}</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <div className="icons">
    <i class="fas fa-user fa-2x"></i>
    <div className="logSign"></div>
    </div>
    </ul>
  </div>
 
</nav>
        </>
    )
}

export default NavBar;
