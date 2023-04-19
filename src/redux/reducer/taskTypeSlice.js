import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taskType: []
}

const taskTypeSlice = createSlice({
  name: 'taskTypeSlice',
  initialState,
  reducers: {
    getTaskType: (state, action) =>{
        state.taskType = action.payload
    }
  }
});

export const {getTaskType} = taskTypeSlice.actions

export default taskTypeSlice.reducer