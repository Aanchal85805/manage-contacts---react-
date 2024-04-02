import "./App.css";
import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useEffect , useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const localStorageKey = 'Contact'

  const [Contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})
  
  useEffect(() => {
    localStorage.setItem(localStorageKey , JSON.stringify(Contact))
  },[Contact])
  
  const addContact = (data) => {
    setContact([...Contact, { id: uuidv4(), data }]
    )
  }
  const removeContact = (id) => {
    
    const updatedList = Contact.filter((val) => {
      return val.id !== id
    })
    setContact(updatedList);
  
  }

  
    return (
      <>
        < Header />
        < AddContact addContact={addContact} />
        <ContactList Contact={Contact} removeContact={ removeContact} />
           
      </>
  );
}

export default App;
