import { createSlice } from '@reduxjs/toolkit';
import { sprites} from "components/App/constants";

const { default: defaultMode } = sprites;
const initialState = defaultMode;

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: state => {
      console.log(state);
    },
  },
});

export default modeSlice.reducer;
