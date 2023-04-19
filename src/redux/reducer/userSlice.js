import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   listUser: []
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUser: (state, action) =>{
        state.listUser = action.payload
    }
  }
});

export const {getUser} = userSlice.actions

export default userSlice.reducer