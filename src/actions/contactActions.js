import { CREATE_CONTACT } from '../constants/constantType'

export const addContact = contact => {
   return {
      type: CREATE_CONTACT,
      data: contact
   }
}