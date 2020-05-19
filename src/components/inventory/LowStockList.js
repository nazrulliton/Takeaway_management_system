import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap'
import firebase from '../../firebase'


function useStock(){
    const [lowItems, setLowItems] = useState([])

    useEffect(()=> {
    const unsubscribe = firebase
    .firestore()
    .collection('inventory')
    .where('quantity', '<', 6 )
    .onSnapshot((snapshot) => {
        const newLotItems = snapshot.docs.map((doc) =>({
            id:doc.id,
            ...doc.data()
        }))
        setLowItems(newLotItems)
    })
    return () => unsubscribe()
    }, [])

    return lowItems;
}



const LowStockList = () => {

const stockItems = useStock();

const renderedItems = stockItems.map((item, index) =>

<tr key={index} className="list-item">
<td>{item.itemName}</td>
<td style={{backgroundColor: 'red'}}>{item.quantity }</td>
<td>{item.purchaseDate}</td>
<td>{item.expiryDate}</td>
<td>{item.purchaseP}</td>
<td><button><a href={"/inventory/" + item.id + "/edit"}>Edit </a></button></td>
<td><button><a href={"/inventory/" + item.id + "/delete"}>Delete</a></button></td>
</tr>
)
   

return (
    <Table striped bordered hover className="table1">
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Date of Purchase</th>
        <th>Expiry Date</th>
        <th>Purchase Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {renderedItems}
    </tbody>
  </Table>

);




}









export default LowStockList;