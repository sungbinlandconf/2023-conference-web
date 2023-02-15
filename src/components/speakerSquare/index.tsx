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

const Square = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 225px;
    width: 100vw;
    background: linear-gradient(90deg, #13f337 0%, rgba(19, 243, 55, 0) 96.37%);
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
            <Square />
            <BlackTriangle />
        </Divver>
    );
}
