import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <div className="footer-brand-slide">
          <div className="sect-smuse">
            <ul>
              <li>
                <a className="dx" href="#">
                  4DX
                </a>
              </li>
              <li>
                <a className="imax" href="#">
                  Imax
                </a>
              </li>
              <li>
                <a className="starium" href="#">
                  STARIUM
                </a>
              </li>
              <li>
                <a className="goldclass" href="#">
                  GOLDCLASS
                </a>
              </li>
              <li>
                <a className="lamour" href="#">
                  L`AMOUR
                </a>
              </li>
              <li>
                <a className="sweetbox" href="#">
                  SWEETBOX
                </a>
              </li>
              <li>
                <a className="dolby" href="#">
                  DOLBY
                </a>
              </li>
              <li>
                <a className="premiumcinema" href="#">
                  PREMIUM CINEMA
                </a>
              </li>
              <li>
                <a className="sreenx" href="#">
                  SREENX
                </a>
              </li>
              <li>
                <a className="cine-forest" href="#">
                  CINE & FOREST
                </a>
              </li>
              <li>
                <a className="cine-livingroom" href="#">
                  Cine & Living Room
                </a>
              </li>
              <li>
                <a className="cine-suite" href="#">
                  Cine Suite
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-cgv-policy">
          <div className="content-cgv-policy">
            <div className="cgv-vietnam">
              <h3>CGV Việt Nam</h3>
              <ul>
                <li>
                  <a href="https://www.cgv.vn/default/about-cgv/">Giới Thiệu</a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/cgv-online/">
                    Tiện Ích Online
                  </a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/gift/">Thẻ Quà Tặng</a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/careers/">Tuyển Dụng</a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/contacts/">
                    Liên Hệ Quảng Cáo CGV
                  </a>
                </li>
              </ul>
            </div>
            <div className="cgv-policy">
              <h3>Điều khoản sử dụng</h3>
              <ul>
                <li>
                  <a href="https://www.cgv.vn/default/terms-conditions/">
                    Điều Khoản Chung
                  </a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/terms-use/">
                    Điều Khoản Giao Dịch
                  </a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/payment-policy/">
                    Chính Sách Thanh Toán
                  </a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/privacy-policy/">
                    Chính Sách Bảo Mật
                  </a>
                </li>
                <li>
                  <a href="https://www.cgv.vn/default/faq/">
                    Câu Hỏi Thường Gặp
                  </a>
                </li>
              </ul>
            </div>
            <div className="cgv-follow-us">
              <h3>Kết nối với chúng tôi</h3>
              <ul>
                <li>
                  <a
                    className="follow-fb"
                    href="https://www.facebook.com/cgvcinemavietnam"
                    target="_blank"
                  />
                </li>
                <li>
                  <a
                    className="follow-yt"
                    href="https://www.youtube.com/cgvvietnam"
                    target="_blank"
                  />
                </li>
                <li>
                  <a
                    className="follow-instagram"
                    href="http://instagram.com/cgvcinemasvietnam"
                    target="_blank"
                  />
                </li>
                <li>
                  <a
                    className="follow-zalo"
                    href="http://zalo.me/1884424922722396289"
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
            <div className="customer-cgv">
              <h3>Chăm sóc khách hàng</h3>
              <p>
                Hotline: 1900 6017
                <br />
                Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
                <br />
                Email hỗ trợ:
                <a href="mailto:hoidap@cgv.vn">hoidap@cgv.vn</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-cgv-address">
          <div className="cgv-address-content">
            <div className="logo-footer-cgv">&nbsp;</div>
            <div className="text-cgv-address">
              <h3>CÔNG TY TNHH CJ CGV VIỆT NAM</h3>
              <p>
                Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393 đăng ký lần đầu
                ngày 31/7/2008, được cấp bởi Sở Kế hoạch và Đầu tư Thành phố Hồ
                Chí Minh
              </p>
              <p>
                Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10,
                Thành phố Hồ Chí Minh, Việt Nam
              </p>
              <p>Đường dây nóng (Hotline): 1900 6017</p>
              <p>COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled.header`
  width: 100%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 120px;
  margin-top: 30px;
  .footer-brand-slide {
    /* border-bottom: 2px solid #222;
    border-top: 2px solid #222; */
    border-bottom: 2px solid;
    border-image: linear-gradient(
      to right,
      #ff5733,
      #ffda77,
      #4caf50,
      #3498db,
      #9b59b6,
      #e74c3c,
      #f39c12,
      #16a085,
      #2980b9,
      #8e44ad
    );
    border-image-slice: 1;
    border-top: 2px solid;
    border-image: linear-gradient(
      to right,
      #ff5733,
      #ffda77,
      #4caf50,
      #3498db,
      #9b59b6,
      #e74c3c,
      #f39c12,
      #16a085,
      #2980b9,
      #8e44ad
    );
    border-image-slice: 1;

    width: 100%;
    height: 44px;

    .sect-smuse {
      width: 50%;
      margin: 0px auto;

      ul {
        float: left;
        margin-top: 5px;
        width: 980px;
        li {
          float: left;
          a {
            background-image: url("/images/brand-type-film-footer_ver2.png");
            background-repeat: no-repeat;
            background-size: cover;
            height: 28px;
            text-indent: -99999px;
            white-space: nowrap;
            display: block;
            &.dx {
              background-position: -391px 6px;
              width: 45px;
            }
            &.imax {
              background-position: -160px 5px;
              width: 75px;
            }
            &.starium {
              background-position: -236px 5px;
              width: 57px;
            }
            &.goldclass {
              background-position: -292px 4px;
              width: 105px;
            }
            &.lamour {
              background-position: -82px 3px;
              width: 83px;
            }
            &.sweetbox {
              background-position: 2px 3px;
              width: 86px;
            }
            &.dolby {
              background-position: -577px 3px;
              width: 33px;
            }
            &.premiumcinema {
              background-position: -435px 2px;
              width: 115px;
            }
            &.sreenx {
              background-position: -604px -2px;
              width: 74px;
            }
            &.cine-forest {
              background-position: -675px 3px;
              width: 113px;
            }
            &.cine-livingroom {
              background-position: -785px 3px;
              width: 110px;
            }
            &.cine-suite {
              background-position: -891px 2px;
              width: 73px;
            }
          }
        }
      }
    }
  }

  .footer-cgv-policy {
    width: 100%;
    padding: 20px 0px;
    border-bottom: 2px solid;
    border-image: linear-gradient(
      to right,
      #ff5733,
      #ffda77,
      #4caf50,
      #3498db,
      #9b59b6,
      #e74c3c,
      #f39c12,
      #16a085,
      #2980b9,
      #8e44ad
    );
    border-image-slice: 1;
    overflow: hidden;
    display: block;
    .content-cgv-policy {
      width: 980px;
      margin: 0px auto;
      h3 {
        color: #636363;
        font-size: 14px;
        font-weight: bold;
      }
      .cgv-vietnam {
        float: left;
        width: 22%;
      }
      .cgv-policy {
        float: left;
        width: 22%;
      }
      .cgv-follow-us {
        float: left;
        width: 22%;
        ul {
          li {
            float: left;
            margin-right: 3px;
            a {
              background: url("/images/bg-social-footer-40.png");
              display: block;
              height: 39px;
              text-indent: -9999px;
              width: 39px;
              &.follow-fb {
                background-position: -9px -3px;
              }
              &.follow-yt {
                background-position: -54px -3px;
              }
              &.follow-instagram {
                background-position: -98px -3px;
              }
              &.follow-zalo {
                background-position: -191px -3px;
              }
            }
          }
        }
      }
      .customer-cgv {
        float: right;
        width: 28%;
      }
    }
  }
  .footer-cgv-address {
    width: 100%;
    overflow: hidden;
    display: block;
    padding: 10px 0px;
    .cgv-address-content {
      width: 980px;
      margin: 0px auto;
      .logo-footer-cgv {
        background-image: url("/images/common_sprite_area.png");
        background-position: -145px -319px;
        float: left;
        height: 43px;
        width: 120px;
        margin-top: 30px;
      }
      .text-cgv-address {
        float: left;
        width: 80%;
      }
    }
  }
`;
