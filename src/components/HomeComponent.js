import React from 'react';
import Slideshow from './SlideshowComponent';
import './home.css';
import {Container, Row, Col, Card, CardImg, CardTitle, CardImgOverlay, CardText, Media } from 'reactstrap';
import './HomeComponent.css';
import RenderCardList from './RenderCardList';
const Home = (props) =>{
		return (
		<div className="home">
		
			<div className="container">
				<div className="row homeSection">
					<div className="col-12 col-md m-1">
						
						<Slideshow />
						
					</div>
				</div>
				<div className="row homeSection">
					<div className=" col-12 col-md-6">
						<span className="h1Yellow"> 5 Recipes For Your Sweet And Savory Cravings </span>
					</div>
					<div classname="col-12 col-md-6">
						<Media object src="/images/rancheros.jpg" className="roundedImg" alt="Generic placeholder image" />
					</div>
				</div>
				
					<p className="titleListRecipes">RECENT RECIPES</p>
				
				<div className="row homeSection">
					<RenderCardList/>
				</div>
					
				
				
			</div>
		
		
		</div>
		);
}




export default Home;