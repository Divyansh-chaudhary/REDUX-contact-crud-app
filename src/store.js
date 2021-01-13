import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

// action
export const addContact = contact => {
   return {
      type: "CREATE_CONTACT",
      data: contact
   }
}

// initialstate
const initialState = {
   contacts: [
      {
         "id": 1,
         "name": "leande",
         "phone": "338-5555-3838",
         "email": "andkkdjd@gmail.com"
      },
      {
         "id": 2,
         "name": "send dee",
         "phone": "338-9999-3838",
         "email": "andhra@gmail.com"
      },
      {
         "id": 2,
         "name": "send dee",
         "phone": "338-9999-3838",
         "email": "andhra@gmail.com"
      },
      {
         "id": 2,
         "name": "send dee",
         "phone": "338-9999-3838",
         "email": "andhra@gmail.com"
      },
      {
         "id": 2,
         "name": "send dee",
         "phone": "338-9999-3838",
         "email": "andhra@gmail.com"
      },
      {
         "id": 2,
         "name": "send dee",
         "phone": "338-9999-3838",
         "email": "andhra@gmail.com"
      }
   ]
};

// reducer
const managerReducer = (state = initialState, action) => {
   switch (action.type) {
      case "CREATE_CONTACT":
         return {
            ...state,
            contacts: [
               action.data,
               ...state.contacts
            ]
         }
      default: return state;
   }
}

// createstore
const store = createStore(managerReducer, composeWithDevTools());
export default store;