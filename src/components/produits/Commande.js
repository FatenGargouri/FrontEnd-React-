import React from 'react';
import {Form , Button , ListGroup , Nav , Container , Navbar } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Commande extends React.Component {
    constructor(props) {
        super(props) 
    } 
    render()
    {
        return (
           <>
           <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home" style={{color:'blue'}}>FouFou informatique</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/acceuil" style={{color:'blue'}}>Acceuil</Nav.Link>
      <Nav.Link href="/Produitslist" style={{color:'blue'}}>Liste des produits</Nav.Link>
      <Nav.Link href="/Fournisseurslist" style={{color:'blue'}}>Liste des fournisseurs</Nav.Link>
      <Nav.Link href="/contact" style={{color:'blue'}}>Contact</Nav.Link>
      <Nav.Link href="/commande" style={{color:'blue'}}>Commander</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
           <h1>Commander vos produits </h1>
           <div class="p-3 mb-2 bg-danger text-white">Livraison à domicile pour toute la tunisie pendant 48 heures. Lancez vos commandes </div>
   <Form>
       <ul>
  <li><label style={{fontWeight:'bold'}}>Nom</label></li>
  <li><input type="text"/></li>
  <li><label style={{fontWeight:'bold'}}>Prenom </label></li>
  <li><input type="text" /></li>
  <label style={{fontWeight:'bold'}}>E-mail </label><br/>
  <input  type="text" /><br/>
  <label style={{fontWeight:'bold'}}>Téléphone</label><br/>
  <input  type="text" /><br/>
  <label style={{fontWeight:'bold'}}>Adresse Détaillé </label><br/>
  <textarea></textarea> <br/>
  <label style={{fontWeight:'bold'}}>l'article que vous voulez vender </label><br/>
  <textarea></textarea><br/>
  </ul>
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
</> 
        );
    }
}

export default Commande;