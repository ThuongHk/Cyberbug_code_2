import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN } from '../../util/settingSytem';

let usLogin = {}
if(localStorage.getItem(USER_LOGIN)){
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN)); 
}

const initialState = {
   userLogin : usLogin
}

const savaTokenSlice = createSlice({
  name: 'savaTokenSlice',
  initialState,
  reducers: {
       tokenLogin: (state, action) => {       
        state.userLogin = action.payload
       }
  }
});

export const {tokenLogin} = savaTokenSlice.actions

export default savaTokenSlice.reducer