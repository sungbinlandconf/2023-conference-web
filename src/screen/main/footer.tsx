import styled from "styled-components";
import { Flex } from "../../components/flex";

const Outer = styled.div`
    width: 100%;
    padding: 16px 0px;
    border-top: solid 1px #0ef032;
    margin-top: 52px;
`;

const Divver = styled.div`
    width: 700px;
    padding: 16px;
    margin: 0 auto;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

const ConferenceInfos = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
const ConferenceName = styled.div`
    color: #0ef032;
    font-weight: 700;
    font-size: 32px;
`;
const ConferenceText = styled.div`
    color: #104729;
    font-weight: 700;
    font-size: 36px;
    margin-top: 32px;
    font-family: "Poppins", sans-serif;

    @media (max-width: 767px) {
        margin-top: 20px;
    }
`;

const RightItem = styled.div`
    margin-top: -12px;

    @media (max-width: 767px) {
        margin-top: 0px;
        margin-left: -12px;
    }
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        width: 100%;
        flex-direction: row-reverse;
        justify-content: flex-end;
        margin-top: 32px;
        margin-left: 20px;
    }
`;

export function MainFooter() {
    return (
        <Outer>
            <Divver>
                <Flex.ResponsiveBetween>
                    <ConferenceInfos>
                        <ConferenceName>2023 SBLD Conference</ConferenceName>
                        <ConferenceText>
                            4월 8일 오후 1시 <br />
                            마루180에서 만나요!
                        </ConferenceText>
                    </ConferenceInfos>
                    <Items>
                        <RightItem style={{ zIndex: "3" }}>
                            <svg
                                width="75"
                                height="69"
                                viewBox="0 0 75 69"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 68V11.5538L22.3356 1H74V57.5821L52.5836 68H1Z"
                                    fill="#111211"
                                    stroke="#0EF032"
                                    stroke-width="2"
                                />
                                <path
                                    d="M29.2322 35.7679C28.8417 35.3774 28.2085 35.3775 27.818 35.768C27.4275 36.1585 27.4275 36.7917 27.8181 37.1822L29.2322 35.7679ZM28.5252 44.0484L27.8181 43.3413L27.8181 43.3413L28.5252 44.0484ZM23.4752 49.0984L24.1823 49.8055L23.4752 49.0984ZM15.9018 41.5251L16.6089 42.2322H16.6089L15.9018 41.5251ZM19.1339 39.7072C19.5245 39.3167 19.5245 38.6835 19.1339 38.293C18.7434 37.9024 18.1102 37.9024 17.7197 38.293L19.1339 39.7072ZM22.7681 42.2322C23.1586 42.6227 23.7918 42.6227 24.1823 42.2322C24.5728 41.8416 24.5728 41.2085 24.1822 40.8179L22.7681 42.2322ZM23.4752 33.9517L24.1822 34.6589L24.1823 34.6588L23.4752 33.9517ZM28.5252 28.9017L29.2323 29.6088L28.5252 28.9017ZM36.0985 28.9017L35.3914 29.6088V29.6088L36.0985 28.9017ZM36.0985 36.4751L36.8056 37.1822L36.0985 36.4751ZM32.8664 38.293C32.4759 38.6835 32.4759 39.3167 32.8664 39.7072C33.2569 40.0977 33.8901 40.0977 34.2806 39.7072L32.8664 38.293ZM27.8181 37.1822C28.6348 37.9989 29.0937 39.1067 29.0937 40.2617H31.0937C31.0937 38.5762 30.4241 36.9598 29.2322 35.7679L27.8181 37.1822ZM29.0937 40.2617C29.0937 41.4168 28.6348 42.5246 27.8181 43.3413L29.2322 44.7555C30.4241 43.5637 31.0937 41.9473 31.0937 40.2617H29.0937ZM27.8181 43.3413L22.7681 48.3913L24.1823 49.8055L29.2323 44.7555L27.8181 43.3413ZM22.7681 48.3913C21.0673 50.0921 18.3097 50.0921 16.6089 48.3913L15.1947 49.8055C17.6766 52.2874 21.7004 52.2874 24.1823 49.8055L22.7681 48.3913ZM16.6089 48.3913C14.9081 46.6905 14.9081 43.933 16.6089 42.2322L15.1947 40.818C12.7129 43.2998 12.7129 47.3237 15.1947 49.8055L16.6089 48.3913ZM16.6089 42.2322L19.1339 39.7072L17.7197 38.293L15.1947 40.818L16.6089 42.2322ZM24.1822 40.8179C23.3655 40.0012 22.9066 38.8935 22.9066 37.7384H20.9066C20.9066 39.4239 21.5762 41.0404 22.7681 42.2322L24.1822 40.8179ZM22.9066 37.7384C22.9066 36.5833 23.3655 35.4756 24.1822 34.6589L22.7681 33.2446C21.5762 34.4364 20.9066 36.0529 20.9066 37.7384H22.9066ZM24.1823 34.6588L29.2323 29.6088L27.8181 28.1946L22.7681 33.2446L24.1823 34.6588ZM29.2323 29.6088C30.9331 27.9081 33.6906 27.9081 35.3914 29.6088L36.8056 28.1946C34.3238 25.7128 30.2999 25.7128 27.8181 28.1946L29.2323 29.6088ZM35.3914 29.6088C37.0922 31.3096 37.0922 34.0672 35.3914 35.768L36.8056 37.1822C39.2874 34.7003 39.2874 30.6765 36.8056 28.1946L35.3914 29.6088ZM35.3914 35.768L32.8664 38.293L34.2806 39.7072L36.8056 37.1822L35.3914 35.768Z"
                                    fill="#0EF032"
                                />
                            </svg>
                        </RightItem>
                        <RightItem style={{ zIndex: "2" }}>
                            <svg
                                width="75"
                                height="69"
                                viewBox="0 0 75 69"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 68V11.5538L22.3356 1H74V57.5821L52.5836 68H1Z"
                                    fill="#111211"
                                    stroke="#0EF032"
                                    stroke-width="2"
                                />
                                <path
                                    d="M38.334 34.0394C38.3536 34.5914 38.817 35.0229 39.3689 35.0032C39.9209 34.9836 40.3524 34.5202 40.3327 33.9683L38.334 34.0394ZM32.19 27.3372V28.3372C32.2011 28.3372 32.2123 28.337 32.2234 28.3366L32.19 27.3372ZM21.4767 27.3372L21.4433 28.3366C21.4544 28.337 21.4655 28.3372 21.4767 28.3372V27.3372ZM13.334 33.9683C13.3143 34.5202 13.7458 34.9836 14.2977 35.0032C14.8497 35.0229 15.313 34.5914 15.3327 34.0394L13.334 33.9683ZM40.3333 34.0039C40.3333 33.4516 39.8856 33.0039 39.3333 33.0039C38.781 33.0039 38.3333 33.4516 38.3333 34.0039H40.3333ZM39.3333 44.0039L40.3327 44.0394C40.3331 44.0276 40.3333 44.0157 40.3333 44.0039H39.3333ZM32.19 50.6705L32.2234 49.6711C32.2123 49.6707 32.2011 49.6705 32.19 49.6705V50.6705ZM21.4767 50.6705V49.6705C21.4655 49.6705 21.4544 49.6707 21.4433 49.6711L21.4767 50.6705ZM14.3333 44.0039H13.3333C13.3333 44.0157 13.3335 44.0276 13.334 44.0394L14.3333 44.0039ZM15.3333 34.0039C15.3333 33.4516 14.8856 33.0039 14.3333 33.0039C13.7811 33.0039 13.3333 33.4516 13.3333 34.0039H15.3333ZM39.8377 34.8673C40.3146 34.5887 40.4754 33.9763 40.1968 33.4995C39.9182 33.0226 39.3058 32.8618 38.8289 33.1404L39.8377 34.8673ZM30.56 39.1289L30.0556 38.2653L30.0473 38.2703L30.56 39.1289ZM23.1067 39.1289L23.6194 38.2703L23.6111 38.2654L23.1067 39.1289ZM14.8377 33.1404C14.3609 32.8618 13.7484 33.0226 13.4699 33.4995C13.1913 33.9763 13.3521 34.5887 13.8289 34.8673L14.8377 33.1404ZM40.3327 33.9683C40.1773 29.6055 36.5197 26.1919 32.1566 26.3377L32.2234 28.3366C35.4842 28.2276 38.2179 30.7789 38.334 34.0394L40.3327 33.9683ZM32.19 26.3372H21.4767V28.3372H32.19V26.3372ZM21.5101 26.3377C17.147 26.1919 13.4893 29.6055 13.334 33.9683L15.3327 34.0394C15.4488 30.7789 18.1824 28.2276 21.4433 28.3366L21.5101 26.3377ZM38.3333 34.0039V44.0039H40.3333V34.0039H38.3333ZM38.334 43.9683C38.2179 47.2288 35.4842 49.7801 32.2234 49.6711L32.1566 51.67C36.5197 51.8158 40.1773 48.4022 40.3327 44.0394L38.334 43.9683ZM32.19 49.6705H21.4767V51.6705H32.19V49.6705ZM21.4433 49.6711C18.1824 49.7801 15.4488 47.2288 15.3327 43.9683L13.334 44.0394C13.4893 48.4022 17.147 51.8158 21.5101 51.67L21.4433 49.6711ZM15.3333 44.0039V34.0039H13.3333V44.0039H15.3333ZM38.8289 33.1404L30.0556 38.2654L31.0644 39.9923L39.8377 34.8673L38.8289 33.1404ZM30.0473 38.2703C28.0677 39.4525 25.599 39.4525 23.6194 38.2703L22.5939 39.9874C25.2051 41.5468 28.4616 41.5468 31.0727 39.9874L30.0473 38.2703ZM23.6111 38.2654L14.8377 33.1404L13.8289 34.8673L22.6023 39.9923L23.6111 38.2654Z"
                                    fill="#0EF032"
                                />
                            </svg>
                        </RightItem>
                        <RightItem style={{ zIndex: "1" }}>
                            <svg
                                width="75"
                                height="69"
                                viewBox="0 0 75 69"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 68V11.5538L22.3356 1H74V57.5821L52.5836 68H1Z"
                                    fill="#111211"
                                    stroke="#0EF032"
                                    stroke-width="2"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M35.4468 50.6715C39.2874 50.8114 42.5169 47.8168 42.6668 43.9765V34.0332C42.5169 30.193 39.2874 27.1984 35.4468 27.3382H16.5535C12.7129 27.1984 9.48347 30.193 9.3335 34.0332V43.9765C9.48347 47.8168 12.7129 50.8114 16.5535 50.6715H35.4468Z"
                                    stroke="#0EF032"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M25.1802 34.2966L30.4485 37.8766C30.7898 38.0758 30.9996 38.4413 30.9996 38.8366C30.9996 39.2318 30.7898 39.5973 30.4485 39.7966L25.1802 43.7132C24.1802 44.3916 22.6668 43.8132 22.6668 42.7532V35.2532C22.6668 34.1982 24.1818 33.6182 25.1802 34.2966Z"
                                    stroke="#0EF032"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </RightItem>
                    </Items>
                </Flex.ResponsiveBetween>
            </Divver>
        </Outer>
    );
}
