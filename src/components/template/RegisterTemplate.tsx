import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { quanLyNguoiDungServices } from "services";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { Input } from "components";
import { handleErrors } from "utils";

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

    const navigate = useNavigate(); //

    const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
        try {
            // console.log("values: ", { values });
            await quanLyNguoiDungServices.register(values);
            toast.success("Đăng ký thành công");
            navigate(PATH.login); // đưa về trang login sau khi đăng ký thành công
        } catch (erros) {
            // console.log("erros: ", erros);
            // toast.error(erros?.response?.data?.content);
            handleErrors(erros)
        }
    };

    return (
        <div className="w-full ">
            <div className="w-5/6  mx-auto grid grid-cols-2 gap-4">
                <div className="r-register border-r-4">
                    <Register>
                        <div className=" bg-red-600">
                            <h2 className="font-bold mx-auto text-white">
                                <span className="form-login mx-20 cursor-pointer"
                                onClick={()=>{
                                    navigate(PATH.login)
                                }}
                                >
                                    Đăng nhập
                                </span>
                                <span className="form-register active">
                                    Đăng ký
                                </span>
                            </h2>
                        </div>

                        <div className="form-register-input">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* <div>
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
                                </div> */}
                                <Input
                                    label="Tài khoản"
                                    id="taiKhoan"
                                    type="text"
                                    register={register}
                                    errors={errors?.taiKhoan?.message}
                                    placeholder="Vui lòng nhập tài khoản"
                                    name="taiKhoan"
                                />
                                <Input
                                    label="Mật Khẩu"
                                    id="matKhau"
                                    type="password"
                                    register={register}
                                    errors={errors?.matKhau?.message}
                                    placeholder="Vui lòng nhập mật khẩu"
                                    name="matKhau"
                                />
                                <Input
                                    label="Email"
                                    id="email"
                                    type="email"
                                    register={register}
                                    errors={errors?.email?.message}
                                    placeholder="Vui lòng nhập email"
                                    name="email"
                                />

                                <Input
                                    label="Số điện thoại"
                                    id="soDt"
                                    type="text"
                                    register={register}
                                    errors={errors?.soDt?.message}
                                    placeholder="Vui lòng nhập email"
                                    name="soDt"
                                />
                                <Input
                                    label="Mã nhóm"
                                    id="maNhom"
                                    type="text"
                                    register={register}
                                    errors={errors?.maNhom?.message}
                                    placeholder="Vui lòng mã nhóm"
                                    name="maNhom"
                                />
                                <Input
                                    label="Họ tên"
                                    id="hoTen"
                                    type="text"
                                    register={register}
                                    errors={errors?.hoTen?.message}
                                    placeholder="Vui lòng họ tên"
                                    name="hoTen"
                                />
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
