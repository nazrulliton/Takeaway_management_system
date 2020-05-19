import React,{useEffect,useState} from 'react';
import firebase from '../../firebase'
import {Form, Button} from 'react-bootstrap';
import {ToastContainer, toast, Zoom} from 'react-toastify';


const ItemEditForm = ({item}) => {

  const [dataItem,setDataItem] = useState(null);
  
  //data form
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('')
  const [purchaseP, setPurchaseP] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  const successToast = () => {
    toast("success, item has been edited", {
    className: "custom Toast",
    draggable: true,
    position: toast.POSITION.TOP_CENTER
  });
}

  const ref = firebase.firestore().collection('inventory').doc(item)
  useEffect(() =>{
      ref.get().then(function(doc) {
      if (doc.exists) {
        const data = doc.data();
        setDataItem(doc.data());
        setItemName(data.itemName);
        setQuantity(data.quantity)
        setPurchaseDate(data.purchaseDate)
        setPurchaseP(data.purchaseP)
        setExpiryDate(data.expiryDate)      
      } else {
          // doc.data() will be undefined in this case
      }
  })
  }, [])

  const submitEdit = (event) => {
      const result =  {quantity: quantity, expiryDate: expiryDate, itemName: itemName, purchaseDate: purchaseDate, purchaseP: purchaseP}
    ref.set(result).then(console.log('sucess upload'));
    event.preventDefault();
    successToast();
  }

    return(
      <>
      { dataItem ?
        <div style={{marginLeft: '10px'}}>

      <Form onSubmit={(e) => submitEdit(e) }>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Item Name</Form.Label>
          <Form.Control placeholder="Name" type="text" name="name" id="name" defaultValue={  dataItem.itemName} onChange={e=>setItemName(e.currentTarget.value)}  />
        </Form.Group>

        <Form.Group controlId="formBasicPasswod">
          <Form.Label>Quantity</Form.Label>
          <Form.Control placeholder="Quantity" type="number" name="quantity" id="quantity" min="0" defaultValue={  dataItem.quantity} onChange={e=>setQuantity(e.currentTarget.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassord">
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control placeholder="Purchase Date" type="text" name="dop" id="dop" defaultValue={  dataItem.purchaseDate} onChange={e=>setPurchaseDate(e.currentTarget.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPasword">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control placeholder="Expiry Date" type="text" name="ed" id="ed" defaultValue={  dataItem.expiryDate} onChange={e=>setExpiryDate(e.currentTarget.value)} />
        </Form.Group>

        <Form.Group controlId="formBaicPassword">
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control type="number" name="pp" id="pp" step="0.01" min="0" defaultValue={  dataItem.purchaseP}  onChange={e=>setPurchaseP(e.currentTarget.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" value="submit"> Submit</Button>
        <Button><a href="/inventory">Cancel</a></Button>
        <Button><a href="/">Home</a></Button>

      </Form>        

        {/* <form onSubmit={(e) => submitEdit(e) } > 
        
        <label htmlFor="name">Item Name:</label>
        <input type="text" name="name" id="name" defaultValue={  dataItem.itemName} onChange={e=>setItemName(e.currentTarget.value)} />
        
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" min="0" defaultValue={  dataItem.quantity} onChange={e=>setQuantity(e.currentTarget.value)} />
        
        <label htmlFor="dop">Date of Purchase:</label>
        <input type="text" name="dop" id="dop" defaultValue={  dataItem.purchaseDate} onChange={e=>setPurchaseDate(e.currentTarget.value)} />
        
        <label htmlFor="ed">Expiry Date:</label>
        <input type="text" name="ed" id="ed" defaultValue={  dataItem.expiryDate} onChange={e=>setExpiryDate(e.currentTarget.value)} />
        
        <label htmlFor="pp">Purchased Price</label>
        <input type="number" name="pp" id="pp" step="0.01" min="0" defaultValue={  dataItem.purchaseP}  onChange={e=>setPurchaseP(e.currentTarget.value)} />
        
     
        <input type="submit" value="save" />
        <button><a href="/inventory">Cancel</a></button>
        <button><a href="/">Go Home</a></button>
        </form> */}
         <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
         </div>
         : <h1>loading</h1>
      }
      </>
    )



}

export default ItemEditForm;
