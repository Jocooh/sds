// src/redux/modules/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let someSlice = createSlice({
  //todoSlice : state보관함 이름
  name: "someSlice",
  initialState,
  //state수정해주는 함수
  reducers: {},
});

export let { toggleTrue } = someSlice.actions; //state변경함수들 남음
export default someSlice;
