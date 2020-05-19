import React,{ useState, useEffect } from 'react';
import {Card} from 'react-bootstrap';
import firebase from '../firebase';
import ContactList from '../components/dash/ContactList';
import StockChart from '../components/dash/StockChart';


const DashContainer = () => {

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
      const numOfInven = useInventory().length;
    
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
    const numOfLow = useStock().length;

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

      const numOfSup = useSuppliers().length;





    return (
        <div className="container fluid">
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col-sm-3">
                <Card style={{ width: '14rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./stock.png')} style={{ width: '8rem', height: '8rem', margin: 'auto'}} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>{numOfInven}</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Number of Items being tracked
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '14rem', height: '17rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./low.png')} style={{ width: '8rem', height: '8rem', margin: 'auto' }}  />
                <Card.Body>
    <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>{numOfLow}</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Items in LOW STOCK
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '14rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./item.png')} style={{ width: '8rem', height: '8rem', margin: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>{numOfSup}</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Number of Suppliers 
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '14rem', marginTop: '5px', paddingTop: '2px' }}>
                <Card.Img variant="top" src={require('./item.png')} style={{ width: '8rem', height: '8rem', margin: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>11</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    Think of a relevant metric
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
           
            <div className="row" style={{marginTop: '50px', marginBottom: '50px'}}>
                <div className="col-sm-6 clist">
                <ContactList />
                </div>
                <div className="col-sm-6">
                <StockChart />
                </div>
            </div>
            
      </div>

    )
}

export default DashContainer;