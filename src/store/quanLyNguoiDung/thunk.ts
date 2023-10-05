import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { Update } from "types";
import { getAccessToken, sleep } from "utils";

export const loginThunk = createAsyncThunk(
    "quanLyNguoiDung/login",
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        // _ khi không sử dụng payload
        try {
            const data = await quanLyNguoiDungServices.login(payload);
            // await new Promise(resolve => setTimeout(resolve, 2500))

            await sleep(2500)
            // console.log("data: ", data.data.content);
            return data.data.content
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getUserByAccessTokenThunk= createAsyncThunk(
    "quanLyNguoiDung/getUserByAccessToken",
    async (_,{rejectWithValue}) =>{
        try {
            const token = getAccessToken()
            if(token){
                const data = await quanLyNguoiDungServices.getUserByAccessToken()
                return data.data.content
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const putUpdateInfoThunk = createAsyncThunk(
    "quanLyNguoiDung/putUpdateInfo",
    async(payload : Update, {rejectWithValue}) => {
        try {
            const data = await quanLyNguoiDungServices.updateAccount(payload)
            return data.data.content
        } catch(err) {
            return rejectWithValue(err)
        }
    }
)