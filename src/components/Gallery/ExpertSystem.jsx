import React from 'react';


export default function ExpertSystem (props){
    console.log(props)
    return (
        <div>
            This is expert ExpertSystem
            {props.children}
        </div>
    );
}