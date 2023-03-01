import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN } from '../../util/settingSytem';

let usLogin = {}
if(localStorage.getItem(USER_LOGIN)){
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN)); 
}

const initialState = {
   userLogin : usLogin,
   addUserAutho: []
}

const savaTokenSlice = createSlice({
  name: 'savaTokenSlice',
  initialState,
  reducers: {
       tokenLogin: (state, action) => {       
        state.userLogin = action.payload
       },
       addAutho: (state, action) => {
        state.addUserAutho = action.payload
       }
  }
});

export const {tokenLogin, addAutho} = savaTokenSlice.actions

export default savaTokenSlice.reducer