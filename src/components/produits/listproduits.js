import React, { Component } from 'react';
import {Table , Nav , Container , Navbar } from 'react-bootstrap';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';


export default class ListProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {produits:[]};
        }
        componentDidMount = async () => {
            this.getProduits()
           
       }
 //componentDidUpdate() est appelée immédiatement après que la mise à joura eu lieu.
 componentDidUpdate() { this.getProduits(); }
 getProduits=async ()=>{
    await axios.get("http://localhost:3003/produits")
          .then(response => 
              this.setState({
                produits:response.data
            }))
            .catch(function (error) {  
              console.log(error);  
            }) 
        } 
deleteProduit= async (_id) => {
          await axios.delete('http://localhost:3003/produits/' + _id)
          .then((res) => {
          console.log('Produit successfully deleted!')
          }).catch((error) => {
          console.log(error)
          })
          }
          Listproduits = () => {
            return this.state.produits.map((l) =>
                <tr>
                    <td style={{fontWeight: 'bold'}}>{l.Title}</td>
                    <td><img src={l.img} height={220} width={220} alt={l.Title} /></td>
                    <td style={{fontWeight: 'bold'}}>{l.Marque}</td>
                    <td style={{fontWeight: 'bold'}}>{l.Description}</td>
                    <td style={{fontWeight: 'bold'}}>{l.Quantite}</td>
                    <td style={{fontWeight: 'bold'}}>{l.Prix}</td>
                    <td style={{fontWeight: 'bold'}}>{l.createdAt}</td>
                    <td style={{fontWeight: 'bold'}}>{l.updatedAt}</td>
                    <td><Link className="btn btn-primary" to={"/edit/" + l._id}> Edit </Link></td>
                    <td><button className="btn btn-danger" onClick={()=>{this.deleteProduit(l._id)}}>Delete</button></td>
                </tr>
            );
          
           }
           
 render() {
  return (
   
    <div className="ListProduits"> 
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
      <h2 style={{fontWeight: 'bold', color:'maroon'}}align="center" >La liste des produits</h2> 
      <Link to={'/add'} style={{float:'left'}} >Add Produit</Link>
      <Table  style={{ marginTop: 10 }}>
       <thead>
        <tr>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'50'}}>Title</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Image</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Marque</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Description</th>
     <th style={{fontWeight: 'bold',color:'green' , fontSize:'30'}}>Quantite</th>
     <th style={{fontWeight: 'bold',color:'green',fontSize:'30' }}>Prix</th>
     <th style={{fontWeight: 'bold',color:'green',fontSize:'30'}}>Created At</th>
     <th style={{fontWeight: 'bold',color:'green',fontSize:'30'}}>Updated At</th>
     <th style={{fontWeight: 'bold',color:'green',fontSize:'30'}}>Edit</th>
     <th style={{fontWeight: 'bold',color:'green',fontSize:'30'}}>Supprimer</th>
</tr>
</thead>
<tbody>
  {this.Listproduits()}
</tbody>
</Table>
</div>
  );

 }  
 }