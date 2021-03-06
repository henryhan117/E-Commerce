import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg' ;
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
  render() {
    return (
    <NavWrapper className = "navbar navbar-expand-sm navbar-light ">
    
        <Link to = "/">
        <img src = {logo} alt = "store" className = "navbar-brand"/>
        </Link>
      
        
        <Link to = "/" className = "nav-link ">
        products
        </Link>



        
        <Link to = "/Cart" className = "ml-auto">
        <ButtonContainer>

        <span className = "mr-2">
        
            <i className = "fas fa-cart-plus"/>
            </span>
            my cart
            
            </ButtonContainer>
         </Link>


    </NavWrapper>

    );
  }
}

 const NavWrapper = styled.nav`
 background:var(--mainBlue);
 .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-tranform:capitalize !important 
 }

 `;