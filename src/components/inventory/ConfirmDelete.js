import React from 'react';
import firebase from '../../firebase'
import {ToastContainer, toast, Zoom} from 'react-toastify';


const ConfirmDelete = ({item}) => { //do variables need to be spelled CamelCase

  if (!item) {
    return <p>This item has doesn't exist or has already been deleted.</p>
  }

  // let confirmDel = () => {
  //   document.getElementById("DeleteConfirmation").innerHTML = "This record has been deleted!";
  // }

  const successToast = () => {
      toast("success, item has been deleted", {
      className: "custom Toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
  }

  let takeHomeAndDelete = () => {
    // return props.onDelete(props.item.id)
    console.log(item);
    firebase
    .firestore()
    .collection('inventory')
    .doc(item)
    .delete();
    
    // confirmDel();
    successToast();
  }
  // toast.error("oh no error");
  return (
    <>
      <div style={{marginLeft: "10px"}}>
      <p>Are you sure you want to delete '{item.itemName}'?</p>
      <button onClick={takeHomeAndDelete}>Yes</button>
      <button><a href="/inventory">No</a></button>
      <button><a href="/">Go Back</a></button>
      <p id="DeleteConfirmation"></p>
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
      </div>
    </>
  )

}

export default ConfirmDelete;
