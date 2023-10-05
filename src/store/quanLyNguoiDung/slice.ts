import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserByAccessToken, UserLogin } from "types";
import { getUserByAccessTokenThunk, loginThunk } from "./thunk";
import { getAccessToken } from "utils";

type quanLyNguoiDungInitialState = {
    accessToken?: string;
    userLogin?: UserLogin | UserByAccessToken;
    isFetchingLogin?: boolean;
};

const initialState: quanLyNguoiDungInitialState = {
    accessToken: getAccessToken(),
    isFetchingLogin: false,
};

const quanLyNguoiDungSlice = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {
        logOut: (state, action: PayloadAction<string>) => {
            console.log("action: ", action);
            state.accessToken = undefined;
            state.userLogin = undefined;
            localStorage.removeItem("ACCESSTOKEN");

        },

        update: (state, {payload})=>{
            state.userLogin = payload
        }
    },
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
            })
            .addCase(
                getUserByAccessTokenThunk.fulfilled,
                (state, { payload }) => {
                    console.log(payload);
                    
                    state.userLogin = payload;
                }
            );
    },
});

export const {
    actions: quanLyNguoiDungActions,
    reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
