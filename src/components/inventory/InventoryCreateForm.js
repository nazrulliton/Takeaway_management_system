import React, {useState} from 'react';
import firebase from '../../firebase';
import {Form, Button} from 'react-bootstrap';
import {ToastContainer, toast, Zoom} from 'react-toastify';


const InventoryCreateForm = () => {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('')
  const [purchaseP, setPurchaseP] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  const successToast = () => {
    toast("success, item has been Added", {
    className: "custom Toast",
    draggable: true,
    position: toast.POSITION.TOP_CENTER
  });
}


  function onSubmit(e){
    e.preventDefault()

    firebase
    .firestore()
    .collection('inventory')
    .add({
        itemName,
        quantity,
        purchaseDate,
        purchaseP, 
        expiryDate
    })
    .then(() => {
        setItemName('')
        setQuantity('')
        setPurchaseDate('')
        setPurchaseP('')
        setExpiryDate('')
    })
    successToast();
  }

  return (
    <div style={{marginLeft: '150px', marginRight: '150px'}}>
  <Form onSubmit={onSubmit}>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Item Name</Form.Label>
      <Form.Control size="lg" placeholder="Name" type="text" name="name" id="name" value={itemName} onChange={e=>setItemName(e.currentTarget.value)} />
    </Form.Group>

    <Form.Group controlId="formBasicPasswod">
      <Form.Label>Quantity</Form.Label>
      <Form.Control size="lg" placeholder="Quantity" type="number" name="quantity" min="0" id="quantity" value={quantity} onChange={e=>setQuantity(e.currentTarget.value)} />
    </Form.Group>

    <Form.Group controlId="formBasicPassord">
      <Form.Label>Purchase Date</Form.Label>
      <Form.Control size="lg" placeholder="Purchase Date" type="date" name="dop" id="dop" value={purchaseDate} onChange={e=>setPurchaseDate(e.currentTarget.value)} />
    </Form.Group>

    <Form.Group controlId="formBasicPasword">
      <Form.Label>Expiry Date</Form.Label>
      <Form.Control size="lg" placeholder="Expiry Date" type="date" name="ed" id="ed" value={expiryDate} onChange={e=>setExpiryDate(e.currentTarget.value)} />
    </Form.Group>

    <Form.Group controlId="formBaicPassword">
      <Form.Label>Purchase Date</Form.Label>
      <Form.Control size="lg" placeholder="Purchase Date" type="number" name="pp" id="pp" step="0.01" min="0" value={purchaseP} onChange={e=>setPurchaseP(e.currentTarget.value)} />
    </Form.Group>

    <Button variant="primary" type="submit" value="submit"> Submit</Button>
    <Button><a href="/inventory">Cancel</a></Button>
    <Button><a href="/">Home</a></Button>

  </Form>
  <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />

    {/* <form onSubmit={onSubmit}> 

    <label for="name">Item Name:</label>
    <input type="text" name="name" id="name" value={itemName} onChange={e=>setItemName(e.currentTarget.value)} />

    <label for="quantity">Quantity:</label>
    <input type="number" name="quantity" min="0" id="quantity" value={quantity} onChange={e=>setQuantity(e.currentTarget.value)}/>

    <label for="dop">Date of Purchase:</label>
    <input type="date" name="dop" id="dop" value={purchaseDate} onChange={e=>setPurchaseDate(e.currentTarget.value)}/>

    <label for="ed">Expiry Date:</label>
    <input type="date" name="ed" id="ed" value={expiryDate} onChange={e=>setExpiryDate(e.currentTarget.value)}/>

    <label for="pp">Purchased Price</label>
    <input type="number" name="pp" id="pp" step="0.01" min="0" value={purchaseP} onChange={e=>setPurchaseP(e.currentTarget.value)} /> */}

    {/* <label for="supplier">Supplier:</label>
    <select id="select" name="select" id="supplier" >
     {supplierOptions}
    </select> */}

    {/* <button><a href="/suppliers/new">Add new supplier</a></button> */}
    {/* <input type="submit" value="Submit"/>
    <button><a href="/inventory">Cancel</a></button>
    <button><a href="/">Home</a></button>
    </form>
    <ToastContainer draggable={false} transition={Zoom} autoClose={8000} /> */}
    </div>
  )
}




// class InventoryCreateForm extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       suppliers: [
//         {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
//         {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
//         {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
//       ]
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event){
//     event.preventDefault();

//     let selectedIndex = event.target.select.options.selectedIndex;

//     let item = {
//       "name": event.target.name.value,
//       "quantity": parseInt(event.target.quantity.value),
//       "dateOfPurchase": event.target.dop.value,
//       "expiryDate": event.target.ed.value,
//       "purchasePrice": parseInt(event.target.pp.value),
//       "supplierID": parseInt(this.state.suppliers[selectedIndex].id),
//       "id": Math.random()
//     }

//     return this.props.onFormSubmit(item);
//   }

//   render() {

//     if (this.state.suppliers.length === 0) {
//       return <button><a href="/supplier/new">Please add a supplier first before adding an item. Click <strong>here.</strong></a></button>
//     } {/*Can't return a custom-made element here❓Still wouldn't work with brackets.*/}

//     const supplierOptions = this.state.suppliers.map((item) => {
//       return <option key={item.id} value={item.name}>{item.name}</option>
//     });

//     return (
//       <>
//       <form onSubmit={this.handleSubmit}> {/*why do the brackets need to be ommited here something about event becoming undefined.*/}

//         <label for="name">Item Name:</label>
//         <input type="text" name="name" id="name" />

//         <label for="quantity">Quantity:</label>
//         <input type="number" name="quantity" min="0" id="quantity" />

//         <label for="dop">Date of Purchase:</label>
//         <input type="text" name="dop" id="dop" />

//         <label for="ed">Expiry Date:</label>
//         <input type="text" name="ed" id="ed" />

//         <label for="pp">Purchased Price</label>
//         <input type="number" name="pp" id="pp" step="0.01" min="0" />

//         <label for="supplier">Supplier:</label>
//         <select id="select" name="select" id="supplier" >
//         {supplierOptions}
//         </select>

//         <button><a href="/suppliers/new">Add new supplier</a></button>

//         <input type="submit" value="save" /><br/>
//       </form>
//       </>
//     )
//   }

// }

export default InventoryCreateForm;

// <div>
//   <p>Please add a supplier first before adding an item.</p>
//   <button><a href="/suppliers/new">Add supplier</a></button>
// </div>

// <NeedSupplier/>
