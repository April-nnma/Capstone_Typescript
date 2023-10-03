import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "types";
import { loginThunk } from "./thunk";


type quanLyNguoiDungInitialState = {
    accessToken?: string;
    userLogin?: UserLogin;
};

const initialState: quanLyNguoiDungInitialState = {
    accessToken: localStorage.getItem("ACCESSTOKEN"),
};

const quanLyNguoiDungSlice = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // .addCase(loginThunk.pending, (state, { payload }) => {})
            // .addCase(loginThunk.rejected, (state, { payload }) => {})
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.accessToken = payload
            })
    },
});

export const {
    actions: quanLyNguoiDungActions,
    reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
