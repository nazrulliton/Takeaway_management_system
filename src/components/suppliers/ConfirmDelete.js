import React from 'react';
import firebase from '../../firebase';
import {ToastContainer, toast, Zoom} from 'react-toastify';


const ConfirmDelete = ({supplier}) => {

  if (!supplier) {
    return <p>This supplier doesn't exist or has already been deleted.</p>
  }

  const successToast = () => {
    toast("success, item has been deleted", {
    className: "custom Toast",
    draggable: true,
    position: toast.POSITION.TOP_CENTER
  });
  }

  // let confirmDel = () => {
  //   document.getElementById("DeleteConfirmation").innerHTML = "This record has been deleted!";
  // }
  let takeHomeAndDelete = () => {
    console.log(supplier);

    firebase
    .firestore()
    .collection('supplier')
    .doc(supplier)
    .delete();
    
    // confirmDel();
    successToast();
  }

  return (
    <>
      <div style={{marginLeft: "10px"}}>
      <p>Are you sure you want to delete '{supplier.name}'?</p>
      <button onClick={takeHomeAndDelete}>Yes</button>
      <button><a href="/suppliers">No</a></button>
      <button><a href="/">Back to Home</a></button>
      <p id="DeleteConfirmation"></p>
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
      </div>
    </>
  )

}

export default ConfirmDelete;
