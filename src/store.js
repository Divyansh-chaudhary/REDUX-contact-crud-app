import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

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

const contactReducer = (state = initialState, action) => {
   switch (action.type) {
      default: return state;
   }
}
const store = createStore(contactReducer, composeWithDevTools());
export default store;