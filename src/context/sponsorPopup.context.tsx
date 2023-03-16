import { createContext, useState } from "react";
import { Flex } from "../components/flex";
import { SponsorPopup } from "../components/sponsorPopup/speakerPopup";

export type SponsorName = "패스트캠퍼스" | "한빛미디어" | "아이엠" | "제이펍";

export interface SponsorPopupContextProps {
    openPopup: (name: SponsorName) => void;
    closePopup: (name: SponsorName) => void;
}

export const SponsorPopupContext = createContext<SponsorPopupContextProps>({
    closePopup: () => null,
    openPopup: () => null,
});

export function SponsorPopupContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showedSponsor, setShowedSponsor] = useState<SponsorName[]>([]);

    const openPopup = (name: SponsorName) => {
        setShowedSponsor((e) => (e.includes(name) ? e : [...e, name]));
    };

    const closePopup = (name: SponsorName) => {
        setShowedSponsor((e) =>
            e.includes(name) ? e.filter((i) => i !== name) : e
        );
    };

    return (
        <SponsorPopupContext.Provider
            value={{
                openPopup,
                closePopup,
            }}
        >
            {children}

            {showedSponsor.includes("패스트캠퍼스") && (
                <SponsorPopup
                    sponsor={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    패스트캠퍼스는 “Life-changing
                                    Education”이라는 목표를 가지고 성인,
                                    직장인에게 미래 가치가 높은 교육 콘텐츠를
                                    가능한 모든 방식으로 제공하는, 국내 최초이자
                                    유일한 풀스택 교육 회사 입니다.
                                    <br />
                                    <br />
                                    패스트캠퍼스와 함께 시장을 선도하는, 그리고
                                    누군가의 인생을 바꿀 수 있는 교육 콘텐츠를
                                    만들어갈 개발자 여러분을 기다리고 있습니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/패스트캠퍼스.png",
                        name: "패스트캠퍼스",
                    }}
                />
            )}

            {showedSponsor.includes("아이엠") && (
                <SponsorPopup
                    sponsor={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    아이엠 영양제(IAM__)는 빅데이터를 기반으로
                                    나에게 꼭 맞는 영양제를 추천하며, 한 달
                                    주기로 나의 맞춤 영양제가 배송되는 영양제
                                    구독 서비스입니다.
                                    <br />
                                    <br /> 100% 식약처 인정 기능 성분의
                                    건강기능식품이며, 세계 프리미엄 원산지의
                                    엄선된 원료를 사용하여 믿을 수 있습니다.
                                    <br />
                                    <br /> 영양제 조합부터, 섭취 알림, 배송까지!
                                    알아서 다 챙겨주는 아이엠 영양제를 통해
                                    건강을 먹고, 건강을 잊어보세요. 우리는
                                    건강할 때 가장 자유롭습니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/아이엠.png",
                        name: "아이엠",
                    }}
                />
            )}

            {showedSponsor.includes("제이펍") && (
                <SponsorPopup
                    sponsor={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    제이펍은 2009년 4월에 첫 책을 시작으로
                                    현재까지 프로그래밍 전문서부터 그래픽,
                                    오피스, 모바일 실용서까지 500여 종 가까운
                                    서적을 출판한 IT 전문 출판사입니다. <br />
                                    <br /> 이제는 파란의자, 머메이드, C612,
                                    여림재 등의 브랜드 출판사를 통해 우리의 삶을
                                    더 풍요롭게 해줄 다양한 취미 서적도 출판하려
                                    합니다. <br />
                                    <br />
                                    파란의자는 어린이와 청소년 대상의 책,
                                    머메이드는 여성 독자를 대상으로 하는
                                    자기계발서와 에세이, C612는 세상에 소개할
                                    만한 콘텐츠 혹은 직원들이 직접 기획하여
                                    만드는 단행본, 여림재는 ‘세상에 없었던,
                                    세상에 꼭 필요한’ 책을 만들 계획입니다.
                                    <br />
                                    <br />
                                    독자들이 필요한 책을 제때, 완벽하게 펴내려는
                                    일에 정성을 다하는 직원들이 있으며, 이들을
                                    위해 회사는 스트레스 없이 근무할 수 있는
                                    환경을 제공하기 위해 애쓰고 있습니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/제이펍.png",
                        name: "제이펍",
                    }}
                />
            )}

            {showedSponsor.includes("한빛미디어") && (
                <SponsorPopup
                    sponsor={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    한빛미디어(주)는 ‘책으로 여는 IT 세상’을
                                    만들어 갑니다.
                                    <br />
                                    <br />
                                    IT 세상의 주역은 ‘우리’ 입니다.
                                    한빛미디어(주)는 우리 시대의 주역들을 위한
                                    프로그래밍, 컴퓨터공학, IT 에세이,
                                    리얼타임(전자책)과 일반 사용자를 위한 OA,
                                    그래픽 등 IT 활용서, 그리고 나와 내 아이를
                                    위한 실용서 등 다양한 분야의 책으로 여러분과
                                    함께 그리는 멋진 미래를 꿈꿉니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/한빛미디어.png",
                        name: "한빛미디어",
                    }}
                />
            )}
        </SponsorPopupContext.Provider>
    );
}
