import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT } from '../constants/constantType'

export const addContact = payload => ({
   type: CREATE_CONTACT,
   payload: payload
})

export const getContact = payload => ({
   type: GET_CONTACT,
   payload: payload
})

export const updateContact = payload => ({
   type: UPDATE_CONTACT,
   payload: payload
})

export const deleteContact = id => ({
   type: DELETE_CONTACT,
   payload: id
})

export const selectAllContact = id => ({
   type: SELECT_CONTACT,
   payload: id
})

export const clearAllContact = () => ({
   type: SELECT_CONTACT
})
