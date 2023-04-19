import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    getStatusId: []
}

const listStatusIdSlice = createSlice({
  name: 'listStatusIdSlice',
  initialState,
  reducers: {
    getStatusId: (state, action) =>{
        state.getStatusId = action.payload
    }
  }
});

export const {getStatusId} = listStatusIdSlice.actions

export default listStatusIdSlice.reducer