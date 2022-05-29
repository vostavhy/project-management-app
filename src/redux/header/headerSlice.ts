import { createSlice } from '@reduxjs/toolkit';

interface headerState {
  isHeader: boolean;
}

const initialState: headerState = {
  isHeader: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderState: (state, action) => {
      state.isHeader = action.payload;
    },
  },
});

export const { setHeaderState } = headerSlice.actions;
export default headerSlice.reducer;
