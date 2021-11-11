import  Listproduits from './components/produits/listproduits';
import "bootstrap/dist/css/bootstrap.min.css";
import NewProduit from './components/produits/NewProduit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import EditProduit from './components/produits/EditProduit';
import Acceuil from './components/produits/Acceuil';
import Contact from './components/produits/Contact';
import Listfournisseurs from './components/produits/listfournisseurs';
import Commande from './components/produits/Commande';
import './App.css';

function App() {
  return (
      <div className="App">    
 <Router>
 <Switch>
 <Route exact path='/add' component={NewProduit}/>
 <Route path='/Produitslist' component={Listproduits}/>
 <Route path='/edit/:id' component={EditProduit}/>
 <Route path='/acceuil' component={Acceuil}/>
 <Route path='/contact' component={Contact}/>
 <Route path='/Fournisseurslist' component={Listfournisseurs}/>
 <Route path='/commande' component={Commande}/>
 </Switch>
 </Router>
 </div>
 ); 
}
export default App;

