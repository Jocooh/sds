//configStore파일 자체가 store이므로 index.js에서 store은 여기 파일이라는 거
import { configureStore } from "@reduxjs/toolkit";

import someSlice from "../modules/someSlice";

const store = configureStore({
  reducer: { someSlice: someSlice.reducer },
});

export default store;
