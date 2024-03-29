// Sponsor 업데이트

import React, { useContext } from "react";
import styled from "styled-components";
import { View } from "../../components/view";
import { SponsorPopupContext } from "../../context/sponsorPopup.context";
import { WEB_VAR } from "../../setting/setting";
import { SPONSORS } from "../../setting/sponsor";

const Divver = styled.div`
    max-width: ${WEB_VAR.pageWidth};
    width: 100%;
    padding: 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        justify-content: start;
        margin-top: 96px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin-top: 64px;
    gap: 32px;
    row-gap: 32px;

    @media (max-width: 767px) {
        gap: 12px;
        row-gap: 6px;
        justify-content: stretch;
        margin-top: 20px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Title = styled.div`
    color: #0ef032;
    font-weight: 700;
    font-size: 20px;
    font-family: "Pretendard-Bold";
    height: 100%;
    display: flex;
    align-items: center;
`;

const Sponsor = styled.img`
    width: 100%;
    height: 46px;
    object-fit: contain;
`;

export function MainSponsor() {
    const sponsorPopup = useContext(SponsorPopupContext);

    return (
        <Divver>
            <View.Pc>
                <Grid>
                    <Title>Sponsor</Title>
                    {SPONSORS.map((e, i) => {
                        if (SPONSORS.length < 4 && i === 0) {
                            return (
                                <React.Fragment key={i}>
                                    {Array(4 - SPONSORS.length)
                                        .fill(true)
                                        .map((e) => (
                                            <div />
                                        ))}
                                    <Sponsor
                                        src={e.image}
                                        onClick={() => {
                                            sponsorPopup.openPopup(
                                                e.name as any
                                            );
                                        }}
                                    />
                                </React.Fragment>
                            );
                        }
                        return (
                            <Sponsor
                                src={e.image}
                                onClick={() => {
                                    sponsorPopup.openPopup(e.name as any);
                                }}
                            />
                        );
                    })}
                </Grid>
            </View.Pc>
            <View.Mobile>
                <Title>Sponsor</Title>
                <Grid>
                    {SPONSORS.map((e) => (
                        <Sponsor
                            key={e.name}
                            src={e.image}
                            onClick={() => {
                                sponsorPopup.openPopup(e.name as any);
                            }}
                        />
                    ))}
                </Grid>
            </View.Mobile>
        </Divver>
    );
}
