import React, { useState, useEffect} from 'react';
import firebase from '../../firebase';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import {Form, Button} from 'react-bootstrap';



const SupplierEditForm = ({supplier}) => {

  const [dataItem, setDataItem] = useState(null);

  const [name, setName] = useState('')
  const [POC, setPOC] = useState('')
  const [address, setAddress] = useState('')
  const [telephoneNumber, setTelephoneNumber] = useState('')

  const successToast = () => {
    toast("success, Supplier has been edited", {
    className: "custom Toast",
    draggable: true,
    position: toast.POSITION.TOP_CENTER
  });
}


  const ref = firebase.firestore().collection('supplier').doc(supplier)
  useEffect(() => {
   ref.get().then(function(doc){
      if (doc.exists){
        const data = doc.data();
        setDataItem(doc.data());
        setAddress(data.address)
        setName(data.name);
        setPOC(data.POC)
        setTelephoneNumber(data.telephoneNumber)
      }
      else {
          console.log('error')
      }
    })
  }, [])

  // let confirmDel = () => {
  //   document.getElementById("DeleteConfirmation").innerHTML = "This record has been deleted!";
  // }

  const submitEdit = (event) => {

    const result = {name: name, POC: POC, address: address, telephoneNumber: telephoneNumber}
    
    ref.set(result).then(console.log('sucess upload'));
    
    event.preventDefault();
    // confirmDel();
    successToast();
  }

  return(
    <>
    {dataItem ? 
    <div style={{marginLeft: '20px'}}>

    <Form onSubmit={(e) => submitEdit(e) }>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" type="text" name="name" id="name" defaultValue={dataItem.name} onChange={e=>setName(e.currentTarget.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" type="text" name="address" id="address" min="0" defaultValue={dataItem.address} onChange={e=>setAddress(e.currentTarget.value)}  />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contact Num</Form.Label>
        <Form.Control placeholder="Contact Num" type="number" name="telephoneNumber" id="telephoneNumber" defaultValue={dataItem.telephoneNumber} onChange={e=>setTelephoneNumber(e.currentTarget.value)}  />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Point of Contact</Form.Label>
        <Form.Control placeholder="POC Name" type="text" name="POC" id="POC" defaultValue={dataItem.POC} onChange={e=>setPOC(e.currentTarget.value)}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button><a href="/suppliers">Cancel</a></Button>
      <Button><a href="/">Home</a></Button>
    </Form>

    {/* <form onSubmit={(e) => submitEdit(e) }>

    <label htmlFor="name">Name:</label>
    <input type="text" name="name" id="name" defaultValue={dataItem.name} onChange={e=>setName(e.currentTarget.value)}/>

    <label htmlFor="address">Address:</label>
    <input type="text" name="address" id="address" min="0" defaultValue={dataItem.address} onChange={e=>setAddress(e.currentTarget.value)} />

    <label htmlFor="telephoneNumber">Telephone Number:</label>
    <input type="number" name="telephoneNumber" id="telephoneNumber" defaultValue={dataItem.telephoneNumber} onChange={e=>setTelephoneNumber(e.currentTarget.value)} />

    <label htmlFor="POC">POC:</label>
    <input type="text" name="POC" id="POC" defaultValue={dataItem.POC} onChange={e=>setPOC(e.currentTarget.value)} />

    <input type="submit" value="save" />
    <button><a href="/suppliers">Cancel</a></button>
    <button><a href="/">Go Home</a></button>
     <p id="DeleteConfirmation"></p> 
    
    </form> */}
    <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
    </div>
      : <h1>loading</h1>
    }
    </>
  )
}

export default SupplierEditForm;




// class SupplierEditForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event){
//     event.preventDefault();
//     let id = this.props.supplier.id;

//     let supplier = {
//       "name": event.target.name.value,
//       "address": parseInt(event.target.address.value),
//       "telephoneNumber": event.target.telephoneNumber.value,
//       "POC": event.target.POC.value,
//       "id": id
//     }
//     console.log("This is the selected supplier's id:", id);
//     console.log("This is the supplier:", supplier);
//     return this.props.onUpdate(id, supplier);
//   }

//   render(){

//     return(
//       <>
//       <form onSubmit={this.handleSubmit}>

//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" id="name" defaultValue={this.props.supplier.name} />

//         <label htmlFor="address">Address:</label>
//         <input type="text" name="address" id="address" min="0" defaultValue={this.props.supplier.address} />

//         <label htmlFor="telephoneNumber">Telephone Number:</label>
//         <input type="text" name="telephoneNumber" id="telephoneNumber" defaultValue={this.props.supplier.telephoneNumber} />

//         <label htmlFor="POC">POC:</label>
//         <input type="text" name="POC" id="POC" defaultValue={this.props.supplier.POC} />

//         <input type="submit" value="save" />
//       </form>
//       </>
//     )
//   }

// }


