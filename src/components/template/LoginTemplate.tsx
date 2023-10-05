import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "components";
import styled from "styled-components";
import { LoginSchema, LoginSchemaType } from "schema/LoginSchema";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import { RootState, useAppDispatch } from "store";
import { loginThunk } from "store/quanLyNguoiDung";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAuth } from "hooks";
import { handleErrors } from "utils";
import { PATH } from "constant";

export const LoginTemplate = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: "onChange",
        resolver: zodResolver(LoginSchema),
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isFetchingLogin } = useSelector(
        (state: RootState) => state.quanLyNguoiDung
    );

    const onSubmit: SubmitHandler<LoginSchemaType> = (value) => {
        // console.log(value);
        dispatch(loginThunk(value))
            .unwrap()
            .then(() => {
                //xử lý thành công
                navigate("/");
                toast.success("Đăng nhập thành công");
            })
            .catch((error) => {
                //xử lý thất bại
                handleErrors(error);
            });
    };

    // const { accessToken } = useSelector(
    //     (state: RootState) => state.quanLyNguoiDung
    // );
    const { accessToken } = useAuth();
    if (accessToken) {
        return <Navigate to="/" />;
    }

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
                                <span className="form-register cursor-pointer" onClick={()=>{
                                    navigate(PATH.register)
                                }}>Đăng ký</span>
                            </h2>
                        </div>

                        <div className="form-login-input">
                            <form onSubmit={handleSubmit(onSubmit)}>
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

                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    className="!w-full !h-[auto] !py-[13px] mt-6"
                                    danger
                                    loading={isFetchingLogin}
                                >
                                    Đăng nhập
                                </Button>
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
        }
    }
`;
