import React from 'react';
import '../index.css';

function content() {
    return(
        <div>
            <div class="container">

                <div class="row">

                    <div class="col-md-4">
                        <img class="img-circle" 
                        src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" alt="" />
                        <h3>Data Analytics</h3>
                        <p>A paragraph</p>
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
                        <p>A paragraph</p>
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
                        <p>A paragraph</p>
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
            <div class="spacer-15" />
            
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