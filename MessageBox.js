// under components

import React from 'react';
//function()
// this ` is not ',   to find this:` is the left top corner of the keyboard next to 1.
export default function MessageBox(props) {

        return (<div className={`alert alert-${props.variant || 'info'}`}>
        {props.children}
        </div>
        );
                

}

