import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    color : "",
}

export const themeSlice = createSlice({
  name: 'Theme',
  initialState: initialStateValue,
    
  
  reducers: {
    
    changeTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  changeTextColor } = themeSlice.actions

export default themeSlice.reducer