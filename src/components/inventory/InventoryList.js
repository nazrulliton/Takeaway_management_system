import React, {useState, useEffect } from 'react';
import {Table} from 'react-bootstrap'
import firebase from '../../firebase'
// import DataTable from 'react-data-table-component';


function useInventory(){
  const [invItems, setInvItems] = useState([])

  useEffect(() =>{
    const unsubscribe = firebase
    .firestore()
    .collection('inventory')
    .onSnapshot((snapshot) => {
      const newInvItems = snapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data()
      }))
      setInvItems(newInvItems)
    })
    return () => unsubscribe()
    
  }, [])
  return invItems;
}

const InventoryList = () => {
  const [search, setSearch] = useState('')
  const inventoryItems = useInventory();

  const filteredSearch = inventoryItems.filter(item => {
    return item.itemName.toLowerCase().includes(search.toLowerCase())
   })


const bgcol = ((item) => {
  if (item <= 4) {
    return 'red';
  } else {
  return null;
  }
  
});

     

  const renderedItems = filteredSearch.map((item, index) =>

  <tr key={index} className="list-item">
  <td>{item.itemName}</td>
  <td  id="bgc" style={{
    backgroundColor: bgcol(item.quantity)
  }}>{item.quantity }</td>
  <td>{item.purchaseDate}</td>
  <td>{item.expiryDate}</td>
  <td>{item.purchaseP}</td>
  <td><button><a href={"/inventory/" + item.id + "/edit"}>Edit </a></button></td>
  <td><button><a href={"/inventory/" + item.id + "/delete"}>Delete</a></button></td>
</tr>
  )


  
  return(
    <>
    
    <input type="text" placeholder="Search Item Name" onChange={ e => setSearch(e.target.value)}/>
    <button><a href="/inventory/new">Add item</a></button>
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
    </>
  );
}

export default InventoryList;