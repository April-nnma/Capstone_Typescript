import styled from "styled-components";
export const HeaderAuth = () => {
    return (
        <div>
            <Account>               
                <a className="text-20 mr-6 cursor-pointer">Đăng nhập</a> 
                <span>/ </span>
                <a className="text-20 cursor-pointer">Đăng ký</a>
            </Account>
        </div>
    );
};

const Account = styled.header`
    width: 80%;
    text-align: end;
    padding: 5px;
    a{
        &:hover{
            color: red
        }
    }
`;
