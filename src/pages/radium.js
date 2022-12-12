import Radium from 'radium';
import React from 'react';

function Appz() {
const style={
	':hover':{
	backgroundColor: 'green'
	}
}
return (
	<div>
	<button style={style}>example of radium</button>
	</div>
);
}

export default Radium(Appz);