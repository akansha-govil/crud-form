import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    list : [],
}

export const roleSlice = createSlice({
  name: 'role',
  initialState: initialStateValue,
    
  
  reducers: {
    updateRole: (state, action ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
     
        state.list = [
            ...state.list,
            state.list= action.payload
        ];
      //  state.list = action.payload;
       
       
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { updateRole } = roleSlice.actions

export default roleSlice.reducer