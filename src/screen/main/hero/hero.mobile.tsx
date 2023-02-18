import { useState } from "react";
import styled from "styled-components";

const Copy = styled.div`
    width: 100vw;
    position: absolute;
    top: 8px;
    left: 0;
    text-align: center;
    color: #30f950;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
`;

// 비율: 0.36
const StyledHaxagon1 = styled.div`
    display: flex;
    position: absolute;
    top: calc(50vh - 80vw * 0.36 / 2 - 32px);
    left: calc(50vw - 80vw / 2);
`;
const Haxagon1 = () => (
    <StyledHaxagon1>
        <svg
            width="calc(80vw)"
            height="calc(80vw * 0.36)"
            viewBox="0 0 625 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 223.009V58.0126L105.058 1.99121H624V167.388L519.706 223.009H1Z"
                stroke="rgb(14, 240, 50)"
                stroke-width="2"
            />
        </svg>
    </StyledHaxagon1>
);

const TitleDiv = styled.div`
    position: absolute;
    left: 32px;
    bottom: 64px;
`;
const TitleText = styled.h1`
    line-height: 0.92;
    font-size: min(13vh, 13vw);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #0ef032;
`;
const InfoText = styled.div`
    font-weight: 500;
    color: #0ef032;
    font-size: max(24px, min(4vh, 4vw));
    line-height: 1.3;
    margin-top: 16px;
    font-family: "Pretendard-Regular";
`;
const Title = () => (
    <TitleDiv>
        <TitleText>
            2023
            <br />
            SBLD
            <br />
            Conference
        </TitleText>
        <InfoText>
            2023. 4. 8. (토)
            <br />
            마루180 이벤트홀
        </InfoText>
    </TitleDiv>
);

const StyledSubTitle = styled.div`
    position: absolute;
    right: 32px;
    top: 64px;
`;
const SubTitleText = styled.div`
    line-height: 1.3;
    font-size: min(8vh, 8vw);
    font-family: "Pretendard-Regular";
    font-weight: 800;
    color: #0ef032;
    text-align: right;
`;

const SubTitle = () => (
    <StyledSubTitle>
        <SubTitleText>
            안드로이드와
            <br />더 친해지기 위한
            <br />첫 번째 공간
        </SubTitleText>
    </StyledSubTitle>
);

const Divver = styled.div`
    height: 100vh;
    padding: 0px 32px;
    position: relative;
    width: 100%;
`;

// Menu
const Menu = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    text-align: center;
    color: #30f950;
    font-size: 12px;
    z-index: 100;
`;

const MenuIcon = styled.div`
    cursor: pointer;
    margin-right: 0px;
    position: absolute;
    top: 0px;
    right: 0px;
    backdrop-filter: blur(4px);
`;
const MenuOverlay = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: #111211;
    border: solid 1px #0ef032;
    padding: 12px 8px;
    padding-top: 28px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 16px;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    animation: fadeIn 0.3s ease-out forwards;
`;
const MenuOverlayRow = styled.a`
    font-size: 16px;
    color: #0ef032;
    text-decoration: none;

    width: fit-content;
    margin: 0 auto;
    padding-bottom: 4px;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px
        no-repeat;
    transition: 0.5s;
    &:hover {
        --d: 100%;
    }
`;
const MenuOverlayClose = styled.a`
    position: absolute;
    right: 1px;
    top: 1px;
    z-index: 101;
    border-left: solid 1px #0ef032;
    border-bottom: solid 1px #0ef032;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    animation: fadeIn 0.3s ease-out forwards;
`;
const MenuFullOverlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    z-index: 100;
`;
const MenuLogoDiv = styled.div`
    height: 32px;
    display: flex;
`;
const MenuLogo = styled.img`
    height: 32px;
