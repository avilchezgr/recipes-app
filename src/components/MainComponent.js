import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Recipes from './RecipesComponent';
import RecipePage from './RecipePage';
class Main extends Component{
	
	constructor(props){
		super(props);
		
	}
	

	
	render(){
		return (
			<div>
				<Header/>
				<Home/>
				
				<Footer/>
				<div style={{display:'none'}}>
					<RecipePage/>
				<Recipes/>
				
				</div>
			</div>
		);
	}
}
export default Main;