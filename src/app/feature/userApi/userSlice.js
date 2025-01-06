import { createSlice } from '@reduxjs/toolkit'

const loadUserFormLocalStorage = () => {
    try {
        const storedUserId = localStorage.getItem('id');
        if(storedUserId === null ) return null;
    
        return {id : JSON.parse(storedUserId)}
    } catch (error) {
        return null;
    }
}


const initialState = loadUserFormLocalStorage()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => { 
        localStorage.setItem("id", JSON.stringify(action.payload.id));
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer