import { PATH } from "constant";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "components";
export const HeaderAuth = () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth();
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
                    <Avatar>
                        <i className="fa-solid fa-user"></i>
                    </Avatar>
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
