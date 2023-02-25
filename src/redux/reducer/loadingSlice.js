import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoading: ''
}

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    displayLoading: (state, action) =>{
        state.isLoading = action.payload
    }
  }
});

export const {displayLoading} = loadingSlice.actions

export default loadingSlice.reducer