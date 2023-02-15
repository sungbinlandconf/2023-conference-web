import styled from "styled-components";

const PcView = styled.div`
    display: block;
    @media (max-width: 767px) {
        display: none;
    }
`;

const MobileView = styled.div`
    display: none;
    @media (max-width: 767px) {
        display: block;
    }
`;

export const View = {
    Pc: PcView,
    Mobile: MobileView,
};
