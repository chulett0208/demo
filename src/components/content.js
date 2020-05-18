import React from 'react';
import '../index.css';

function content() {
    return(
        <div>
            <br/>
            <br/>

            {/*  Home1  */}
            <div className="container1">

                    <div className="home1">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <img className="img-circle" 
                                src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" alt="" />

                            <h3>Data Analytics</h3>
                            <p>
                                There are questions that need to be answered to unlock your data's value. 
                                First, how do you gather high-quality data?  Then how do you organize it? 
                                And most importantly, how do you use it to reach your goals?  We utilize 
                                industry-leading tools like SAS and R to find precisely the right data that 
                                tells you where you are and how to get where you want to go.
                            </p>
                            <p>
                                <button className="button-detail">
                                    Analytics Services &nbsp;
                                    <i className="fa fa-caret-right"></i>
                                </button>   
                            </p>
                        </div>

                        <div className="col-md-4">
                           <img class="img-circle" 
                           src="https://bnlconsulting.com/images/intro/Data-Visualization-Icon.bdda0ef9.png" alt="" />
                           <h3>Data Visualization</h3>
                           <p>
                               When is the last time you took a good look at your organization? Chances are, 
                               you never have—not the way we can present it. We extract the most meaningful
                               data and present it in intuitive visual representations like charts and graphs, 
                               so you have up-to-the-minute information at a glance. With our visualizations 
                               you can make smarter decisions faster.
                           </p>
                           <p>
                               <button class="button-detail">
                                   Visualization strategies &nbsp;
                                   <i class="fa fa-caret-right"></i>
                               </button>
                           </p>
                        </div>

                        <div className="col-md-4">
                            <img className="img-circle" src="https://bnlconsulting.com/images/intro/Enterprise-Integration-Icon.ef5f0a70.png" alt="" />
                            <h3>Enterprise Integration</h3>
                            <p>
                                Having all the information you need to run your organization is important. 
                                Making that information work seamlessly throughout your organization is even 
                                more vital. At BNL Consulting, we bring together cutting-edge database systems, 
                                reporting tools, and enterprise software systems, such as SAS, to make sure 
                                everyone has everything they need all the time.
                            </p>
                            <p>
                                <button class="button-detail">
                                    Integration solutions &nbsp;
                                    <i className="fa fa-caret-right"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
                
            

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



            {/* Home2  */}
            <div className="featurette">
                <div className="container2">
                    <div className="home2">

                        <div className="row">

                            <div className="col-md-3">
                                <img className="img-rounded" src="https://bnlconsulting.com/images/intro/Capitol-Icon.9fe0c40c.png" alt="Public Sector" />
                            </div>
                            <div className="col-md-9">
                                <h3>Public Sector</h3>
                                <p>
                                    BNL Consulting is proud to be one of the largest professional 
                                    services providers to SAS in the public sector, and we cherish 
                                    the relationships we have cultivated with our federal partners. 
                                    So whether you require modernization of your SAS systems and 
                                    processes, seamless integration of heterogeneous enterprise systems 
                                    (such as Oracle, SAS, and MicroStrategy), or a full-feature, 
                                    self-service analytics platform custom-made for use by your 
                                    decision-makers and non-technical staff, we can make it happen 
                                    without the red tape.
                                </p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="featurette">
                <div className="container2">
                    <div className="home2">

                        <div className="row">

                            <div className="col-md-3 order-md-2">
                                <img className="img-rounded" src="https://bnlconsulting.com/images/intro/Pulse-Icon.6d11c744.png" alt="Health &amp; Medical" />
                            </div>
                            <div className="col-md-9 order-md-1">
                                <h3>Health &amp; Medical</h3>
                                <p>
                                    The landscape of the healthcare, medical, and pharmaceutical 
                                    industries is dramatically changing and doing so rapidly. Whether 
                                    you want to manage your costs by accurately identifying 
                                    super-utilizers, ensure your organization’s accountability by 
                                    monitoring for both compliance and fraud, and empower your non-technical 
                                    staff to make smarter decisions by developing systems with intuitive 
                                    visualizations and highly-customizable workflows, our offerings can 
                                    make sure your organization remains healthy and productive.
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


            <div className="featurette">
                <div className="container2">
                    <div className="home2">

                        <div className="row">   

                            <div className="col-md-3">
                                <img className="img-rounded" src="https://bnlconsulting.com/images/intro/Play-Icon.9955321b.png" alt="Sports &amp; Entertainment" />
                            </div>
                            <div className="col-md-9">
                                <h3>Sports &amp; Entertainment</h3>
                                <p>
                                    It’s no secret that advanced analytics are taking the sports world 
                                    by storm, but all aspects of the entertainment industry could benefit
                                    from the big data revolution. Whether you want to assemble a championship 
                                    team using a comprehensive analytics console with integrated roster and 
                                    scouting management, boost ticket sales for your shows with a customized 
                                    social media brand impression dashboard, or optimize your programming by 
                                    integrating robust, real-time sentiment tracking, BNL Consulting can help 
                                    you come out on top.
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}
export default content;