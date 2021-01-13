import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../store'

export default function CreateContact() {
   const dispatch = useDispatch();
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: ""
   });
   const { name, email, phone } = input;

   const inputEvent = e => setInput({ ...input, [e.target.name]: e.target.value });

   const submitForm = e => {
      e.preventDefault();
      addContact(input);
      dispatch(addContact(input));
   }


   return (
      <section className="card border-0 shadow">
         <div className="card-header">
            Add a Contact
         </div>
         <div className="card-body">
            <form onSubmit={submitForm}>
               <div className="form-group">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Enter Your Name"
                     value={name}
                     name="name"
                     onChange={inputEvent}
                  />
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Enter Your Email"
                     value={email}
                     name="email"
                     onChange={inputEvent}
                  />
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Enter Your Phone"
                     value={phone}
                     name="phone"
                     onChange={inputEvent}
                  />
               </div>
               <button className="btn btn-primary" type="submit">
                  Create Contact
                  </button>
            </form>
         </div>
      </section>
   )
}
