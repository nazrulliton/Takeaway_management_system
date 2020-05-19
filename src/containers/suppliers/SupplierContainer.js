import React, { useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SupplierList from '../../components/suppliers/SupplierList.js';
import SupplierEditForm from '../../components/suppliers/SupplierEditForm.js';
import SupplierCreateForm from '../../components/suppliers/SupplierCreateForm.js';
import ConfirmDelete from '../../components/suppliers/ConfirmDelete.js';


const SupplierContainer = (props) => {
  const [suppliers, setSuppliers] = useState(null)

  return(
    <Router>
      <>
      <h1>Suppliers</h1>
      <Switch>

        <Route exact path = "/suppliers/new" render={() => {
          return <SupplierCreateForm />
        }}/>

        <Route exact path="/suppliers/:id/edit" render={(props) => {
        const id = props.match.params.id
        // const supplier = this.findSupplierById(id);
        return <SupplierEditForm supplier={id} />
        }}/>

        <Route exact path="/suppliers/:id/delete" render={(props) =>{
        const id = props.match.params.id
        // const supplier = this.findSupplierById(id);
        return <ConfirmDelete supplier={id}  />
        }}/>

        <Route render = {(props) => {
          return <SupplierList suppliers={suppliers}/>
        }}/>

      </Switch>
      </>
      </Router>
  )
}








// class SupplierContainer extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       suppliers: [
//         {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
//         {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
//         {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
//       ]
//     }
//     this.findSupplierById = this.findSupplierById.bind(this);
//     this.handleUpdate = this.handleUpdate.bind(this);
//     this.handlePost = this.handlePost.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//   }

//   findSupplierById(id){
//     return this.state.suppliers.find((item) => {
//       return item.id === parseInt(id);
//     });
//   }

//   handleUpdate(id, payload){
//     //*FIND INDEX OF ITEM.
//     let suppliersState = this.state.suppliers;
//     let itemIndex = suppliersState.findIndex((element) => {
//       return element.id === id;
//     });
//     // *CHANGE IT.
//     suppliersState[itemIndex] = payload;
//     this.setState({suppliers: suppliersState})
// //---------------------------------------------------------------------------------------------//
// // ARESKY: navigation component. global state management using redux.
// // redirect tag.
// //---------------------------------------------------------------------------------------------//
//     // *FOR DB*
//     // const request = new Request;
//     // request.patch('/suppliers/' + id, item).then(() => { //how a function works - not needing to return anything here.
//     //   window.location = '/pirates/' + id
//     // })
//   }

//   handlePost(payload){
//     let suppliersState = this.state.suppliers;
//     let newState = [...suppliersState, payload];
//     this.setState({suppliers: newState})
//     // *FOR DB*
//     // const request = new Request();
//     // request.post('/pirates', pirate).then(() => {
//     //   window.location = '/pirates'
//     // })
//   }

//   handleDelete(id){
//     let suppliersState = this.state.suppliers;
//     let itemIndex = suppliersState.findIndex((element) => {
//       return element.id === id;
//     });
//     suppliersState.splice(itemIndex, 1);
//     this.setState({suppliers: suppliersState})
//     // *FOR DB*
//     // const request = new Request();
//     // const url = '/pirates/' + id;
//     // request.delete(url).then(() => {
//     //   window.location = '/pirates';
//     // });
//   }

//   render(){
//     return(
//       <Router>
//       <>
//       <h1>Suppliers</h1>
//       <Switch>

//         <Route exact path = "/suppliers/new" render={() => {
//           return <SupplierCreateForm onFormSubmit={this.handlePost} />
//         }}/>

//         <Route exact path="/suppliers/:id/edit" render={(props) => {
//         const id = props.match.params.id
//         const supplier = this.findSupplierById(id);
//         return <SupplierEditForm supplier={supplier} onUpdate={this.handleUpdate} />
//         }}/>

//         <Route exact path="/suppliers/:id/delete" render={(props) =>{
//         const id = props.match.params.id
//         const supplier = this.findSupplierById(id);
//         return <ConfirmDelete supplier={supplier} onDelete={this.handleDelete} />
//         }}/>

//         <Route render = {(props) => {
//           return <SupplierList suppliers={this.state.suppliers}/>
//         }}/>

//       </Switch>
//       </>
//       </Router>
//     )
//   }

// }

export default SupplierContainer;


































// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// // import SupplierList from '../../suppliers/SupplierList';
// // import Supplier from '../..suppliers/Supplier';
//
// class SupplierContainer extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       suppliers: [
//         {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
//         {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
//         {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
//       ]
//     }
//   }
//
//
//
//
//
//
//   render() {
//     return (
//       <p>supplier container.</p>
//     )
//   }
// }
//
// export default SupplierContainer;
