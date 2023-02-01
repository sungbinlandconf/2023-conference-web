import styled from "styled-components";
import { Speaker } from "../../components/speaker";
import { SpeakerSquare } from "../../components/speakerSquare";

const Divver = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 16px;
`;

const Title = styled.h2`
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 500;
    color: #0ef032;
`;

const Speakers = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, auto));
    gap: 48px;
    margin-top: 64px;
`;

export function MainSpeaker() {
    return (
        <Divver>
            <Title>
                2023 성빈랜드 컨퍼런스는
                <br />
                다섯 분의 연사님들과 함께 합니다
            </Title>
            <Speakers>
                <Speaker
                    speaker={{
                        name: "박현우",
                        description:
                            "안드로이드 세상에 불쑥 나타난 웹 개발자. 안드로이드 세계를 지배하려 이 세계에 강림했다.",
                        image: "https://s3.hyuns.dev/hyuns.jpg",
                        sessionNumber: 1,
                        title: "안드로이드 컨퍼런스에 등장한 웹 개발자",
                        link: "https://hyuns.dev",
                    }}
                />
                <Speaker
                    speaker={{
                        name: "박현우",
                        description:
                            "안드로이드 세상에 불쑥 나타난 웹 개발자. 안드로이드 세계를 지배하려 이 세계에 강림했다.",
                        image: "https://s3.hyuns.dev/hyuns.jpg",
                        sessionNumber: 1,
                        title: "안드로이드 컨퍼런스에 등장한 웹 개발자",
                        link: "https://hyuns.dev",
                    }}
                />
                <Speaker
                    speaker={{
                        name: "박현우",
                        description:
                            "안드로이드 세상에 불쑥 나타난 웹 개발자. 안드로이드 세계를 지배하려 이 세계에 강림했다.",
                        image: "https://s3.hyuns.dev/hyuns.jpg",
                        sessionNumber: 1,
                        title: "안드로이드 컨퍼런스에 등장한 웹 개발자",
                        link: "https://hyuns.dev",
                    }}
                />
                <Speaker
                    speaker={{
                        name: "박현우",
                        description:
                            "안드로이드 세상에 불쑥 나타난 웹 개발자. 안드로이드 세계를 지배하려 이 세계에 강림했다.",
                        image: "https://s3.hyuns.dev/hyuns.jpg",
                        sessionNumber: 1,
                        title: "안드로이드 컨퍼런스에 등장한 웹 개발자",
                        link: "https://hyuns.dev",
                    }}
                />
                <Speaker
                    speaker={{
                        name: "박현우",
                        description:
                            "대각선 스타일이 너무 싫어요. 왜 HTML과 CSS는 대각선 만드는 걸 이렇게 어렵게 만든 것인가!",
                        image: "https://s3.hyuns.dev/hyuns.jpg",
                        sessionNumber: 1,
                        title: "안드로이드 컨퍼런스에 등장한 웹 개발자",
                        link: "https://hyuns.dev",
                    }}
                />
                <SpeakerSquare />
            </Speakers>
        </Divver>
    );
}
