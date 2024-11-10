import React from 'react';
import { createRoot } from 'react-dom/client'
const root = createRoot(document.querySelector('.app'));
root.render(
<>
<Heading title="one" description="two" />
<Heading name ="chintu" />
<Heading apple="ssss"/>
<Heading banana="fruit"/>



</>);

function Heading (props) {
    console.log(props)
    const styles ={ color: 'red',
        fontWeight: 'bold'};
  return (
    <div>
        <h1 style ={styles}>{props.apple}</h1>
        <p>This is a React app</p>
        <h3 style={{color:'green'}}>
            Today's date is { new Date().toLocaleDateString() }</h3>
            <h4>{props.banana}</h4>
    </div>
    );
}