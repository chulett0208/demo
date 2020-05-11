import React from 'react';
import '../index.css';

function content() {
    return(
        <div>
            <br />
            <br />
            <br />

            <div class="container">

                <div class="row">

                    <div class="col-md-4">
                        <img class="img-circle" 
                        src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" alt="" />
                        <h3>Data Analytics</h3>
                        <p>
                           There are questions that need to be answered to unlock your data's value. 
                           First, how do you gather high-quality data? Then how do you organize it? 
                           And most importantly, how do you use it to reach your goals? We utilize 
                           industry-leading tools like SAS and R to find precisely the right data that 
                           tells you where you are and how to get where you want to go.
                        </p>
                        <div class="spacer-15" />
                        <div class="spacer-15" />
                        <p>
                            <button type="button" class="btn btn-secondary btn-sm">
                                Analytics Services
                            </button>
                        </p>
                    </div>

                    <div class="col-md-4">
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
                        <div class="spacer-15" />
                        <p>
                            <button type="button" class="btn btn-secondary btn-sm">
                                Visualization strategies
                            </button>
                        </p>
                    </div>

                    <div class="col-md-4">
                        <img class="img-circle" src="https://bnlconsulting.com/images/intro/Enterprise-Integration-Icon.ef5f0a70.png" alt="" />
                        <h3>Enterprise Integration</h3>
                        <p>
                            Having all the information you need to run your organization is important. 
                            Making that information work seamlessly throughout your organization is even 
                            more vital. At BNL Consulting, we bring together cutting-edge database systems, 
                            reporting tools, and enterprise software systems, such as SAS, to make sure 
                            everyone has everything they need all the time.
                        </p>
                        <div class="spacer-15" />
                        <p>
                            <button type="button" class="btn btn-secondary btn-sm">
                                Integration solutions
                            </button>
                        </p>
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
            <br />
            <br />
            <br />

            <div class="container">
                <div class="row">
                    
                    <div class="col-md-3">
                        <img class="img-rounded" src="https://bnlconsulting.com/images/intro/Capitol-Icon.9fe0c40c.png" alt="Public Sector" />
                    </div>
                    <div class="col-md-9">
                        <h3>Public Sector</h3>
                        <p>A paragraph</p>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div class="row">
                    <div class="col-md-9">
                        <h3>Health &amp; Medical</h3>
                        <p>A paragraph</p>
                    </div>
                    <div class="col-md-3">
                        <img class="img-rounded" src="https://bnlconsulting.com/images/intro/Pulse-Icon.6d11c744.png" alt="Health &amp; Medical" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />

                <div class="row">
                    <div class="col-md-3">
                        <img class="img-rounded" src="https://bnlconsulting.com/images/intro/Play-Icon.9955321b.png" alt="Sports &amp; Entertainment" />
                    </div>
                    <div class="col-md-9">
                        <h3>Sports &amp; Entertainment</h3>
                        <p>A paragraph</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default content;