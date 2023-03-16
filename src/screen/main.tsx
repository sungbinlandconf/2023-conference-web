import styled from "styled-components";
import { Flex } from "../components/flex";
import { SpeakerPopup } from "../components/speakerPopup/speakerPopup";
import { SpeakerPopupContextProvider } from "../context/speakerPopup.context";
import { SponsorPopupContextProvider } from "../context/sponsorPopup.context";
import { MainCopyright } from "./main/copyright";
import { MainDetail } from "./main/detail";
import { MainFooter } from "./main/footer";
import { MainHero } from "./main/hero";
import { MainInfo } from "./main/info";
import { MainSchedule } from "./main/schedule";
import { MainSpeaker } from "./main/speaker";
import { MainSponsor } from "./main/sponsor";

export function MainScreen() {
    return (
        <Flex.Column>
            <SpeakerPopupContextProvider>
                <SponsorPopupContextProvider>
                    <MainHero />
                    <MainInfo />
                    <MainSpeaker />
                    <MainSchedule />
                    <MainDetail />
                    <MainSponsor />
                    <MainFooter />
                    <MainCopyright />
                </SponsorPopupContextProvider>
            </SpeakerPopupContextProvider>
        </Flex.Column>
    );
}
