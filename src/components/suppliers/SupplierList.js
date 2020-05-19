import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import firebase from '../../firebase'

function useSuppliers(){
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
    .firestore()
    .collection('supplier')
    .onSnapshot((snapshot) => {
      const newSuppliers = snapshot.docs.map((doc) =>({
        id:doc.id,
        ...doc.data()
      }))
      setSuppliers(newSuppliers)
    })
    return () => unsubscribe()
  }, [])
  return suppliers;
}


const SupplierList = () => {

  const [search, setSearch] = useState('')
  const suppliers = useSuppliers();

  const filteredSearch = suppliers.filter( supplier => {
    return supplier.name.toLowerCase().includes(search.toLowerCase())
  })
  
  const renderedSuppliers = filteredSearch.map((supplier, index) =>
  
  <tr key={index}>
      <td>{supplier.name}</td>
      <td>{supplier.address}</td>
      <td>{supplier.telephoneNumber}</td>
      <td>{supplier.POC}</td>
      <td><button><a href={"/suppliers/" + supplier.id + "/edit"}>Edit</a></button></td>
      <td><button><a href={"/suppliers/" + supplier.id + "/delete"}>Delete</a></button></td>
    </tr>
  )
  
     
  return (
    <>
    <input type="text" placeholder= "Search Supplier Name" onChange={ e => setSearch(e.target.value)}/>
    <button><a href="/suppliers/new">Add supplier</a></button>
    <Table striped bordered hover className="table1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Contact Number</th>
        <th>P.O.C</th>
        <th>Edit</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      {renderedSuppliers}
    </tbody>
  </Table>

  </>

  );
}

export default SupplierList;


// const SupplierList = (props) => {
  

//   const supplierList = props.suppliers.map((supplier => {
//     const id = supplier.id.toString();
//     const editURL = "/suppliers/" + id + "/edit";
//     const deleteURL = "/suppliers/" + id + "/delete";
    
//     return (
//     // <li key={supplier.id} className="list-item" >
//     //   <Supplier info={supplier}/>
//     // </li>

//     <tr key={supplier.id}>
//       <td>{supplier.name}</td>
//       <td>{supplier.address}</td>
//       <td>{supplier.telephoneNumber}</td>
//       <td>{supplier.POC}</td>
//       <td><button><a href={editURL}>Edit '{supplier.name}'</a></button></td>
//       <td><button><a href={deleteURL}>Delete '{supplier.name}'</a></button></td>
//     </tr>

//     )
//   }))

//   return (
//     <>
//     <Table striped bordered hover className="table1">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Address</th>
//           <th>Contact Number</th>
//           <th>P.O.C</th>
//           <th>Edit</th>
//           <th>Delete</th>
          
//         </tr>
//       </thead>
//       <tbody>
//       {supplierList}
//       </tbody>
//     </Table>



//     <button><a href="/suppliers/new">Add supplier</a></button>
//     {/* <ul>
//       {supplierList}
//     </ul> */}
//     </>
//   )

// }


