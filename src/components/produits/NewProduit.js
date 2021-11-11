import React from 'react';
import axios from 'axios'; 
import { Redirect } from 'react-router-dom';
class NewProduit extends React.Component{
constructor(props){
super(props)
this.state = {
 Title: ' ',
 img:' ',
 Marque :  ' ',
 Description: ' ' ,
 Quantite: ' ' ,
 Prix: ' ' ,
 redirect: null
}
}
Addproduit=()=>{
 const produitObject = {
 Title: this.state.Title,
 img:this.state.img,
 Marque: this.state.Marque,
 Description:this.state.Description,
 Quantite:this.state.Quantite,
 Prix:this.state.Prix
 };
 axios.post('http://localhost:3003/produits',produitObject)
 .then(res => console.log(res.data));
 this.setState({ redirect: "/Produitslist" });
}

handleChange= (e)=> {
 let nam = e.target.name;
 let val = e.target.value;
 this.setState({[nam]: val});
}

render() {
    
 if (this.state.redirect) {
 return <Redirect to={this.state.redirect} />
 }
return (

 <form onSubmit={this.Addproduit}>
     <h1 style={{color:'navy' , fontWeight:'bold'}}>Ajouter un produit</h1>
 <label style={{fontWeight:'bold'}}>
 Title:
 <input
 type="text"
 name="Title"
 value={this.state.Title}
 onChange={this.handleChange}
 />
 </label><br/>
 <label style={{fontWeight:'bold'}}>
 Image:
 <input
 type="text"
 name="img"
 value={this.state.img}
 onChange={this.handleChange}
 />
 </label><br/>
 <label style={{fontWeight:'bold'}}>
 Marque:
 <input
 type="text"
 name="Marque"
 value={this.state.Marque}
 onChange={this.handleChange}
 />
 </label><br/>
 <label style={{fontWeight:'bold'}}>
 Description:
 <input
 type="text"
 name="Description"
 value={this.state.Description}
 onChange={this.handleChange}
 />
 </label><br/>
 <label style={{fontWeight:'bold'}}>
 Quantite:
 <input
 type="text"
 name="Quantite"
 value={this.state.Quantite}
 onChange={this.handleChange}
 />
 </label><br/>
 <label style={{fontWeight:'bold'}}>
 Prix:
 <input
 type="text"
 name="Prix"
 value={this.state.Prix}
 onChange={this.handleChange}
 />
 </label><br/>
 <input type="submit" value="Submit"/>
</form>
);
}
} 
export default NewProduit; 