import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserLogined = {
  id: '',
  email: '',
  role: '',
  created: '',
  wallets: [],
  nearWallets: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => initialState,
    loginUser: (_, action: PayloadAction<IUserLogined>) => action.payload,
  },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
