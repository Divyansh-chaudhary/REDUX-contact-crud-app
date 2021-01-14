import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../actions/contactActions'

export default function Contact({ contact, selectAll }) {
   const dispatch = useDispatch();
   const { id, name, phone, email } = contact;
   return (
      <tr>
         <td>
            <div className="custom-control custom-checkbox">
               <input
                  checked={selectAll}
                  type="checkbox"
                  className="custom-control-input"
               />
               <label className="custom-control-label"></label>
            </div>
         </td>
         <td>
            <Avatar
               round={true}
               size="45"
               className="mr-2"
               name={name} />
            {name}
         </td>
         <td>{phone}</td>
         <td>{email}</td>
         <td className="actions">
            <Link title="Edit" to={`/contacts/edit/${id}`}>
               <span className="material-icons mr-2">
                  edit
               </span>
            </Link>
            <span
               style={{ cursor: "pointer" }}
               onClick={() => dispatch(deleteContact(id))} className="material-icons">
               remove_circle
            </span>
         </td>
      </tr>
   );
}