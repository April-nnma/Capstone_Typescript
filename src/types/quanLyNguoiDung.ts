export type UserLogin = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
    accessToken: string;
};

export type UserByAccessToken = Omit<UserLogin, "accessToken"> & {
    loaiNguoiDung: {
        maLoaiNguoiDung: "KhachHang" | "QuanTri";
    };
};

export type Update = {
    taiKhoan: string;
    matKhau: string;
    email: string;
    soDt: string;
    maNhom: string;
    maLoaiNguoiDung: string;
    hoTen: string;
};
