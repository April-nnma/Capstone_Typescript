export type UserLogin = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string;
    maNhom: string;
    maLoaiNguoiDung: "Khach Hang" | "Quan Tri";
    accessToken: string;
};

export type UserByAccessToken = Omit<UserLogin, "accessToken"> & {
    loaiNguoiDung: {
        maLoaiNguoiDung: "Khach Hang" | "Quan Tri";
    };
    thongTinDatVe?: [];
};
