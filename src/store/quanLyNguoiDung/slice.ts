import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "types";
import { loginThunk } from "./thunk";

type quanLyNguoiDungInitialState = {
    accessToken?: string;
    userLogin?: UserLogin;
    isFetchingLogin?: boolean;
};

const initialState: quanLyNguoiDungInitialState = {
    accessToken: localStorage.getItem("ACCESSTOKEN"),
    isFetchingLogin: false,
};

const quanLyNguoiDungSlice = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isFetchingLogin = true;
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isFetchingLogin = false;
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                localStorage.setItem("ACCESSTOKEN", payload.accessToken);
                state.userLogin = payload;
                state.isFetchingLogin = true;
            });
    },
});

export const {
    actions: quanLyNguoiDungActions,
    reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