`;
function MainMenuMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu className="menu">
            <MenuIcon onClick={() => setIsOpen(!isOpen)}>
                <svg
                    width="36"
                    height="32"
                    viewBox="0 0 36 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="35"
                        height="31"
                        fill="rgba(17, 18, 17, 0.5)"
                        stroke="#0EF032"
                        style={{ backdropFilter: "blur(4px)" }}
                    />
                    <path
                        d="M11 15.8334C10.5858 15.8334 10.25 16.1692 10.25 16.5834C10.25 16.9976 10.5858 17.3334 11 17.3334V15.8334ZM25 17.3334C25.4142 17.3334 25.75 16.9976 25.75 16.5834C25.75 16.1692 25.4142 15.8334 25 15.8334V17.3334ZM11 20.5001C10.5858 20.5001 10.25 20.8359 10.25 21.2501C10.25 21.6643 10.5858 22.0001 11 22.0001V20.5001ZM25 22.0001C25.4142 22.0001 25.75 21.6643 25.75 21.2501C25.75 20.8359 25.4142 20.5001 25 20.5001V22.0001ZM11 11.1667C10.5858 11.1667 10.25 11.5025 10.25 11.9167C10.25 12.331 10.5858 12.6667 11 12.6667V11.1667ZM25 12.6667C25.4142 12.6667 25.75 12.331 25.75 11.9167C25.75 11.5025 25.4142 11.1667 25 11.1667V12.6667ZM11 17.3334H25V15.8334H11V17.3334ZM11 22.0001H25V20.5001H11V22.0001ZM11 12.6667H25V11.1667H11V12.6667Z"
                        fill="#0EF032"
                    />
                </svg>
            </MenuIcon>

            {isOpen && (
                <>
                    <MenuFullOverlay onClick={() => setIsOpen(false)} />
                    <MenuOverlayClose onClick={() => setIsOpen(false)}>
                        <svg
                            width="36"
                            height="32"
                            viewBox="0 0 36 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="36" height="32" fill="#111211" />
                            <path
                                d="M11.6362 21.3031C11.3433 21.596 11.3433 22.0709 11.6362 22.3637C11.9291 22.6566 12.4039 22.6566 12.6968 22.3637L11.6362 21.3031ZM18.5302 16.5304C18.8231 16.2375 18.8231 15.7626 18.5302 15.4698C18.2373 15.1769 17.7624 15.1769 17.4695 15.4698L18.5302 16.5304ZM17.4695 15.4698C17.1766 15.7626 17.1766 16.2375 17.4695 16.5304C17.7624 16.8233 18.2373 16.8233 18.5302 16.5304L17.4695 15.4698ZM24.3635 10.6971C24.6564 10.4042 24.6564 9.92931 24.3635 9.63642C24.0706 9.34352 23.5957 9.34352 23.3028 9.63642L24.3635 10.6971ZM18.5302 15.4698C18.2373 15.1769 17.7624 15.1769 17.4695 15.4698C17.1766 15.7626 17.1766 16.2375 17.4695 16.5304L18.5302 15.4698ZM23.3028 22.3637C23.5957 22.6566 24.0706 22.6566 24.3635 22.3637C24.6564 22.0709 24.6564 21.596 24.3635 21.3031L23.3028 22.3637ZM17.4695 16.5304C17.7624 16.8233 18.2373 16.8233 18.5302 16.5304C18.8231 16.2375 18.8231 15.7626 18.5302 15.4698L17.4695 16.5304ZM12.6968 9.63642C12.4039 9.34352 11.9291 9.34352 11.6362 9.63642C11.3433 9.92931 11.3433 10.4042 11.6362 10.6971L12.6968 9.63642ZM12.6968 22.3637L18.5302 16.5304L17.4695 15.4698L11.6362 21.3031L12.6968 22.3637ZM18.5302 16.5304L24.3635 10.6971L23.3028 9.63642L17.4695 15.4698L18.5302 16.5304ZM17.4695 16.5304L23.3028 22.3637L24.3635 21.3031L18.5302 15.4698L17.4695 16.5304ZM18.5302 15.4698L12.6968 9.63642L11.6362 10.6971L17.4695 16.5304L18.5302 15.4698Z"
                                fill="#0EF032"
                            />
                        </svg>
                    </MenuOverlayClose>

                    <MenuOverlay>
                        <MenuOverlayRow
                            href="#info"
                            onClick={() => setIsOpen(false)}
                        >
                            컨퍼런스 설명
                        </MenuOverlayRow>
                        <MenuOverlayRow
                            href="#speaker"
                            onClick={() => setIsOpen(false)}
                        >
                            연사 소개
                        </MenuOverlayRow>
                        <MenuOverlayRow
                            href="#schedule"
                            onClick={() => setIsOpen(false)}
                        >
                            스케쥴
                        </MenuOverlayRow>
                        <MenuOverlayRow
                            href="#detail"
                            onClick={() => setIsOpen(false)}
                        >
                            장소와 일시
                        </MenuOverlayRow>
                        <MenuLogoDiv>
                            <MenuLogo src="/assets/logo_large.png" />
                        </MenuLogoDiv>
                    </MenuOverlay>
                </>
            )}
        </Menu>
    );
}
export function MainHeroMobile() {
    return (
        <Divver>
            <Copy>© SungbinLand. 2023 All rights reserved.</Copy>
            <MainMenuMobile />
            <Haxagon1 />
            <Title />
            <SubTitle />
        </Divver>
    );
}
