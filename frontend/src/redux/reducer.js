import {GET_CONTACTS , DELETE_CONTACT} from './actions/actionsTypes'



const initialState = {


contacts : []

}




const reducer = (state = initialState , action) => {

switch(action.type) {

case GET_CONTACTS : return {...state , contacts : action.payload}
// case DELETE_CONTACT : return {...state , contacts : state.contacts.filter((contact) => contact._id !== action.payload)}

default : return state

}}


export default reducer