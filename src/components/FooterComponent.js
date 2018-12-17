import React from 'react';
import './FooterComponent.css';
import {Media} from 'reactstrap';
const Footer = (props) =>{
		return (
		<div className="footer">
			<div className=" container-fluid">
				<div className="row justify-content-center">
					<div className="col-2  col-sm-2">
					<Media left href="#">
						<Media
							object 
							src="/images/logo2.png" alt="Generic placeholder image"
							style = {{margin: 10,width:'64px', height:'64px'}} />
					</Media>
					</div>
					<div className="offset-8 col-2 col-sm-2 ">
						<ul className="list-unstyled">
							<li>Privacy Policy</li>
							<li>User Agreement</li>
							<li>Update Consent</li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>	
		);
}
export default Footer;