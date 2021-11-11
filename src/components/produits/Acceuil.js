import React from 'react';
import {Nav , Container , Navbar , Table} from 'react-bootstrap';
import img from './image/arriere.jpg';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Acceuil extends React.Component {
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
  <h1 style={{fontWeight: 'bold' , fontSize:'150 px', color:'rgb(248, 94, 119)',textAlign:'center'}}>Bienvenue dans mon site de vente de matériels informatiques</h1>
  <img src={img} style={{width:'100%', height:'500px'}}/>
  <Table style={{width: '103%' , paddingBottom: '60px',marginBottom: '-10px' , backgroundColor:'rgb(224, 203, 206)' }}>
  
    <tr>
      <th style={{fontSize:'30px' , color:'purple'}}>Données</th>
      <th style={{fontSize:'30px' , color:'purple'}}>NOS SERVICES</th>
      <th style={{fontSize:'30px' , color:'purple'}}>INFORMATIONS</th>
    </tr>
    <tr>
            <th>Expédition & retours</th>
     		<th>Service Clients</th>
            <th>Sfax Tunisie</th>
    </tr>
    <tr>
            <th>Nos magasins</th>
            <th>Service aprés vente</th>
            <th>(+216) 36 010 0</th>
    </tr>
    <tr>
    <th>Mode de paiement</th>
            <th>Achats sécurisé</th>
            <th>FONFON@contact.tn</th>
    </tr>
  
</Table>

  
</> 
        );
    }
}

export default Acceuil;