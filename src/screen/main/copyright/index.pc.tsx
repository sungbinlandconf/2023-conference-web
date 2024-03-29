import styled from "styled-components";
import { Flex } from "../../../components/flex";
import { View } from "../../../components/view";
import { WEB_VAR } from "../../../setting/setting";

const Divver = styled.div`
    max-width: ${WEB_VAR.pageWidth};
    width: 100%;
    padding: 16px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #0ef032;
    font-family: "Poppins", sans-serif;
`;

const Copyright = styled.div`
    font-size: 12px;
    font-weight: 400;
`;

const BIDownload = styled.a`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #0ef032;
    text-decoration: none;
`;

const Thanks = styled.div`
    font-size: 12px;
    margin-top: 10px;
    font-weight: 500;
`;

const ThanksLink = styled.a`
    font-size: 12px;
    color: #0ef032;
    text-decoration: none;

    padding-bottom: 2px;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
        no-repeat;
    transition: 0.5s;
    &:hover {
        --d: 100%;
    }
`;

export function MainCopyrightPc() {
    return (
        <View.Pc>
            <Divver>
                <Copyright>© SungbinLand. 2023 All rights reserved.</Copyright>
                <Flex.Column
                    style={{ alignItems: "flex-end", textAlign: "right" }}
                >
                    <BIDownload
                        href="https://drive.google.com/file/d/1nAapRr46FeBW05CglOSOhz3MwJjpjUWP/view?usp=sharing"
                        target="_blank"
                    >
                        Our BI Design{" "}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.75 15C5.75 14.5858 5.41421 14.25 5 14.25C4.58579 14.25 4.25 14.5858 4.25 15H5.75ZM5 16H4.25H5ZM19.75 15C19.75 14.5858 19.4142 14.25 19 14.25C18.5858 14.25 18.25 14.5858 18.25 15H19.75ZM11.4143 15.5315C11.1556 15.8549 11.208 16.3269 11.5315 16.5857C11.8549 16.8444 12.3269 16.792 12.5857 16.4685L11.4143 15.5315ZM16.5857 11.4685C16.8444 11.1451 16.792 10.6731 16.4685 10.4143C16.1451 10.1556 15.6731 10.208 15.4143 10.5315L16.5857 11.4685ZM11.4143 16.4685C11.6731 16.792 12.1451 16.8444 12.4685 16.5857C12.792 16.3269 12.8444 15.8549 12.5857 15.5315L11.4143 16.4685ZM8.58565 10.5315C8.32689 10.208 7.85493 10.1556 7.53148 10.4143C7.20803 10.6731 7.15559 11.1451 7.41435 11.4685L8.58565 10.5315ZM11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5H12.75ZM4.25 15V16H5.75V15H4.25ZM4.25 16C4.25 18.0711 5.92893 19.75 8 19.75V18.25C6.75736 18.25 5.75 17.2426 5.75 16H4.25ZM8 19.75H16V18.25H8V19.75ZM16 19.75C18.0711 19.75 19.75 18.0711 19.75 16H18.25C18.25 17.2426 17.2426 18.25 16 18.25V19.75ZM19.75 16V15H18.25V16H19.75ZM12.5857 16.4685L16.5857 11.4685L15.4143 10.5315L11.4143 15.5315L12.5857 16.4685ZM12.5857 15.5315L8.58565 10.5315L7.41435 11.4685L11.4143 16.4685L12.5857 15.5315ZM12.75 16V5H11.25V16H12.75Z"
                                fill="#0EF032"
                            />
                        </svg>
                    </BIDownload>
                    <Thanks>
                        Designed by{" "}
                        <ThanksLink
                            href="https://www.instagram.com/mugba.design"
                            target={"_blank"}
                        >
                            mugba
                        </ThanksLink>{" "}
                        | Developed By{" "}
                        <ThanksLink href="https://hyuns.dev" target={"_blank"}>
                            HyunsDev
                        </ThanksLink>
                    </Thanks>
                </Flex.Column>
            </Divver>
        </View.Pc>
    );
}
