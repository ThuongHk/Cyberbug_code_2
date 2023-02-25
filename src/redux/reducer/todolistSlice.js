import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskList: []
}

const todolistSlice = createSlice({
  name: 'todolistSlice',
  initialState,
  reducers: {
    getTodolist: (state, action) =>{
        state.taskList = action.payload
    }
  }
});

export const {getTodolist} = todolistSlice.actions

export default todolistSlice.reducer