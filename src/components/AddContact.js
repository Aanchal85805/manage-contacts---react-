import React from "react";
import { useState } from "react";

const AddContact = ({ addContact}) => {

      const [contactData, setData] = useState({name: "", email:""});
     
  
  const handleChange = (e) => {
    if (e.target.name === 'name') { 
      setData({...contactData, name: e.target.value})
    }
    else 
      setData({...contactData, email :e.target.value})
     
        
    
      }

      const handleAdd = (e) => {
        if (contactData.name === "" || contactData.email === " ") {
          alert("please fill all the details");
          return
        }
          addContact(contactData)
          setData({name: "" , email: "" })
          
      };

    return (
        <>
             <div className="heading">
                <h1 className="addContact">Add Contact</h1>

                 <form>
                <lable className="lable">Name:</lable>
                <br />
            <input className="lable-input"  
              type="text"
              placeholder="enter name"
              name="name"
              value={contactData.name}
              onChange={handleChange}
                    />
                    <br />
                     <lable className="lable">Email:</lable>
            <br />
   
          <input className="lable-input"
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
            />
          </form>
          <button className="btn" onClick={handleAdd}>Add Contact</button>
      
      

            </div>
        </>
    )
}

export default AddContact