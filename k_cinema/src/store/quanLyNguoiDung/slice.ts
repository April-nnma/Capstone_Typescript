import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

type quanLyNguoiDungInitialState = {
    //
};

const quanLyNguoiDungSlice = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers() {},
});

export const {
    actions: quanLyNguoiDungActions,
    reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
