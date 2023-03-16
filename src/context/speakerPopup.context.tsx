import { createContext, useState } from "react";
import { Flex } from "../components/flex";
import { SpeakerPopup } from "../components/speakerPopup/speakerPopup";

export type SpeakerName = "이기정" | "윤희성" | "이정욱" | "최우성" | "류기민";

export interface SpeakerPopupContextProps {
    openPopup: (name: SpeakerName) => void;
    closePopup: (name: SpeakerName) => void;
}

export const SpeakerPopupContext = createContext<SpeakerPopupContextProps>({
    closePopup: () => null,
    openPopup: () => null,
});

export function SpeakerPopupContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showedSpeaker, setShowedSpeaker] = useState<SpeakerName[]>([]);

    const openPopup = (name: SpeakerName) => {
        setShowedSpeaker((e) => (e.includes(name) ? e : [...e, name]));
    };

    const closePopup = (name: SpeakerName) => {
        setShowedSpeaker((e) =>
            e.includes(name) ? e.filter((i) => i !== name) : e
        );
    };

    return (
        <SpeakerPopupContext.Provider
            value={{
                openPopup,
                closePopup,
            }}
        >
            {children}

            {showedSpeaker.includes("이기정") && (
                <SpeakerPopup
                    speaker={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    VOD, 라이브 스트리밍을 위한 플레이어를
                                    신규로 개발하는 과정에서 봉착한 난관, 그리고
                                    빠른 시간 안에 명확한 상태 추적을 할 수
                                    있도록 UDA를 적용하여 관리할 수 있는 구조로
                                    개선한 적용기를 공유합니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/이기정.png",
                        name: "이기정",
                    }}
                />
            )}

            {showedSpeaker.includes("윤희성") && (
                <SpeakerPopup
                    speaker={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    안드로이드 프레임워크에서 Context가 무엇인지
                                    AOSP 소스 코드를 통해서 알아보는 시간을
                                    가지고자 합니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/윤희성.png",
                        name: "윤희성",
                    }}
                />
            )}

            {showedSpeaker.includes("이정욱") && (
                <SpeakerPopup
                    speaker={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    이직 시 고려해야 될 사항들, 나와 잘 맞는
                                    회사 고르는 법(신입, 주니어)을 공유합니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/이정욱.png",
                        name: "이정욱",
                    }}
                />
            )}

            {showedSpeaker.includes("최우성") && (
                <SpeakerPopup
                    speaker={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    눈 내리는 화면이나 파도치는 인터렉션을
                                    디자이너한테 맡기는 게 아니라 직접 구현해
                                    보고 싶지 않으신가요? 이런 재밌는 인터렉션을
                                    내 손으로 구현해 보고 싶으신 분들을 위해
                                    준비했습니다.
                                </p>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/최우성.png",
                        name: "최우성",
                    }}
                />
            )}

            {showedSpeaker.includes("류기민") && (
                <SpeakerPopup
                    speaker={{
                        description: (
                            <Flex.Column gap="8px">
                                <p>
                                    제 발표는 Jetpack Compose 도입을 검토 중인
                                    리더 분들과 Jetpack Compose를 배우면 도움이
                                    될지 고민 중이신 안드로이드 신입분께 도움이
                                    될 거 같습니다.
                                </p>
                                <p> 대략 아래와 같은 구조로 준비하였습니다.</p>

                                <Flex.Column
                                    gap="4px"
                                    style={{
                                        fontFamily: "Pretendard-Bold",
                                        marginTop: "8px",
                                    }}
                                >
                                    <p>* Compose 적용 의사결정 과정</p>
                                    <p>* 팀원들의 Compose 학습 과정</p>
                                    <p>* Compose 적용 희망 편</p>
                                    <p>* Compose 적용 절망 편</p>
                                    <p>* 시간을 돌린다면?</p>
                                </Flex.Column>
                            </Flex.Column>
                        ),
                        imageUrl: "/assets/류기민.png",
                        name: "류기민",
                    }}
                />
            )}
        </SpeakerPopupContext.Provider>
    );
}
