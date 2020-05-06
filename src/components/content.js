import React from 'react';
import '../index.css';

function content() {
    return(
        <div>
            <div class="container">

                <div class="row">

                    <div class="col-md-4">
                        <img class="img-circle" 
                        src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" alt="" width="120" />
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
                        src="https://bnlconsulting.com/images/intro/Data-Visualization-Icon.bdda0ef9.png" alt="" width="120" />
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
                        <img class="img-circle"src="https://bnlconsulting.com/images/intro/Enterprise-Integration-Icon.ef5f0a70.png" alt="" width="120" />
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
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer-15" />
            
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-rounded" src="https://bnlconsulting.com/images/intro/Capitol-Icon.9fe0c40c.png" alt="Public Sector" width="150" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default content;