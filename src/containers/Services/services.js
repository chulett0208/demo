import React from 'react';
import ColorButton from '../../components/ColorButton/ColorButton';
import NavBar from '../../components/Navbar/navBar';
import ServicesDetail from '../../components/ServicesDetail/ServicesDetail'
import './Services.css'
function services() {
  
  return (
    <div>
      <NavBar />
      <br />
      <ColorButton />
      <br />
      <p>Services</p>

      <ServicesDetail title={"Better Inputs, Better Outputs"}>
          <p>
              The insights you gain about your organization 
              are only as good as the data you collect. 
              That’s why we make sure you’re gathering the 
              right data and doing it accurately. By taking 
              advantage of the full power of SAS and other analytical 
              tools, we turn your data into actionable information, 
              derived from rich data and leading to valuable insights. 
              It is these insights that help your business run smarter 
              and more efficiently.
          </p>
          <img src="https://bnlconsulting.com/images/data-analytics/Flu-Trends.bbb66650.png" alt="" />
      </ServicesDetail>
    </div>
  );
}

export default services;