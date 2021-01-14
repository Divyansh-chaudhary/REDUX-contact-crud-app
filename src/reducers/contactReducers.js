import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT } from '../constants/constantType'

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
   ],
   contact: null,
   selectedContacts: null
};

export const contactReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_CONTACT:
         return {
            ...state,
            contacts: [
               ...state.contacts,
               action.payload
            ]
         };

      case GET_CONTACT:
         let arr = state.contacts.filter(contact => contact.id == action.payload);
         arr = arr.values();
         for (let val of arr) {
            arr = val;
         }
         return {
            ...state,
            contact: arr
         };

      case UPDATE_CONTACT:
         return {
            ...state,
            contacts: state.contacts.map(
               item => item.id === action.payload.id ? action.payload : item
            )
         };

      case DELETE_CONTACT:
         return {
            ...state,
            contacts: state.contacts.filter(
               item => item.id != action.payload
            )
         };
         case SELECT_CONTACT: 
         return {
            ...state,
            selectedContacts: action.payload
         }
         case CLEAR_CONTACT:
            return {
               ...state,
               selectedContacts: action.payload
            }

      default: return state;
   }
}