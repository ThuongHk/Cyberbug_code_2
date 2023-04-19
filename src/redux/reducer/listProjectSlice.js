import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   listProject: [],
   arrProject: []
}

const listProjectSlice = createSlice({
  name: 'listProjectSlice',
  initialState,
  reducers: {
    getListProject: (state, action) =>{
     
      state.listProject = action.payload
    },
    getAllProject: (state, action) =>{
      
      state.arrProject = action.payload
    }
  }
});

export const {getListProject, getAllProject} = listProjectSlice.actions

export default listProjectSlice.reducer