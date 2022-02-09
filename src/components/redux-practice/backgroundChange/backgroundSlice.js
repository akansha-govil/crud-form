import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    bgcolor : "#282c34",
}

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: initialStateValue,
    
  
  reducers: {
    
    changeBackgroundColor: (state) => {
    //   state.bgcolor = "yellow"
    if(state.bgcolor=="#282c34")
    {
        state.bgcolor="gray";
    }
    else{
        state.bgcolor="#282c34";
    }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeBackgroundColor  } = backgroundSlice.actions

export default backgroundSlice.reducer