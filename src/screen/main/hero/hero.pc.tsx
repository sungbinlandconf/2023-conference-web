import { useEffect, useState } from "react";
import styled from "styled-components";

const Copy = styled.div`
    width: 100vw;
    position: absolute;
    top: 16px;
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
    top: calc(50vh - 25vw * 0.36 / 2);
    left: calc(50vw - 25vw / 2);
`;
const Dot = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 4px;
    background-color: #30f950;
    position: absolute;
`;
const Haxagon1 = () => (
    <StyledHaxagon1>
        <svg
            width="calc(25vw)"
            height="calc(25vw * 0.36)"
            viewBox="0 0 625 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 223.009V58.0126L105.058 1.99121H624V167.388L519.706 223.009H1Z"
                stroke="#0EF032"
                stroke-width="2"
            />
        </svg>
        <Dot
            style={{
                bottom: `30px`,
                left: `30px`,
            }}
        />
        <Dot
            style={{
                top: `30px`,
                right: `30px`,
            }}
        />
    </StyledHaxagon1>
);

const Haxagon2Margin = {
    width: "80px",
    height: "80px",
};
// 비율: 0.36
const StyledHaxagon2 = styled.div`
    display: flex;
    position: absolute;
    top: calc(50vh - (100vh - ${Haxagon2Margin.height}) / 2);
    left: calc(50vw - (100vw - ${Haxagon2Margin.width}) / 2);
`;
const Haxagon2 = () => (
    <StyledHaxagon2>
        <svg
            width={`calc(100vw - ${Haxagon2Margin.width})`}
            height={`calc(100vh - ${Haxagon2Margin.height})`}
            viewBox="0 0 2277 1342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                d="M1 1341V206.288L382.081 1H2276V1137.18L1894.05 1341H1Z"
                stroke="#0EF032"
                stroke-width="2"
            />
        </svg>
    </StyledHaxagon2>
);

const TitleDiv = styled.div`
    position: absolute;
    left: 96px;
    bottom: 96px;
`;
const TitleText = styled.h1`
    line-height: 1;
    font-size: min(14vh, 10vw);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #0ef032;
`;
const InfoText = styled.div`
    font-family: "Poppins";
    font-weight: 500;
    color: #0ef032;
    font-size: min(4vh, 4vw);
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
            마루100이벤트홀
        </InfoText>
    </TitleDiv>
);

const StyledSubTitle = styled.div`
    position: absolute;
    right: 96px;
    top: 96px;
`;
const SubTitleText = styled.div`
    line-height: 1.3;
    font-size: min(8vh, 6vw);
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
    top: 16px;
    right: 0px;
    text-align: center;
    color: #30f950;
    font-size: 12px;
    z-index: 100;

    @media (max-width: 767px) {
        display: none;
    }
`;

const MenuText = styled.div<{ isTop: boolean }>`
    cursor: pointer;
    margin-right: 32px;
    position: absolute;
    top: 0px;
    right: 0px;
    font-family: "Poppins", sans-serif;

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

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0px);
        }
        to {
            opacity: 0;
            transform: translateY(-8px);
        }
    }

    ${(props) => props.isTop && `animation: fadeIn 0.5s 0.3s ease-out both;`}
    ${(props) => !props.isTop && `animation: fadeOut 0.5s ease-out forwards;`}
`;
const MenuIcon = styled.div<{ isTop: boolean }>`
    cursor: pointer;
    margin-right: 25px;
    position: absolute;
    top: 0px;
    right: 0px;
    backdrop-filter: blur(4px);

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

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0px);
        }
        to {
            opacity: 0;
            transform: translateY(-8px);
        }
    }

    ${(props) => !props.isTop && `animation: fadeIn 0.5s 0.3s ease-out both;`}
    ${(props) => props.isTop && `animation: fadeOut 0.5s ease-out forwards;`}
`;
const MenuOverlay = styled.div`
    position: absolute;
    right: 16px;
    top: 0px;
    background-color: #111211;
    border: solid 1px #0ef032;
    padding: 16px 0px;
    padding-top: 32px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    width: 240px;
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
    &:hover {
        text-decoration: underline;
    }
`;

const MenuLogoDiv = styled.div`
    height: 32px;
    display: flex;
    padding-left: 20px;
`;
const MenuLogo = styled.img`
    height: 32px;
`;
const MenuFullOverlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    z-index: 100;
`;
function MainMenuPc() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTop, setIsTop] = useState(false);

    useEffect(() => {
        const scrollEvent = () => {
            setIsTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return (
        <Menu className="menu">
            <MenuText onClick={() => setIsOpen(!isOpen)} isTop={isTop}>
                Menu
            </MenuText>

            <MenuIcon onClick={() => setIsOpen(!isOpen)} isTop={isTop}>
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

export function MainHeroPc() {
    return (
        <Divver>
            <Copy>© SungbinLand. 2023 All rights reserved.</Copy>
            <MainMenuPc />
            <Haxagon1 />
            <Haxagon2 />
            <Title />
            <SubTitle />
        </Divver>
    );
}
