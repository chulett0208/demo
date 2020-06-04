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

      <ServicesDetail title={"Descriptive and Predictive"}>
          <p>
              What if we told you that we can predict influenza 
              outbreaks down to the ZIP Code? Or that we can accurately 
              spotlight high-risk targets in real time for customs agents? 
              At BNL Consulting, we understand that data can be used not 
              only to describe what has already happened, but also to 
              anticipate what is likely to happen. We develop advanced 
              tools for our clients that allow them to seize control of 
              their futures by turning insightful facts into reliable 
              forecasts.
          </p>
          <img src="https://bnlconsulting.com/images/data-analytics/NCBP-Map.a1028f07.jpg" alt="" />
      </ServicesDetail>

      <ServicesDetail title={"Descriptive and Predictive"}>
          <p>
              What if we told you that we can predict influenza 
              outbreaks down to the ZIP Code? Or that we can accurately 
              spotlight high-risk targets in real time for customs agents? 
              At BNL Consulting, we understand that data can be used not 
              only to describe what has already happened, but also to 
              anticipate what is likely to happen. We develop advanced 
              tools for our clients that allow them to seize control of 
              their futures by turning insightful facts into reliable 
              forecasts.
          </p>
          <img src="https://bnlconsulting.com/images/data-analytics/NCBP-Map.a1028f07.jpg" alt="" />
      </ServicesDetail>
    </div>
  );
}

export default services;