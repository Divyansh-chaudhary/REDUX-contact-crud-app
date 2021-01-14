import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import {selectAllContact, clearAllContact} from '../../actions/contactActions'

export default function App() {
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector(({ contactState }) => contactState.contacts);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(selectAll) {
      dispatch(selectAllContact(contacts.map(item => item.id)));
    } else {
      dispatch(clearAllContact());
    }
  },[selectAll]);

  return (
    <table className="table shadow">
      <thead className="bg-danger text-white">
        <tr>
          <th>
            <div className="custom-control custom-checkbox">
              <input
                onClick={() => setSelectAll(!selectAll)} id="selectAll"
                type="checkbox"
                className="custom-control-input"
                value={selectAll} />
              <label
                htmlFor="selectAll" className="custom-control-label">
              </label>
            </div>
          </th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => <Contact selectAll={selectAll} contact={contact} key={contact.id} />)}
      </tbody>
    </table>
  );
}