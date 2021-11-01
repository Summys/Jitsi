import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserDetails = {
  displayName: string;
  call: string;
};

const initialState: UserDetails = {
  displayName: '',
  call: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDisplayName(state, action: PayloadAction<string>) {
      state.displayName = action.payload;
    },
    setCall(state, action: PayloadAction<string>) {
      state.call = action.payload;
    },
  },
});

export const {setDisplayName, setCall} = userSlice.actions;
export default userSlice.reducer;
