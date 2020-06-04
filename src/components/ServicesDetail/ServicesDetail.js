import React from 'react';

function ServicesDetail(props) {
    
    return(


        <div>
            <h4>{props.title}</h4>
            <p>{props.children}</p>
            <div>{props.image}</div>
        </div>

    );
}
export default ServicesDetail;