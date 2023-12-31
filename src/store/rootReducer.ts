import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
import { quanLyPhimReducer } from "./quanLyPhim";
import { quanLyRapReducer } from "./quanLyRap";
import { quanLyDatVeRuducer } from "./quanLyDatVe";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyPhim: quanLyPhimReducer,
    quanLyRap : quanLyRapReducer,
    quanLyDatVe : quanLyDatVeRuducer
});
