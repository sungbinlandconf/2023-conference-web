import styled from "styled-components";
import { Flex } from "../../components/flex";
import { WEB_VAR } from "../../setting/setting";

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
    }
`;

const Label = styled.div`
    font-size: 16px;
    color: #0ef032;
    font-weight: 700;
`;
const Text1 = styled.div`
    font-size: 40px;
    color: #0ef032;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Text2 = styled.div`
    font-size: 36px;
    color: #0ef032;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
`;
const TextA = styled.a`
    font-size: 36px;
    color: #0ef032;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;

    width: fit-content;
    text-decoration: none;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 2px
        no-repeat;
    transition: 0.5s;
    &:hover {
        --d: 100%;
    }
`;

const Map = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    background-blend-mode: luminosity;
    background-color: #0ef032;
    height: 336px;
    aspect-ratio: 60/49;
    object-fit: cover;

    @media (max-width: 767px) {
        margin-top: 32px;
        width: 100%;
    }
`;

const MapDiv = styled.div`
    display: flex;
    height: 424px;
    width: 336px;

    @media (max-width: 767px) {
        margin-top: 32px;
        width: 100%;
    }
`;

export function MainDetail() {
    return (
        <Divver id="detail">
            <Flex.Column gap="32px">
                <Flex.Column gap="4px">
                    <Label>일시</Label>
                    <Text1>
                        <span
                            style={{
                                fontFamily: '"Poppins", sans-serif',
                            }}
                        >
                            2023. 4. 8.
                        </span>{" "}
                        (토) 13:00
                    </Text1>
                </Flex.Column>

                <Flex.Column gap="4px">
                    <Label>장소</Label>
                    <Text2>
                        서울 강남구 역삼로 180,
                        <br />
                        마루180 이벤트홀
                    </Text2>
                </Flex.Column>

                <Flex.Column gap="4px">
                    <Label>참여 방법</Label>
                    <TextA
                        href="https://festa.io/events/3117"
                        target={"_blank"}
                    >
                        페스타 신청{" "}
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 12C24.5523 12 25 11.5523 25 11C25 10.4477 24.5523 10 24 10V12ZM39 25C39 24.4477 38.5523 24 38 24C37.4477 24 37 24.4477 37 25H39ZM38 12C38.5523 12 39 11.5523 39 11C39 10.4477 38.5523 10 38 10V12ZM29.824 10C29.2717 10 28.824 10.4477 28.824 11C28.824 11.5523 29.2717 12 29.824 12V10ZM39 11C39 10.4477 38.5523 10 38 10C37.4477 10 37 10.4477 37 11H39ZM37 19.282C37 19.8343 37.4477 20.282 38 20.282C38.5523 20.282 39 19.8343 39 19.282H37ZM38.7071 11.7071C39.0976 11.3166 39.0976 10.6834 38.7071 10.2929C38.3166 9.90237 37.6834 9.90237 37.2929 10.2929L38.7071 11.7071ZM23.2929 24.2929C22.9024 24.6834 22.9024 25.3166 23.2929 25.7071C23.6834 26.0976 24.3166 26.0976 24.7071 25.7071L23.2929 24.2929ZM24 10H18V12H24V10ZM18 10C13.0294 10 9 14.0294 9 19H11C11 15.134 14.134 12 18 12V10ZM9 19V31H11V19H9ZM9 31C9 35.9706 13.0294 40 18 40V38C14.134 38 11 34.866 11 31H9ZM18 40H30V38H18V40ZM30 40C34.9706 40 39 35.9706 39 31H37C37 34.866 33.866 38 30 38V40ZM39 31V25H37V31H39ZM38 10H29.824V12H38V10ZM37 11V19.282H39V11H37ZM37.2929 10.2929L23.2929 24.2929L24.7071 25.7071L38.7071 11.7071L37.2929 10.2929Z"
                                fill="#0EF032"
                            />
                        </svg>
                    </TextA>
                </Flex.Column>
            </Flex.Column>

            {/* <a
                href="https://maru.org/eventhall?page=1&limit=8"
                target={"_blank"}
                rel="noreferrer"
                style={{
                    display: "block",
                    maxHeight: "300px",
                }}
            >
                <Map src="/assets/map.png" />
            </a> */}

            <MapDiv>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5297477359654!2d127.03665751567836!3d37.49542203595464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca154dd9258e5%3A0xe0888095de7a04b0!2sMARU%20180!5e0!3m2!1sko!2skr!4v1678609426812!5m2!1sko!2skr"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="구글 지도"
                    width={"100%"}
                ></iframe>
            </MapDiv>
        </Divver>
    );
}
