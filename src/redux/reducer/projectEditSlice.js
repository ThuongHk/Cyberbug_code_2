import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
   projectEdit: {
    "id": 0,
    "projectName": "string",
    "creator": 0,
    "description": "string",
    "categoryId": "string"
  },
  listProjectDetail: []
}

const projectEditSlice = createSlice({
  name: 'projectEditSlice',
  initialState,
  reducers: {
   dataEdit: (state, action) =>{
    console.log(action);
    state.projectEdit = action.payload
   },
   projectDetail: (state, action) =>{    
    state.listProjectDetail = action.payload
   }
  }
});

export const {dataEdit, projectDetail} = projectEditSlice.actions

export default projectEditSlice.reducer