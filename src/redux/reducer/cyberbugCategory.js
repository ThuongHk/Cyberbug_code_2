import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     arrProjectCategory: []
}

const cyberbugCategory = createSlice({
  name: 'cyberbugCategory',
  initialState,
  reducers: {
    getAllCategory: (state, action) =>{
      console.log(action)
      state.arrProjectCategory = action.payload
    }
  }
});

export const {getAllCategory} = cyberbugCategory.actions

export default cyberbugCategory.reducer