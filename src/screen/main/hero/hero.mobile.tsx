import styled from "styled-components";

const Copy = styled.div`
    width: 100vw;
    position: absolute;
    top: 8px;
    left: 0;
    text-align: center;
    color: #30f950;
    font-size: 12px;
`;

// 비율: 0.36
const StyledHaxagon1 = styled.div`
    display: flex;
    position: absolute;
    top: calc(50vh - 80vw * 0.36 / 2);
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
                stroke="#0EF032"
                stroke-width="2"
            />
        </svg>
    </StyledHaxagon1>
);

const TitleDiv = styled.div`
    position: absolute;
    left: 32px;
    bottom: 32px;
`;
const TitleText = styled.h1`
    line-height: 1;
    font-size: min(60px, 13vw);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #0ef032;
`;
const InfoText = styled.div`
    font-family: "Poppins";
    font-weight: 500;
    color: #0ef032;
    font-size: min(32px, 6vw);
    margin-top: 16px;
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
    right: 32px;
    top: 64px;
`;
const SubTitleText = styled.div`
    line-height: 1.3;
    font-size: min(72px, 12vw);
    font-family: "Poppins", sans-serif;
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
export function MainHeroMobile() {
    return (
        <Divver>
            <Copy>© SungbinLand. 2023 All rights reserved.</Copy>
            <Haxagon1 />
            <Title />
            <SubTitle />
        </Divver>
    );
}
