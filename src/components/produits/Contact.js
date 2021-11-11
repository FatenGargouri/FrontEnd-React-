import React from 'react';
import {Form , Button , ListGroup , Nav , Container , Navbar } from 'react-bootstrap';
import img1 from './image/contact.jpg';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Contact extends React.Component {
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
           <h1>Contactez nous ?</h1>
           <div class="p-3 mb-2 bg-danger text-white">Si vous souhaitez de me contacter , vous pouvez le faire en utilisant le formulaire ci-dessous ou direction par mail . <br/>je ferai mon maximum pour vous répondre au plus vite</div>
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
  <label style={{fontWeight:'bold'}}>Donner votre avis </label><br/>
  <textarea></textarea> <br/>
  <label style={{fontWeight:'bold'}}>Posez des questions </label><br/>
  <textarea></textarea><br/>
  </ul>
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>

<ListGroup>
<h1><p style={{float:'left' , color:'navy'}}>Que disent nos clients sur nous ?</p></h1>
  <ListGroup.Item style={{backgroundColor:'#D3D3D3'}}><p style={{float:'left' , fontWeight:'bold' }}>foulen ben foulen :  Un trés bon endroit pour trouver toutes les produits</p></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:'#D3D3D3'}}><p style={{float:'left' , fontWeight:'bold'}}>foulena ben foulena  :   Bon travail, j'ai bien recu ma commande dans un court délai</p></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:'#D3D3D3'}}><p style={{float:'left' , fontWeight:'bold'}}>foulena ben foulena  :  Excellente plateforme, j'ai trouvé le choix et toute les caractéristiques recherchés</p></ListGroup.Item>
</ListGroup>  
</> 
        );
    }
}

export default Contact;