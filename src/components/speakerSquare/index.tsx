import styled from "styled-components";

const StyledBlackTriangle = styled.div`
    position: absolute;
    left: 0;
    height: 0;
`;
const BlackTriangle = () => (
    <StyledBlackTriangle>
        <svg
            width="46"
            height="22"
            viewBox="0 0 46 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M46 0L0 22V0H46Z" fill="#111211" />
        </svg>{" "}
    </StyledBlackTriangle>
);

const Square1 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 225px;
    width: 100vw;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(19, 243, 55, 0.5) 40%,
        rgba(19, 243, 55, 0.5) 60%,
        rgba(0, 0, 0, 0.4) 100%
    );
    background-size: 200% auto;
    animation: liner 10s infinite linear;

    @keyframes liner {
        0% {
            background-position: 200% center;
        }
        100% {
            background-position: 0% center;
        }
    }
`;
const Square2 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 225px;
    width: 100vw;
    background: linear-gradient(
        90deg,
        rgba(19, 243, 55, 1) 0%,
        rgba(19, 243, 55, 0) 96.37%
    );
`;

const Divver = styled.div`
    width: 250px;
    height: 250px;
    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`;

export function SpeakerSquare() {
    return (
        <Divver>
            <Square2 />
            <Square1 />
            <BlackTriangle />
        </Divver>
    );
}
