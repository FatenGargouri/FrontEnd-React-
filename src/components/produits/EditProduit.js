import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class EditProduit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            img:'',
            Marque: '',
            Description: '',
            Quantite :'',
            Prix:'',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
    }
    GetOne = async (id) => {
        await axios.get("http://localhost:3003/produits/" + id)
            .then(response => {
                this.setState({
                    Title: response.data.Title,
                    img: response.data.img,
                    Marque: response.data.Marque,
                    Description: response.data.Description,
                    Quantite: response.data.Quantite,
                    Prix: response.data.Prix,
                    
                });
            })
            .catch(function (error) 
            {
                console.log(error);
            })
    }

    Editproduit = () => {
        const { id } = this.props.match.params;
        const produitObject = {
            _id: id,
            Title: this.state.Title,
            img : this.state.img,
            Marque: this.state.Marque,
            Description: this.state.Description,
            Quantite: this.state.Quantite,
            Prix: this.state.Prix,
        };
        axios.put('http://localhost:3003/produits/' + id, produitObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/Produitslist" });
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <form onSubmit={this.Editproduit}>
                <h1 style={{fontWeight:'bold',color:'navy'}}>Modifier un produit</h1>
                <label style={{fontWeight:'bold'}}> Title: <input type="text" name="Title" value={this.state.Title} onChange={this.handleChange} />
                </label>
                <label style={{fontWeight:'bold'}}> Image: <img src={this.state.img} height={100} width={100} /><input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
                </label>
                <label style={{fontWeight:'bold'}}> Marque:<input type="text" name="Marque" value={this.state.Marque} onChange={this.handleChange} />
                </label>
                <label style={{fontWeight:'bold'}}> Description:<input type="text" name="Description" value={this.state.Description} onChange={this.handleChange} />
                </label>
                <label style={{fontWeight:'bold'}}> Quantite:<input type="text" name="Quantite" value={this.state.Quantite} onChange={this.handleChange} />
                </label>
                <label style={{fontWeight:'bold'}}> Prix:<input type="text" name="Prix" value={this.state.Prix} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default EditProduit;