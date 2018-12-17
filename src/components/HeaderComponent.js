import React, {Component} from 'react';
import './HeaderComponent.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Media,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
//import Logo from '../../images/logo.png';

const styles = {
	logo:{width:'60px', height:'60px'}
};
  
class Header extends Component{
	constructor(props){
		super(props);
		this.state = {isOpen: false}
	}
	toggle = () =>{
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render(){
		return (
			<div className="header">
			<Navbar className="navbar mainColor" light expand="md">
				<NavbarBrand href="/" className="iconNavbar"> 
					<Media object style={styles.logo} src="/images/logo.png" alt="Generic placeholder image" />
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="mr-auto" navbar>
					  <NavItem>
						<NavLink href="/components/"  className="navBarElement">Components</NavLink>
					  </NavItem>
					  <NavItem>
						<NavLink href="" className="navBarElement" >HitHub</NavLink>
					  </NavItem>
					  <UncontrolledDropdown nav  inNavbar>
						<DropdownToggle nav caret className="navBarElement">
						 Options
						</DropdownToggle>
						<DropdownMenu left className="dropdown">
						<div className="dropdownDiv w-100">
						<div className="container w-100">
							<div className="row">
								<div className="col-sm">
									<ul>
										<li><h3>Title</h3></li>
										<li>Element 1</li>
										<li>Element 2</li>
										<li>Element 3</li>
										<li>Element 4</li>
										<li>Element 5</li>
									</ul>
								</div>
								<div className="col-sm">
									<ul>
										<li><h3>Title</h3></li>
										<li>Element 1</li>
										<li>Element 2</li>
										<li>Element 3</li>
										<li>Element 4</li>
										<li>Element 5</li>
									</ul>
								</div>
								<div className="col-sm">
									<ul>
										<li><h3>Title</h3></li>
										<li>Element 1</li>
										<li>Element 2</li>
										<li>Element 3</li>
										<li>Element 4</li>
										<li>Element 5</li>
									</ul>
								</div>
							</div>
						</div>
						
						</div>
						{/**
						 <DropdownItem>
							Option 1
						  </DropdownItem>
						  <DropdownItem>
							Option 2
						  </DropdownItem>
						  <DropdownItem divider />
						  <DropdownItem>
							Reset
						  </DropdownItem>
						
						*/}
						</DropdownMenu>
					  </UncontrolledDropdown>
					</Nav>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<div className="searchBar">
								<i className="fa fa-search iBusqueda"></i>
								<input type="text" className="searchBarInput" placeholder=""
									onChange={0/**(e) => this.props.handleChangeSearchBar(e.target.value)**/}
								/>
							</div>
						</NavItem>
					</Nav>
          </Collapse>
			</Navbar>
			</div>
		);

	}
}
export default Header;