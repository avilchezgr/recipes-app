import React from 'react';
import Slideshow from './SlideshowComponent';
import './home.css';
import {Container, Row, Col, Card, CardImg, CardTitle, CardImgOverlay, CardText, Media } from 'reactstrap';
import './RecipesComponent.css';
import RenderCardList from './RenderCardList';
const Recipes = (props) =>{
	return (
		<div className="recipes">
			<div className="container">
				<div className="row">
				<h2 className="titleRecipes">best vegetarian</h2>
				<p className="pRecipes">
					Not eating meat? No problem! Tasty is happy to bring you our favorite vegetarian recipes to make the most delicious meals. Get ready to eat some yummy dishes featuring awesome plant proteins like sweet potatoes, brussel sprouts, black beans, and more! Fruits and vegetables don’t have to be boring when you have the very best vegetarian recipes from Tasty!
				</p>
				</div>
				<RenderCardList />
			</div>
		</div>
		
	);
}
export default Recipes;