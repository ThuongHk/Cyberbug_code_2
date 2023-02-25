import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
  Component: <p>Hello</p>,
  callBackSubmit: (submit) => submit,
}

const cyberbugModalSlice = createSlice({
  name: 'cyberbugModalSlice',
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.visible = action.payload
    },

    closeDrawer: (state, action) => {
      state.visible = action.payload
    },
    openFormEdit: (state, action) => {
      state.visible = action.payload.visible
      state.Component = action.payload.Component
    },
    callBackSubmitForm: (state, action) => {
      state.callBackSubmit = action.payload
    }
  },
})

export const { openDrawer, closeDrawer,openFormEdit, callBackSubmitForm } = cyberbugModalSlice.actions

export default cyberbugModalSlice.reducer
