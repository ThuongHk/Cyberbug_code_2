import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userNavigate: ''
}

const navigateSlice = createSlice({
  name: 'navigateSlice',
  initialState,
  reducers: {
    saveNavigate: (state, action) =>{
       
        state.userNavigate = action.payload
    }
  }
});

export const {saveNavigate} = navigateSlice.actions

export default navigateSlice.reducer