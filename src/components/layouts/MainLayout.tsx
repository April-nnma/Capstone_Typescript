import styled from "styled-components";
import { Footer, Header, HeaderAuth } from "../ui";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <main>
            <HeaderAuth />
            <Header />

            <MainWrapper id="main-content">
                <Outlet />
            </MainWrapper>

            <Footer />
        </main>
    );
};

const MainWrapper = styled.div`
    max-width: 80%;
    margin: auto;
    padding: 40px;
`;
