import { useContext } from "react";
import styled from "styled-components";
import { SpeakerPopupContext } from "../../context/speakerPopup.context";

const StyledBackgroundImage = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 250px;
    height: 250px;
`;
const BackgroundImage = () => (
    <StyledBackgroundImage>
        <svg
            viewBox="0 0 279 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M46.3628 0L0 22.1526L0.000148423 253H241.485L279 222.135L279 0H46.3628Z"
                fill="url(#paint0_radial_17_2172)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_17_2172"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(280.812 -1.81364) rotate(137.781) scale(392.023 444.972)"
                >
                    <stop stop-color="#13F337" />
                    <stop offset="1" stop-color="#13F337" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
    </StyledBackgroundImage>
);

const Divver = styled.div`
    color: #0ef032;
    max-width: 100%;
`;
const Images = styled.div`
    position: relative;
    width: 250px;
    aspect-ratio: 1/1;
`;
const Image = styled.img`
    width: 100%;
    position: absolute;
    left: 8px;
    bottom: 30px;
    width: 190px;
    height: 190px;
    cursor: pointer;

    transform: scale(1);
    transition: 200ms;
    &:hover {
        transform: scale(1.03);
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4px;
`;
const Session = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
`;
const Title = styled.div`
    font-size: 28px;
    line-height: 36px;
    font-weight: 600;
`;
const Description = styled.div`
    font-size: 16px;
    line-height: 24px;
    max-width: 360px;
    @media (max-width: 767px) {
        max-width: 100%;
    }
`;
const Name = styled.div`
    font-size: 20px;
    line-height: 36px;
    margin-top: -4px;
    cursor: pointer;

    width: fit-content;
    text-decoration: none;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 2px
        no-repeat;
    transition: 0.5s;
    &:hover {
        --d: 100%;
    }
`;

const Link = styled.a`
    font-size: 16px;
    color: #0ef032;
    position: absolute;
    text-decoration: none;
    transform: rotate(270deg);
    right: -44px;
    top: 18px;
    font-weight: 600;
    display: flex;
    gap: 4px;

    padding-bottom: 2px;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
        no-repeat;
    transition: 0.5s;
    &:hover {
        --d: 100%;
    }
`;

const SessionDots = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    margin-left: 4px;
`;

const SessionDot = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: #0ef032;
`;

export function Speaker({
    speaker,
}: {
    speaker: {
        image: string;
        name: string;
        sessionNumber: number;
        title: React.ReactNode;
        description: string;
        link?: string;
    };
}) {
    const speakerPopup = useContext(SpeakerPopupContext);

    return (
        <Divver>
            <Images>
                <BackgroundImage />
                <Image
                    src={speaker.image}
                    onClick={() => speakerPopup.openPopup(speaker.name as any)}
                />
                <Link href={speaker.link} target="_blank">
                    slido
                    <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 2.5C8.55228 2.5 9 2.05228 9 1.5C9 0.947715 8.55228 0.5 8 0.5V2.5ZM16 8.5C16 7.94772 15.5523 7.5 15 7.5C14.4477 7.5 14 7.94772 14 8.5H16ZM15 2.5C15.5523 2.5 16 2.05228 16 1.5C16 0.947715 15.5523 0.5 15 0.5V2.5ZM10.912 0.5C10.3597 0.5 9.912 0.947715 9.912 1.5C9.912 2.05228 10.3597 2.5 10.912 2.5V0.5ZM16 1.5C16 0.947715 15.5523 0.5 15 0.5C14.4477 0.5 14 0.947715 14 1.5H16ZM14 5.641C14 6.19328 14.4477 6.641 15 6.641C15.5523 6.641 16 6.19328 16 5.641H14ZM15.7071 2.20711C16.0976 1.81658 16.0976 1.18342 15.7071 0.792893C15.3166 0.402369 14.6834 0.402369 14.2929 0.792893L15.7071 2.20711ZM7.29289 7.79289C6.90237 8.18342 6.90237 8.81658 7.29289 9.20711C7.68342 9.59763 8.31658 9.59763 8.70711 9.20711L7.29289 7.79289ZM8 0.5H5V2.5H8V0.5ZM5 0.5C2.23858 0.5 0 2.73858 0 5.5H2C2 3.84315 3.34315 2.5 5 2.5V0.5ZM0 5.5V11.5H2V5.5H0ZM0 11.5C0 14.2614 2.23858 16.5 5 16.5V14.5C3.34315 14.5 2 13.1569 2 11.5H0ZM5 16.5H11V14.5H5V16.5ZM11 16.5C13.7614 16.5 16 14.2614 16 11.5H14C14 13.1569 12.6569 14.5 11 14.5V16.5ZM16 11.5V8.5H14V11.5H16ZM15 0.5H10.912V2.5H15V0.5ZM14 1.5V5.641H16V1.5H14ZM14.2929 0.792893L7.29289 7.79289L8.70711 9.20711L15.7071 2.20711L14.2929 0.792893Z"
                            fill="#0ef032"
                        />
                    </svg>
                </Link>
            </Images>

            <Content>
                <Session>
                    세션 0{speaker.sessionNumber}
                    <SessionDots>
                        {Array(speaker.sessionNumber)
                            .fill(undefined)
                            .map((e, i) => (
                                <SessionDot key={i} />
                            ))}
                    </SessionDots>
                </Session>
                <Title>{speaker.title}</Title>
                <Name
                    onClick={() => speakerPopup.openPopup(speaker.name as any)}
                >
                    {speaker.name}
                </Name>
                <Description>{speaker.description}</Description>
            </Content>
        </Divver>
    );
}
