import { apiInstance } from "constant/apiInstance";
import { LoginSchemaType, RegisterSchemaType } from "schema";


const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
});
export const quanLyNguoiDungServices = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: (data: RegisterSchemaType) => api.post("/DangKy", data),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: (data: LoginSchemaType) => api.post("/DangNhap", data),
};
