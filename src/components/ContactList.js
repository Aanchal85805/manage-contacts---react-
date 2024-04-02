import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';



const ContactList = (props) => {
    const { Contact , removeContact } = props
    console.log(Contact)
    const contactList = Contact.map((val) => {
        return (
            <div  className="contact">
                <div style={{marginLeft:"2px"}}>{val.data.name}</div>
                <div>{val.data.email}</div>
                <span onClick = {()=>removeContact(val.id)}><DeleteIcon/></span>
            </div> 
        )
        
    })
    return (
        <>
       
            <div>
                <h1 className="contact-list">Contact List</h1>
                <div className="list">{contactList}</div>
            </div> 
            
                
                </>
                )
}

export default ContactList;