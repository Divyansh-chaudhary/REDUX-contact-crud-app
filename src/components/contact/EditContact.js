import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from '../../actions/contactActions'
import { useHistory, useParams } from 'react-router-dom'

export default function EditContact() {
   const history = useHistory(),
      dispatch = useDispatch(),
      [input, setInput] = useState({
         name: "",
         email: "",
         phone: ""
      }),
      { name, email, phone } = input,
      { id } = useParams();

   const inputEvent = e => setInput({ ...input, [e.target.name]: e.target.value });

   const submitForm = e => {
      e.preventDefault();
      const updated_contact = Object.assign(contact, input);
      dispatch(updateContact(updated_contact));
      history.push("/");
   }

   const contact = useSelector((state) => state.contactState.contact);

   useEffect(() => {
      if (contact != null) {
         setInput({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
         });
      }

      dispatch(getContact(id));
   }, [contact]);

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
               <button className="btn btn-warning" type="submit">
                  Update Contact
                  </button>
            </form>
         </div>
      </section>
   )
}
