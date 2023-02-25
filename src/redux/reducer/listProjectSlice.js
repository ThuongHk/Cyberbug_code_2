import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   listProject: []
}

const listProjectSlice = createSlice({
  name: 'listProjectSlice',
  initialState,
  reducers: {
    getListProject: (state, action) =>{
     
      state.listProject = action.payload
    }
  }
});

export const {getListProject} = listProjectSlice.actions

export default listProjectSlice.reducer