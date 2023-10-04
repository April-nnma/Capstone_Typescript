import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "types";
import { loginThunk } from "./thunk";
import { getAccessToken } from "utils";

type quanLyNguoiDungInitialState = {
    accessToken?: string;
    userLogin?: UserLogin;
    isFetchingLogin?: boolean;
};

const initialState: quanLyNguoiDungInitialState = {
    accessToken: getAccessToken(),
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
                state.accessToken = payload.accessToken;

                //set lại user
                state.userLogin = payload;
                state.isFetchingLogin = true;
            });
    },
});

export const {
    actions: quanLyNguoiDungActions,
    reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
