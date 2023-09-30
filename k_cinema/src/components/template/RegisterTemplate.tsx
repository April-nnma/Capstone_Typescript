import styled from "styled-components";

export const RegisterTemplate = () => {
    return (
        <div className="w-full ">
            <div className="w-5/6  mx-auto grid grid-cols-2 gap-4">
                <div className="r-register border-r-4">
                    <Register>
                        <div className=" bg-red-600">
                            <h2 className="font-bold mx-auto text-white">
                                <span className="form-login  mx-20">
                                    Đăng nhập
                                </span>
                                <span className="form-register active">
                                    Đăng ký
                                </span>
                            </h2>
                        </div>

                        <div className="form-register-input">
                            <form>
                                <div>
                                    <label
                                        htmlFor="taiKhoan"
                                        className="font-bold"
                                    >
                                        Tài Khoản
                                    </label>
                                    <input
                                        id="taiKhoan"
                                        type="text"
                                        placeholder="Tài Khoản"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="matKhau"
                                        className="font-bold"
                                    >
                                        Mật Khẩu
                                    </label>
                                    <input
                                        id="matKhau"
                                        type="password"
                                        placeholder="Mật Khẩu"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="font-bold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="soDt" className="font-bold">
                                        Số điện thoại
                                    </label>
                                    <input
                                        id="soDt"
                                        type="text"
                                        placeholder="Số điện thoại"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="maNhom"
                                        className="font-bold"
                                    >
                                        Mã nhóm
                                    </label>
                                    <input
                                        id="maNhom"
                                        type="text"
                                        placeholder="Mã Nhóm"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="hoTen"
                                        className="font-bold"
                                    >
                                        Họ Tên
                                    </label>
                                    <input
                                        id="hoTen"
                                        type="text"
                                        placeholder="Họ Tên"
                                    />
                                </div>
                                <button>Đăng ký</button>
                            </form>
                        </div>
                    </Register>
                </div>
                <div className="banner"></div>
            </div>
        </div>
    );
};

const Register = styled.header`
    div {
        h2 {
            .active {
                border-bottom: 3px solid #fff;
                color: #fff;
            }
        }
    }
    .form-register-input {
        form {
            padding: 20px 20px 5px;
            width: 100%;
            div {
                label {
                    display: block;
                    font-weight: 600;
                }
                input {
                    width: 100%;
                    padding: 10px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    box-sizing: border-box;
                }
            }
            button {
                width: 100%;
                background-color: #e71a0f;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                text-transform: uppercase;
            }
        }
    }
`;
