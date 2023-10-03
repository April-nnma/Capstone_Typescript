import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { sleep } from "utils";

export const loginThunk = createAsyncThunk(
    "quanLyNguoiDung/login",
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        // _ khi không sử dụng payload
        try {
            const data = await quanLyNguoiDungServices.login(payload);
            // await new Promise(resolve => setTimeout(resolve, 2500))

            await sleep(2500)
            console.log("data: ", data.data.content);
            return data.data.content
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
