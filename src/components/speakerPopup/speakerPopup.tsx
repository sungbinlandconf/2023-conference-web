import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import {
    SpeakerName,
    SpeakerPopupContext,
} from "../../context/speakerPopup.conetex";

const Divver = styled.div<{ isDrag: boolean }>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    position: absolute;
    width: 400px;
    background-color: #111211;
    border: solid 1px hsla(129, 89%, 50%, 1);
    z-index: 999;
    transition: transform 200ms;
    transform: scale(1);

    @keyframes fadeIn1 {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    animation: fadeIn1 0.3s ease-out;

    ${(props) =>
        props.isDrag &&
        css`
            transform: scale(1.1);
        `}

    @media (max-width: 767px) {
        position: fixed;
        width: 100vw;
        padding-bottom: 52px;
        top: unset !important;
        bottom: 0px !important;
        left: 0px !important;
        max-height: 80vh;
        overflow-y: auto;
    }
`;

const MobileBackground = styled.div`
    display: none;
    @media (max-width: 767px) {
        display: block;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100vw;
        height: 100vh;

        position: fixed;
        top: 0px;
        left: 0px;
    }
`;

const ImageDiv = styled.div`
    width: 398px;
    height: 350px;
    user-select: none;
    border-bottom: solid 1px hsla(129, 89%, 50%, 1);

    @media (max-width: 767px) {
        width: 100%;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    user-select: none;
`;

const ImgOverlay = styled.div`
    width: 400px;
    height: 350px;
    position: absolute;
    top: 0px;
    left: 0px;

    @media (max-width: 767px) {
        display: none;
    }
`;

const Divver2 = styled.div`
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    font-family: "Pretendard-Bold", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: #0ef032;
`;

const Description = styled.div`
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-weight: 500;

    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
    color: #0ef032;
`;

const CloseButtonPC = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 32px;
    border-bottom: solid 1px hsla(129, 89%, 50%, 1);
    border-left: solid 1px hsla(129, 89%, 50%, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111211;
    transition: background-color 200ms;
    cursor: pointer;
    svg path {
        transition: fill 200ms;
        fill: #0ef032;
    }

    &:hover {
        background-color: #0ef032;
        svg path {
            fill: #111211;
        }
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

const CloseButtonMobile = styled.div`
    position: fixed;
    bottom: 16px;
    left: calc(50vw - 46px);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 42px;
    border: solid 1px hsla(129, 89%, 50%, 1);
    color: #0ef032;
    background-color: #111211;
    z-index: 1000;

    @media (min-width: 767px) {
        display: none;
    }
`;

export function SpeakerPopup({
    speaker,
}: {
    speaker: {
        imageUrl: string;
        name: SpeakerName;
        description: React.ReactNode;
    };
}) {
    const speakerPopup = useContext(SpeakerPopupContext);

    const [position, setPosition] = useState({
        x: window.scrollX + 100,
        y: window.scrollY + 100,
    });
    const [isDrag, setIsDrag] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isDrag_ = useRef<boolean>(false);
    const initMouseDownPos = useRef({
        x: 0,
        y: 0,
    });

    const mouseMove = (e: MouseEvent) => {
        if (!isDrag_.current) return;
        setPosition({
            x: e.pageX - initMouseDownPos.current.x,
            y: e.pageY - initMouseDownPos.current.y,
        });
    };

    const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDrag(true);
        isDrag_.current = true;

        // 엘리먼트 안에서 클릭한 위치
        initMouseDownPos.current = {
            x: e.clientX - (ref.current?.getBoundingClientRect().x || 0),
            y: e.clientY - (ref.current?.getBoundingClientRect().y || 0),
        };

        window.addEventListener("mouseup", mouseUp);
    };

    const mouseUp = () => {
        setIsDrag(false);
        isDrag_.current = false;
        window.removeEventListener("mouseup", mouseUp);
    };

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const closePopup = (e: React.MouseEvent<HTMLDivElement>) => {
        speakerPopup.closePopup(speaker.name);
        e.stopPropagation();
    };

    return (
        <>
            <MobileBackground onClick={(e) => closePopup(e)} />
            <Divver
                style={{
                    left: position.x,
                    top: position.y,
                }}
                isDrag={isDrag}
            >
                <ImageDiv onMouseDown={(e) => mouseDown(e)} ref={ref}>
                    <Image src={speaker.imageUrl} />
                    <ImgOverlay />
                </ImageDiv>
                <Divver2>
                    <Name>{speaker.name}</Name>
                    <Description>{speaker.description}</Description>
                </Divver2>

                <>
                    <CloseButtonPC onClick={(e) => closePopup(e)}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L6.46967 16.4697ZM12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L12.5303 12.5303ZM11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L11.4697 11.4697ZM17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L17.5303 7.53033ZM12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303L12.5303 11.4697ZM16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L7.53033 6.46967ZM7.53033 17.5303L12.5303 12.5303L11.4697 11.4697L6.46967 16.4697L7.53033 17.5303ZM12.5303 12.5303L17.5303 7.53033L16.4697 6.46967L11.4697 11.4697L12.5303 12.5303ZM11.4697 12.5303L16.4697 17.5303L17.5303 16.4697L12.5303 11.4697L11.4697 12.5303ZM12.5303 11.4697L7.53033 6.46967L6.46967 7.53033L11.4697 12.5303L12.5303 11.4697Z" />
                        </svg>
                    </CloseButtonPC>
                </>
            </Divver>
            <CloseButtonMobile onClick={(e) => closePopup(e)}>
                닫기
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L6.46967 16.4697ZM12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L12.5303 12.5303ZM11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L11.4697 11.4697ZM17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L17.5303 7.53033ZM12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303L12.5303 11.4697ZM16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L7.53033 6.46967ZM7.53033 17.5303L12.5303 12.5303L11.4697 11.4697L6.46967 16.4697L7.53033 17.5303ZM12.5303 12.5303L17.5303 7.53033L16.4697 6.46967L11.4697 11.4697L12.5303 12.5303ZM11.4697 12.5303L16.4697 17.5303L17.5303 16.4697L12.5303 11.4697L11.4697 12.5303ZM12.5303 11.4697L7.53033 6.46967L6.46967 7.53033L11.4697 12.5303L12.5303 11.4697Z"
                        fill="#0EF032"
                    />
                </svg>
            </CloseButtonMobile>
        </>
    );
}
