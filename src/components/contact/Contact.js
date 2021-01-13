import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

export default function Contact({ contact }) {
   const { name, phone, email } = contact;
   return (
      <tr>
         <td>
            <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" />
               <label className="custom-control-label"></label>
            </div>
         </td>
         <td>
            <Avatar round={true} size="45" className="mr-2" name={name} />{name}
         </td>
         <td>{phone}</td>
         <td>{email}</td>
         <td className="actions">
            <Link title="Edit" to="/contacts/edit">
               <span className="material-icons mr-2">
                  edit
               </span>
            </Link>
            <Link title="Delete" to="/contacts/delete">
               <span className="material-icons">
                  remove_circle
               </span>
            </Link>
         </td>
      </tr>
   );
}