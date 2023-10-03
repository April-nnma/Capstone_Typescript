import styled from "styled-components";
import { Carousel } from "antd";

export const HomeTemplate = () => {
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
            <div className="slideshow-container"></div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img src="/images/bg-bottom-footer.jpg" alt="" />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
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
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};
