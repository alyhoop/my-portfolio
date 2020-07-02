import React, { Component, Link } from 'react';


class Error extends Component {
  render(){
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Sorry, there is nothing to see here.</p>
				<p><Link to="/">Back to Home</Link></p>
			</div>
		);
	}
}



export default Error;
