import styled from "styled-components";

const StyledBlackTriangle = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 31px;
`;
const BlackTriangle = () => (
    <StyledBlackTriangle>
        <svg
            width="38"
            height="31"
            viewBox="0 0 38 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M38 0L0.5 31H38V0Z" fill="#111211" />
        </svg>
    </StyledBlackTriangle>
);

const Square = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 225px;
    width: 100vw;
    background: linear-gradient(
        270deg,
        #13f337 16.96%,
        rgba(19, 243, 55, 0) 99.07%
    );
`;

const Divver = styled.div`
    width: 250px;
    height: 250px;
    position: absolute;
    z-index: -1;
    top: 240px;
    right: -150px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export function ScheduleSquare() {
    return (
        <Divver>
            <Square />
            <BlackTriangle />
        </Divver>
    );
}
