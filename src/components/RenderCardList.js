import React from 'react';
import {Container, Row, Col, Card, CardImg, CardTitle, CardImgOverlay, CardText, Media } from 'reactstrap';

const RenderCardItem = (props) => {
	return (
	<div className="col-12 col-md-4">
		<Card className="renderCardItem">
			<CardImg width="100%" className="" src="/images/rancheros.jpg" alt="alt"/>
			<CardTitle className="cardTitle">Huevos Rancheros</CardTitle>
			 
		</Card>
	</div>
	);
	
}

const RenderCardList = (props) => {
	
	
	
	return (
	
		<div className="row">
			<RenderCardItem />
			<RenderCardItem />
			<RenderCardItem />
		</div>
	);
}
export default RenderCardList;