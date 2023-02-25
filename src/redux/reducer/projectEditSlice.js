import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
   projectEdit: {
    "id": 0,
    "projectName": "string",
    "creator": 0,
    "description": "string",
    "categoryId": "string"
  }
}

const projectEditSlice = createSlice({
  name: 'projectEditSlice',
  initialState,
  reducers: {
   dataEdit: (state, action) =>{
    state.projectEdit = action.payload
   }
  }
});

export const {dataEdit} = projectEditSlice.actions

export default projectEditSlice.reducer