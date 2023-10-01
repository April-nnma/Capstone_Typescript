import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import axios from "axios";

export const RegisterTemplate = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema),
    });
    // console.log("errors: ", errors);

    const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
        try {
            console.log("values: ", { values });
            await axios({
                method: "POST",
                url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                data: values,
                headers: {
                    ///nhận token cyberSoft
                    TokenCybersoft:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjE1LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzk1NTIwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA4MTAyODAwfQ.YGLcwOu11pM9sD9C2a0dia7O_6vvsYwkCoo1sqcbCFM",
                },
            });
            toast.success("Đăng ký thành công");
        } catch (erros) {
            console.log("erros: ", erros);
            toast.error(erros?.response?.data?.content);
        }
    };

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
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        // {...register("taiKhoan", {
                                        //     required: "Vui lòng nhập tài khoản",
                                        //     maxLength: {
                                        //         value: 10,
                                        //         message: "Nhập tối đa 10 ký tự",
                                        //     },
                                        //     minLength: {
                                        //         value: 5,
                                        //         message:
                                        //             "Nhập ít nhất 5  ký tự",
                                        //     },
                                        //     // pattern:
                                        // })}
                                        {...register("taiKhoan")}
                                    />
                                    {errors?.taiKhoan && (
                                        <p className="text-red-500 text-14">
                                            {errors?.taiKhoan?.message}
                                        </p>
                                    )}
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
                                        {...register("matKhau")}
                                    />
                                    {errors?.matKhau && (
                                        <p className="text-red-500 text-14">
                                            {errors?.matKhau?.message}
                                        </p>
                                    )}
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
                                        {...register("email")}
                                    />
                                    {errors?.email && (
                                        <p className="text-red-500 text-14">
                                            {errors?.email?.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="soDt" className="font-bold">
                                        Số điện thoại
                                    </label>
                                    <input
                                        id="soDt"
                                        type="text"
                                        placeholder="Số điện thoại"
                                        {...register("soDt")}
                                    />
                                    {errors?.soDt && (
                                        <p className="text-red-500 text-14">
                                            {errors?.soDt?.message}
                                        </p>
                                    )}
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
                                        {...register("maNhom")}
                                    />
                                    {errors?.maNhom && (
                                        <p className="text-red-500 text-14">
                                            {errors?.maNhom?.message}
                                        </p>
                                    )}
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
                                        {...register("hoTen")}
                                    />
                                    {errors?.hoTen && (
                                        <p className="text-red-500 text-14">
                                            {errors?.hoTen?.message}
                                        </p>
                                    )}
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
