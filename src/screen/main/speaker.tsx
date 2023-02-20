import styled from "styled-components";
import { Speaker } from "../../components/speaker";
import { SpeakerSquare } from "../../components/speakerSquare";
import { View } from "../../components/view";
import { WEB_VAR } from "../../setting/setting";

const Outer = styled.div`
    width: 100%;
    position: relative;
`;

const StarDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    user-select: none;
    z-index: -1;
`;
const StarImg = styled.img`
    display: block;
    height: 1500px;
`;

const Divver = styled.div`
    max-width: ${WEB_VAR.pageWidth};
    width: 100%;
    margin: 0 auto;
    padding: 16px;
    margin-top: 48px;

    @media (max-width: 767px) {
        width: 100%;
        margin-top: 0px;
    }
`;

const Title = styled.h2`
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 500;
    color: #0ef032;
    line-height: 1.3;
`;

const Speakers = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, auto));
    gap: 48px;
    margin-top: 64px;

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, minmax(300px, auto));
        margin-top: 32px;
    }
`;

export function MainSpeaker() {
    return (
        <Outer id="speaker">
            <View.Pc>
                <StarDiv>
                    <StarImg src="/assets/stars.png" />
                </StarDiv>
            </View.Pc>
            <Divver>
                <Title>
                    2023 성빈랜드 컨퍼런스는
                    <br />
                    다섯 분의 연사님들과 함께 합니다
                </Title>
                <Speakers>
                    <Speaker
                        speaker={{
                            name: "이기정",
                            description:
                                "UDA를 사용하는 이점 중 하나는 상태 추적이 명확하고 쉬워짐입니다. 신규 서비스를 개발하면서 UDA를 적용하게 된 결정 과정과 적용 후 어떤 개선이 있었는지 이기정 님이 공유합니다.",
                            image: "/assets/이기정.png",
                            sessionNumber: 1,
                            title: (
                                <>
                                    쿠팡플레이 플레이어
                                    <br />
                                    UDA 적용기
                                </>
                            ),
                            link: "https://app.sli.do/event/5LUj2QngkAStUzhMHrkuyk",
                        }}
                    />
                    <Speaker
                        speaker={{
                            name: "윤희성",
                            description:
                                "우리는 매번 Context를 사용합니다. 하지만 Context가 어떻게 구현되고 작동하는지는 자세히 알지 못합니다. 윤희성 님이 Context의 비밀을 밝혀줍니다.",
                            image: "/assets/윤희성.png",
                            sessionNumber: 2,
                            title: (
                                <>
                                    소스코드로 알아보는
                                    <br />
                                    안드로이드 Context
                                </>
                            ),
                            link: "https://app.sli.do/event/wRyskK1WGmXeEmE4fJZ3nh",
                        }}
                    />
                    <Speaker
                        speaker={{
                            name: "이정욱",
                            description:
                                "나에게 맞는 회사 찾기란 사막에서 오아시스 찾기와 동일합니다. 여러 번의 이직 후 얻은 깨달음을 이정욱 님이 공유합니다.",
                            image: "/assets/이정욱.png",
                            sessionNumber: 3,
                            title: "이직! 그거 어떻게 하는 건데?",
                            link: "https://app.sli.do/event/j5aWrmokbzFUQYMAcbsBWT",
                        }}
                    />
                    <Speaker
                        speaker={{
                            name: "최우성",
                            description:
                                "Compose로 얻을 수 있는 큰 장점 중 하나는 다양한 인터렉션을 구현하기 정말 쉬워졌다는 점 입니다. Canvas를 이용해 화려하고 재밌는 인터렉션을 쉽게 구현하는 방법을 최우성 님이 소개합니다.",
                            image: "/assets/최우성.png",
                            sessionNumber: 4,
                            title: (
                                <>
                                    Compose Canvas로
                                    <br />
                                    예쁜 인터렉션 구현하기!
                                </>
                            ),
                            link: "https://app.sli.do/event/oPcNosVFb4a72TZLvXwF4a",
                        }}
                    />
                    <Speaker
                        speaker={{
                            name: "류기민",
                            description:
                                "Compose는 세상에 알려진 지 2년이 지나가고 있습니다. 다양한 기업들이 Compose를 채택하고 있고, 기민 님의 회사도 마찬가지입니다. 류기민 님은 Compose가 Stable이 되기 전부터 실무에 적용하셨고, 오랫동안 Compose를 써오시면서 느낀 점을 공유합니다.",
                            image: "/assets/류기민.png",
                            sessionNumber: 5,
                            title: (
                                <>
                                    Compose 정식 출시보다 앞섰던
                                    <br />
                                    Compose 적용기
                                </>
                            ),
                            link: "https://app.sli.do/event/ouAL6hcVKjowiR7YvMPLZY",
                        }}
                    />
                    <SpeakerSquare />
                </Speakers>
            </Divver>
        </Outer>
    );
}
