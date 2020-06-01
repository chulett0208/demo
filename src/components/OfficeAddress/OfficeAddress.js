import React from 'react';

function OfficeAddress(props) {
    /*const {locationName, addressLine1, addressLine2, phone, maplink}=props;*/
    
    
    return(

        <div>
            <p>{props.locationName}</p>
            <p>{props.addressLine1}</p>
            <p>{props.addressLine2}</p>
            <p>Phone: {props.phone}</p>
        </div>

    );
}
export default OfficeAddress;