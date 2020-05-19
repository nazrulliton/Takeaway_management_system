import React from 'react';

const Item = (props) => {

  const id = props.info.id.toString();
  const editURL = "/inventory/" + id + "/edit";
  const deleteURL = "/inventory/" + id + "/delete";

  return (
    <>
    <p>
    Name: {props.info.name}<br/>
    Quantity: {props.info.quantity}<br/>
    Date of purchase: {props.info.dateOfPurchase}<br/>
    Expiry date: {props.info.expiryDate}<br/>
    Purchase Price: £{props.info.purchasePrice}
    </p>
    <button><a href={editURL}>Edit '{props.info.name}'</a></button>
    <button><a href={deleteURL}>Delete '{props.info.name}'</a></button>
    {/*<button><a>Minus 1 (redirects to special edit form that modifies carrot by one) {props.info.name}</a></button>
    <button><a>Add 1 (redirects to special edit form that modifies quantity by one) {props.info.name}</a></button>*/}

    </>
  )
}

export default Item;

// <span>Name: {props.info.name}</span><br>
// <span>Quantity: {props.info.quantity}</span><br>
// <span>Date of purchase: {props.info.dateOfPurchase}</span><br>
// <span>Expiry date: {props.info.expiryDate}</span>
