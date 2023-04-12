import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid green',margin:'10px', padding:'5px'}}>
           <h3>This is Dial componant</h3>
           <p>Your steps count : {props.steps} </p>
           <Knob steps={props.steps} ></Knob>
        </div>
    );
};

export default Dial;