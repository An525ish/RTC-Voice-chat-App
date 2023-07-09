import { createSlice } from '@reduxjs/toolkit'
import avatar from '../assets/Avatar.png'

const initialState = {
  fullname : '',
  username : '',
  Avatar : avatar,
}

export const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.fullname = action.payload
    },
    setAvatar : (state, action) => {
        state.Avatar = action.payload
    },
    setDisplayname : (state, action) => {
        state.username = action.payload
    }
    
  },
})

export const { setName, setAvatar, setDisplayname } = activateSlice.actions

export default activateSlice.reducer