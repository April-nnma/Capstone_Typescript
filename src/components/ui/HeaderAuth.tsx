import { PATH } from "constant";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Avatar, Popover } from "components";
import { Button } from "antd";
import { useAppDispatch } from "store";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung";

export const HeaderAuth = () => {
    const navigate = useNavigate();
    const { accessToken, user } = useAuth();
    const dispatch = useAppDispatch()
    return (
        <div>
            {!accessToken && (
                <Account>
                    <a
                        className="text-20 mr-6 cursor-pointer"
                        onClick={() => navigate(PATH.login)}
                    >
                        Đăng nhập
                    </a>
                    <span>/ </span>
                    <a
                        className="text-20 cursor-pointer"
                        onClick={() => navigate(PATH.register)}
                    >
                        Đăng ký
                    </a>
                </Account>
            )}
            {!!accessToken && (
                <Account>
                    <Popover
                        content={
                            <div>
                                <p className="font-500 text-16">{user?.hoTen}</p>
                                <hr className="my-16" />
                                <p className="text-16 cursor-pointer">Thông tin tài khoản</p>
                                <hr className="my-16" />
                                <Button 
                                    type="primary"
                                    className="!w-full !h-[auto] !py-[13px] mt-6"
                                    onClick={()=>dispatch(quanLyNguoiDungActions.logOut(''))}
                                    >
                                    <i className="fa-solid fa-right-from-bracket mr-5"></i>
                                    <span>Đăng xuất</span>
                                </Button>
                            </div>
                        }
                        trigger={"click"}
                        arrow={false}
                    >
                        <Avatar>
                            <i className="fa-solid fa-user"></i>
                        </Avatar>
                    </Popover>
                </Account>
            )}
        </div>
    );
};

const Account = styled.header`
    width: 80%;
    text-align: end;
    padding: 5px;
    a {
        &:hover {
            color: red;
        }
    }
`;
