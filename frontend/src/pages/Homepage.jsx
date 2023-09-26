import React, { useContext } from "react";
import "../assets/css/Homepage.scss";
import Login from "../Components/Login";
import one from "../assets/icons/one.png";
import two from "../assets/icons/two.png";
import three from "../assets/icons/three.png";
import { AuthContext } from "../context/AuthContext";
import CheckupCard from "../Components/CheckupCard";

// import bgi from "../assets/icons/mainBG.png";
function Homepage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className="parent">{!isLoggedIn ? <Login /> : <CheckupCard />}
      </div>
      <div className="procedure">
        <div className="procedure__heading">
            <p1>How </p1><p2>Dermacare </p2><p3>works ?</p3>
            <hr></hr>
        </div>

        <div className="procedureContainer">
          <div className="procedureContainer__div1">
                <div className="procedureContainer__div1__Image">
                  <img src={one} alt="" className="one-section" /></div>
                <div className="procedureContainer__div1__Heading">
                  <p>Click & Upload</p>
                </div>
                  <div className="procedureContainer__div1__Content">
                  <p>
                  Navigate to the upload section through the button placed at the bottom of the login form. Upload atleast 3 images of the affected part of skin of your body. Make sure the images are taken from different angles.
                  </p>
                  </div>               
          </div>

          <div className="procedureContainer__div2">
                <div className="procedureContainer__div2__TwoImage">
                  <img src={two} alt="" className="two-section" />
                <div className="procedureContainer__div2__TwoHeading">
                  <p>View your Diagnosis Report</p>
                </div>
                  <div className="procedureContainer__div2__TwoContent">
                  <p>Upon successful upload of images,head over to the profile section through the person icon placed at top right corner of navigation panel where you can access the report generated by our model.</p>
                  </div>
                </div>
          </div>

          <div className="procedureContainer__div3">
                <div className="procedureContainer__div3__ThreeImage">
                  <img src={three} alt="" className="three-section" />
                <div className="procedureContainer__div3__ThreeHeading">
                  <p>Access via Email</p>
                </div>
                  <div className="procedureContainer__div3__ThreeContent">
                  <p>
                  A copy of the diagnosis report will be mailed to the user as well keeping in mind their convenience and easy storage.
                  </p>
                  </div>
                </div>
          </div>
          </div>

      </div>
    </>
  );
}

export default Homepage;
