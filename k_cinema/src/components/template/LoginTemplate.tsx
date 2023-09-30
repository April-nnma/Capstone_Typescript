import styled from "styled-components";

export const LoginTemplate = () => {
    return (
        <div className="w-full ">
            <div className="w-5/6  mx-auto grid grid-cols-2 gap-4">
                <div className="r-login border-r-4">
                    <Login>
                        <div className=" bg-red-600">
                            <h2 className="font-bold mx-auto text-white">
                                <span className="form-login active mx-20">
                                    Đăng nhập
                                </span>
                                <span className="form-register">Đăng ký</span>
                            </h2>
                        </div>

                        <div className="form-login-input">
                            <form>
                                <div>
                                    <label
                                        htmlFor="taiKhoan"
                                        className="font-bold"
                                    >
                                        Tài Khoản
                                    </label>
                                    <input
                                        id="emailPhone"
                                        type="text"
                                        placeholder="Tài Khoản"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="font-bold"
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                    />
                                </div>
                                <button>Đăng nhập</button>
                            </form>
                        </div>
                    </Login>
                </div>
                <div className="banner"></div>
            </div>
        </div>
    );
};

const Login = styled.header`
    div {
        h2 {
            .active {
                border-bottom: 3px solid #fff;
                color: #fff;
            }
        }
    }
    .form-login-input {
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
