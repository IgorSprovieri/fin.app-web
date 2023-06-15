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
    },
    deleteUser: (state, action) => {
      state.user = initialState
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setAvatarUrl, deleteUser } = slice.actions

export const selectUser = (state) => state.counter.user

export default slice.reducer
