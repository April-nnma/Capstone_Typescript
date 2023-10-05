import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-header bg-contain">
            <PageHearderContainer>
                <a className="logo" href="" onClick={()=>{
                    navigate("/")
                }}>
                    <img
                        src="/images/cgvlogo.png"
                        alt="CGV Cinemas"
                        className="large"
                    />
                </a>
                <div className="header-nav">
                    <nav className="nav">
                        <ol className="nav-primary">
                            <li className="font-bold cursor-default">
                                PHIM
                                <a className="dropdown-content">
                                    <p>Phim đang chiếu</p>
                                    <p>Phim sắp chiếu</p>
                                </a>
                            </li>

                            <li className="font-bold cursor-default">
                                RẠP CGV
                                <a className="dropdown-content">
                                    <p>Tất cả các rạp</p>
                                    <p>Rạp đặt biệt</p>
                                    <p>Rạp 3D</p>
                                </a>
                            </li>

                            <li className="font-bold cursor-default">
                                THÀNH VIÊN
                                <a className="dropdown-content">
                                    <p>Tài khoản CGV</p>
                                    <p>Quyền lợi</p>
                                </a>
                            </li>
                            <li className="font-bold cursor-default">
                                CULTUREPLEX
                                <a className="dropdown-content">
                                    <p>Quầy online</p>
                                    <p>Thuê rạp & vé nhóm</p>
                                    <p>E-CGV</p>
                                    <p>CGV EGift</p>
                                    <p>CGV Rules</p>
                                </a>
                            </li>
                            <li className="font-bold cursor-default">
                                TUYỂN DỤNG
                                <a className="dropdown-content">
                                    <p>Tuyển dụng</p>
                                    <p>Khối văn phòng</p>
                                    <p>Khối cụp rạp</p>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
                {/* search */}
                <div className="search-header">
                    <div className="search-header-left">
                        <p className="kenh-cine">
                            <a href="#">
                                <img
                                    src="/images/kenhcine.gif"
                                    alt="kenhcine"
                                />
                            </a>
                        </p>
                    </div>
                    <div className="search-header-right">
                        <p>
                            <a href="#">
                                <img
                                    src="/images/mua-ve_ngay.png"
                                    alt="muavengay"
                                />
                            </a>
                        </p>
                    </div>
                </div>
            </PageHearderContainer>
        </div>
    );
};

const PageHearderContainer = styled.header`
    width: 50%;
    margin: 0px auto;
    height: 135px;

    /* @media screen and (max-width: 700px) {
        width: 100%;
    } */

    .large {
        top: 25%;
        position: relative;
        /* @media screen and (max-width: 700px) {
            
        } */
    }
    .header-nav {
        display: block;
        left: 650px;
        position: absolute;
        top: 100px;
        .nav {
            display: block;
            .nav-primary {
                display: block;
                margin-top: 15px;
                display: flex;
                list-style: none;
                .font-bold {
                    margin-right: 40px;
                    /* position: relative;
                    display: inline-block; */
                    .dropdown-content {
                        display: none;
                        position: absolute;
                        min-width: 160px;
                        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                        padding: 12px 16px;
                        z-index: 1;
                        background-color: white;
                    }
                    &:hover .dropdown-content {
                        display: block;
                    }
                }
            }
        }
    }
    .search-header {
        display: block;
        position: absolute;
        top: 55px;
        right: 450px;
        padding: 0;
        text-align: right;
        .search-header-left {
            display: inline-block;
        }
        .search-header-right {
            display: inline-block;
        }
    }
`;
