import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";

export const loginThunk = createAsyncThunk(
    "quanLyNguoiDung/login",
    async (payload: LoginSchemaType, {rejectWithValue}) => { // _ khi không sử dụng payload
        try {
            const data = await quanLyNguoiDungServices.login(payload)
            console.log("data: ", data);
        } catch (error) {
            rejectWithValue(error)
        }
    }
);
