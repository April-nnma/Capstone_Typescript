import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "types";

type quanLyNguoiDungInitialState = {
    accessToken?: string,
    userLogin?: UserLogin,
};

const initialState: quanLyNguoiDungInitialState = {
    accessToken: localStorage.getItem("ACCESSTOKEN")
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
