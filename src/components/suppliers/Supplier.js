import React from 'react';

const Supplier = (props) => {

  const id = props.info.id.toString();
  const editURL = "/suppliers/" + id + "/edit";
  const deleteURL = "/suppliers/" + id + "/delete";

  return (
    <>
    <p>
    Name: {props.info.name}<br/>
    Quantity: {props.info.address}<br/>
    Date of purchase: {props.info.telephoneNumber}<br/>
    Point of Contact {props.info.POC}<br/>
    </p>
    <button><a href={editURL}>Edit '{props.info.name}'</a></button>
    <button><a href={deleteURL}>Delete '{props.info.name}'</a></button>
    </>
  )

}

export default Supplier;
