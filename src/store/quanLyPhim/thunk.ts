import { createAsyncThunk } from "@reduxjs/toolkit";

import { quanLyPhimServices } from "services";
import { sleep } from "utils";


export const getMovieListThunk = createAsyncThunk(
    "quanLyPhim/getMovieList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getMovieList('?maNhom=GP08');
            await sleep(1000)
            return data.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getBannerListThunk = createAsyncThunk(
    "quanLyPhim/getBannerList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getBannerList();
            return data.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
