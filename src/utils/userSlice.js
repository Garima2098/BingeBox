import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    //This user will be added to the redux store
    addUser: (state, action) => {
      return action.payload;
    },
    //This will remove user from redux store
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;