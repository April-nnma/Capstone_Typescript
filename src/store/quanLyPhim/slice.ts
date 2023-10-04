import { createSlice } from "@reduxjs/toolkit";
import { Banner, Movie } from "types";
import { getBannerListThunk, getMovieListThunk } from ".";

type QuanLyPhimInitialState = {
    movieList?: Movie[];
    isFetchingMovieList?: boolean;
    bannerList?: Banner[];
};

const initialState: QuanLyPhimInitialState = {};

const quanLyPhimSlice = createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getMovieListThunk.pending, (state) => {
                state.isFetchingMovieList = true;
            })
            .addCase(getMovieListThunk.fulfilled, (state, { payload }) => {
                state.movieList = payload;
                state.isFetchingMovieList = false;
            })
            .addCase(getMovieListThunk.rejected, (state) => {
                state.isFetchingMovieList = false;
            })
            .addCase(getBannerListThunk.fulfilled, (state, { payload }) => {
                state.bannerList = payload;
                console.log("bannerList: ", state.bannerList);

            });
    },
});

export const { actions: quanLyPhimActions, reducer: quanLyPhimReducer } =
    quanLyPhimSlice;
