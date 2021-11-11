import React, { Component } from 'react';
import {Table , Nav , Container , Navbar } from 'react-bootstrap';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';


export default class ListFournisseurs extends Component {
    constructor(props) {
        super(props);
        this.state = {fournisseurs:[]};
        }
        componentDidMount = async () => {
            this.getFournisseurs()
           
       }
 //componentDidUpdate() est appelée immédiatement après que la mise à joura eu lieu.
 componentDidUpdate() { this.getFournisseurs(); }
 getFournisseurs=async ()=>{
    await axios.get("http://localhost:3003/fournisseurs")
          .then(response => 
              this.setState({
                fournisseurs:response.data
            }))
            .catch(function (error) {  
              console.log(error);  
            }) 
        } 

deleteFournisseur= async (_id) => {
            await axios.delete('http://localhost:3003/fournisseurs/' + _id)
            .then((res) => {
            console.log('fournisseur successfully deleted!')
            }).catch((error) => {
            console.log(error)
            })
            }
            Listfournisseurs = () => {
              return this.state.fournisseurs.map((l) =>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>{l.Nom}</td>
                      <td style={{fontWeight: 'bold'}}>{l.Adresse}</td>
                      <td style={{fontWeight: 'bold'}}>{l.Email}</td>
                      <td style={{fontWeight: 'bold'}}>{l.Telephone}</td>
                  </tr>
              );
            
             }   
 render() {
  return (
   
    <div className="ListFournisseurs"> 
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
    <h1 style={{fontWeight: 'bold' , fontSize:'300 px', color:'red',textAlign:'center' ,fontStyle:'italic'}}>FouFou informatique </h1>
      <h2 style={{fontWeight: 'bold', color:'maroon'}}align="center" >La liste des fournisseurs</h2> 
      <Table  style={{ marginTop: 10 }}>
       <thead>
        <tr>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'50'}}>Nom</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Adresse</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Email</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Téléphone</th>
    
</tr>
</thead>
<tbody>
  {this.Listfournisseurs()}
</tbody>
</Table>
</div>
  );

 }  
 }