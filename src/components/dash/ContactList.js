import React from 'react'
import firebase from '../../firebase'
import { useState } from 'react'
import { useEffect } from 'react'


function useData(){
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const unsubscribe = firebase 
        .firestore()
        .collection('supplier')
        .onSnapshot((snapshot) => {
            const newContacts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setContacts(newContacts)
        })
            return () => unsubscribe()
    }, [])
    return contacts
}



const ContactList = () => {

    const contacts = useData();

    const listItems = contacts.map((contact, index) => 
    <li key={index}>Name: {contact.POC} at {contact.name} - Contact Number: {contact.telephoneNumber}</li>
    );

    return (
        <>
        <div>
        <h3>Key Contacts</h3>
        <ul >{listItems}</ul>
        </div>
        </>
    )
}

export default ContactList;