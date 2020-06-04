import React from 'react';

function ServicesDetail(props) {
    
    return(

        <div>
            <p>{props.locationName}</p>
            <p>{props.addressLine1}</p>
            <p>{props.addressLine2}</p>
            <p>Phone: {props.phone}</p>
        </div>

    );
}
export default ServicesDetail;