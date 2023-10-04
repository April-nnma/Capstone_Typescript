import { createSlice } from "@reduxjs/toolkit";
import { Banner, Movie } from "types";

type QuanLyPhimInitialState = {
    movieList?: Movie[];
    bannerList?: Banner[];
};

const initialState: QuanLyPhimInitialState = {};

const quanLyPhimSlice = createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers() {},
});

export const {actions: quanLyPhimActions, reducer: quanLyPhimReducer} = quanLyPhimSlice