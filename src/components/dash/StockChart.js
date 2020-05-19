import React, {useState, useEffect} from 'react';
import firebase from '../../firebase'
import {Line} from 'react-chartjs-2'

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


const StockChart = () => {
    const dataItems = useInventory();
    const dataName = dataItems.map((item) =>
    item.itemName
    );
    const quantity = dataItems.map((item) =>
    item.quantity
    );    
    const data = { 
        labels: dataName,
        datasets: [
            {
                label: 'No. Items in Inventory',
                data: quantity
            }
        ]
    }


    return (
        <>
        <Line data={data}/>          
        </>
        )
}

export default StockChart;