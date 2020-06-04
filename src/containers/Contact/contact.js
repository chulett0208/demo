import React from 'react';
import ColorButton from '../../components/ColorButton/ColorButton';
import NavBar from '../../components/Navbar/navBar';
import OfficeAddress from '../../components/OfficeAddress/OfficeAddress';
import './contact.css'

export default function contact() {
  return (
    <div>
      <NavBar />
      <br />
      <br/>
      <br />
      <br />
      <ColorButton/>
      <br />
      <p>Contact</p>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <OfficeAddress locationName={"Washington DC Office"} addressLine1={"932 Hungerford Dr. Suite 17B"} addressLine2={"Rockville, MD 20850"} 
                           phone={"866-201-9322"} maplink={""} />
          </div>
          
          <div className="col-md-4">
            <OfficeAddress locationName={"Atlanta Office"} addressLine1={"55 Park Square Ct. Suite 203"} addressLine2={"Roswell, GA 30075"} 
                           phone={"678-731-7301"} maplink={""} />
          </div>

          <div className="col-md-4">
            <OfficeAddress locationName={"Jacksonville Office"} addressLine1={"7899 Baymeadows Way Suite 300"} addressLine2={"Jacksonville, FL 32256"} 
                           phone={"904-595-5151"} maplink={""} />
          </div>

        </div>
      </div>
    </div>
  );
}