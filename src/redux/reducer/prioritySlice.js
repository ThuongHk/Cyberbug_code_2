import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listPriority: []
}

const prioritySlice = createSlice({
  name: 'prioritySlice',
  initialState,
  reducers: {
    getPriority: (state, action) =>{
        
        state.listPriority = action.payload
    }
  }
});

export const {getPriority} = prioritySlice.actions

export default prioritySlice.reducer