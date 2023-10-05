import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "services";
import { sleep } from "utils";

export const getMovieListThunk = createAsyncThunk(
    "quanLyPhim/getMovieList",
    async(payload: { a: string, b: string }, { rejectWithValue }) => {
        try{
            const response1 = await quanLyPhimServices.getMovieList(`?maNhom=${payload.a}`);
            const response2 = await quanLyPhimServices.getMovieList(`?maNhom=${payload.b}`);
            
            const data1 = response1.data?.content || [];
            const data2 = response2.data?.content || [];
            const data3 = [...data1, ...data2];
            
            await sleep(2000);

            if (data3) {
                return data3;
            }
        } catch (err) {
            return rejectWithValue(err)
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
