import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    email: '',
    token: ''
  }
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = slice.actions

export const selectUser = (state) => state.counter.user

export default slice.reducer
