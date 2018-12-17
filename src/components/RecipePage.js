import React from 'react';
import {Media} from 'reactstrap';
import './RecipePage.css';
const RecipePage = (props) => {

	return (
		<div className="recipePage">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-2">
						<h2>
							Ingredients 
						</h2>
						<h3>
							for 10 servings
						</h3>
						
						<ul className="ingredientList">
							<li>
								3 chicken breasts
							</li>
							<li>
								salt, to taste
							</li>
							<li>
								pepper, to taste
							</li>
							<li>
								1 cup  all-purpose flour (125 g)
							</li>
							<li>
								3 chicken breasts
							</li>
							<li>
								3 chicken breasts
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-5">
					<h2>
					Preparation
					</h2>
					<ul className="stepList">
						<li>
						<span>
							Cut chicken breasts in half (pound thin if necessary) and season with salt and pepper.
						</span>
						</li>
						<li>
							<span>
							Add the flour, 4 eggs, and bread crumbs to 3 separate shallow dishes. Beat the eggs. Coat the chicken in the flour, then the eggs, and finally in the bread crumbs.
							</span>
						</li>
						<li>
							<span>
							Heat the vegetable oil in a cast iron skillet over medium heat. Fry the chicken on both sides until golden brown, about 4 minutes on each side. Let drain on paper towels.
							</span>
						</li>
						<li>
							<span>
							In a medium bowl, combine the ricotta cheese and the remaining egg.
							</span>
						</li>
					</ul>
					</div>
					<div className="col-12 col-md-5">
						<Media object src="/images/rancheros.jpg" className="roundedImg" alt="Generic placeholder image" />
					</div>

				</div>
			</div>
		
		</div>
	);
}
export default RecipePage;