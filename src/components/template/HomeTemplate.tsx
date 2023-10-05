import styled from "styled-components";
import { generatePath, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { getBannerListThunk, getMovieListThunk } from "store/quanLyPhim";
import { useSelector } from "react-redux";
import { Card, Carousel, Skeleton } from "components";
import { PATH } from "constant";

export const HomeTemplate = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { bannerList, isFetchingMovieList, movieList } = useSelector(
        (state: RootState) => state.quanLyPhim
);
    // console.log("bannerList: ", bannerList);

    useEffect(() => {
        dispatch(getMovieListThunk({ a: "GP08", b: "GP03" }));
        dispatch(getBannerListThunk());
    }, [dispatch]);

    if (isFetchingMovieList) {
        return (
            <div className="grid grid-cols-4">
                {[...Array(12)].map(() => {
                    return (
                        <Card className="!w-[300px]">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full !mt-16" />
                            <Skeleton.Input className="!w-full !mt-16" />
                        </Card>
                    );
                })}
            </div>
        );
    }

    return (
        <MainContainer>
            <div className="std">
                <div className="widget widget-static-block">
                    <div className="sect-person">
                        <ul>
                            <li>
                                <a className="theater" href="">
                                    theater
                                </a>
                            </li>
                            <li>
                                <a className="now-sh" href="">
                                    now-sh
                                </a>
                            </li>
                            <li>
                                <a className="special" href="">
                                    specia
                                </a>
                            </li>
                            <li>
                                <a className="event" href="">
                                    event
                                </a>
                            </li>
                            <li>
                                <a className="ticket required-login" href="">
                                    ticket
                                </a>
                            </li>
                            <li>
                                <a className="dc" href="">
                                    dc
                                </a>
                            </li>
                            <li>
                                <a className="login-header" href="">
                                    login-header
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="slideshow-container">
                <Carousel autoplay>
                    {bannerList?.map((banner) => (
                        <div key={banner.maBanner}>
                            <img
                                src={banner.hinhAnh}
                                alt={`Banner ${banner.maPhim}`}
                                style={contentStyle} // Đảm bảo hình ảnh hiển thị full width
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="movie-section">
                <div className="title m-auto">
                    <p className="text-center font-700 text-[90px]">
                        Movie Select
                    </p>
                </div>
                <div className=" grid grid-cols-4">
                    {movieList?.map((movie) => (
                        <Card
                            hoverable
                            key={movie.maPhim}
                            style={{ width: 240 }}
                            cover={
                                <img
                                    alt="example"
                                    src={movie.hinhAnh}
                                    className="h-80"
                                />
                            }
                            className="!mt-16 cursor-pointer"
                        >
                            <Card.Meta
                                className=" h-32"
                                title={movie.tenPhim}
                                description={movie.moTa.substring(0, 30)}
                            />
                            <button
                                className="text-center border border-gray-400 p-1 cursor-pointer hover:border-black transition shadow-xl rounded-10 !text-gray-600"
                                onClick={() => {
                                    const path = generatePath(
                                        PATH.detail,
                                        {
                                            movieID: movie.maPhim,
                                        }
                                    );
                                    navigate(path);
                                }}
                            >
                                Chi tiết phim
                            </button>
                        </Card>
                    ))}
                </div>
            </div>
        </MainContainer>
    );
};

const MainContainer = styled.header`
    width: 980px;
    margin: 0 auto;

    .std {
        .widget {
            .sect-person {
                border-bottom: 1px solid #222;
                display: block;
                margin-bottom: 10px;
                margin-top: 15px;
                padding-bottom: 6px;
                text-align: center;
                height: 108px;
                ul {
                    border-bottom: 1px solid #222;
                    padding-bottom: 100px;
                    width: 100%;
                    li {
                        float: left;
                        border-left: 1px solid #222;
                        vertical-align: baseline;
                        a {
                            background: url("public/images/bg-header-transparent-home.png");
                            display: block;
                            height: 90px;
                            text-indent: -9999px;
                            width: 139px;
                            &.theater {
                                background-position: 10px 0;
                            }
                            &.now-sh {
                                background-position: -140px 0;
                            }
                            &.special {
                                background-position: -280px 0;
                            }
                            &.event {
                                background-position: -420px 0;
                            }
                            &.ticket {
                                background-position: -560px 0;
                            }
                            &.dc {
                                background-position: -700px 0;
                            }
                            &.login-header {
                                background-position: -830px 0;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const contentStyle: React.CSSProperties = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    width: "100%",
};
