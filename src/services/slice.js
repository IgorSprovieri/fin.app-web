import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    email: '',
    token: '',
    avatar_url: ''
  }
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setAvatarUrl: (state, action) => {
      state.user.avatar_url = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setAvatarUrl } = slice.actions

export const selectUser = (state) => state.counter.user

export default slice.reducer
