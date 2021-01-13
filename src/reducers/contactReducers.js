import { CREATE_CONTACT } from '../constants/constantType'

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
      }
   ]
};

export const contactReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_CONTACT:
         return {
            ...state,
            contacts: [
               ...state.contacts,
               action.data
            ]
         }
      default: return state;
   }
}