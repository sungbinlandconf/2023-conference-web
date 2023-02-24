import { useState } from "react";
import styled from "styled-components";
import { Flex } from "../../components/flex";
import { ScheduleSquare } from "../../components/scheduleSquare";
import { View } from "../../components/view";
import { WEB_VAR } from "../../setting/setting";

const Divver = styled.div`
    max-width: ${WEB_VAR.pageWidth};
    width: 100%;
    margin: 0 auto;
    padding: 16px;
    margin-top: 64px;
    position: relative;

    @media (max-width: 767px) {
        width: 100%;
        margin-top: 8px;
    }
`;

const Title = styled.div`
    color: #0ef032;
    font-weight: 700;
    font-size: 20px;
    font-family: "Pretendard-Bold";
`;

const Table = styled.div`
    color: #0ef032;
    border: solid 2px #0ef032;
    border-bottom: 0;
    margin-top: 16px;
`;

const StyledRow = styled.div<{ isBreakTime: boolean }>`
    display: flex;
    border-bottom: solid 2px #0ef032;
    background-color: ${(props) => (props.isBreakTime ? "#151B15" : "#111211")};
    height: 72px;
`;

const RowTime = styled.div`
    width: 232px;
    display: flex;
    gap: 8px;
    padding: 16px 26px;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
`;
const RowTimeTilde = styled.span`
    font-weight: 300;
`;
const RowTimeDuring = styled.span`
    font-size: 14px;
`;
const RowTitle = styled.div<{ isBreakTime: boolean }>`
    flex: 6;
    font-weight: ${(props) => (props.isBreakTime ? 500 : 600)};
    color: ${(props) => (props.isBreakTime ? "#136721" : "#0EF032")};
    padding: 16px 16px;
    display: flex;
    align-items: center;
    font-size: 20px;

    border-left: solid 2px #0ef032;
    border-right: solid 2px #0ef032;
`;
const RowTitleMobile = styled.div`
    display: flex;
    align-items: center;
`;
const RowTitleOrder = styled.div`
    width: 30px;
    font-size: 12px;
    margin-top: -2px;
`;
const RowName = styled.div`
    width: 80px;
    font-weight: 600;
    font-size: 18px;
    padding: 16px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledRowMobile = styled.div<{ isBreakTime: boolean }>`
    display: flex;
    flex-direction: column;
    border-bottom: solid 2px #0ef032;
    background-color: ${(props) => (props.isBreakTime ? "#151B15" : "#111211")};
    padding: 12px;
    gap: 8px;
`;

function TableRow({
    event,
}: {
    event: {
        time: {
            start: string;
            end: string;
            during: string;
        };
        title: string;
        number?: number;
        speaker?: string;
        isBreakTime?: boolean;
        order?: string;
    };
}) {
    return (
        <>
            <View.Pc>
                <StyledRow isBreakTime={!!event.isBreakTime}>
                    <RowTime>
                        {event.time.start}
                        <RowTimeTilde>~</RowTimeTilde>
                        {event.time.end}
                        <RowTimeDuring>{`{${event.time.during}}`}</RowTimeDuring>
                    </RowTime>
                    <RowTitle isBreakTime={!!event.isBreakTime}>
                        <RowTitleOrder>{event.order}</RowTitleOrder>
                        {event.title}
                    </RowTitle>
                    <RowName>{event.speaker}</RowName>
                </StyledRow>
            </View.Pc>
            <View.Mobile>
                <StyledRowMobile isBreakTime={!!event.isBreakTime}>
                    <Flex.Between>
                        <Flex.Row>
                            {event.time.start}
                            <RowTimeTilde>~</RowTimeTilde>
                            {event.time.end}
                            <RowTimeDuring>{`{${event.time.during}}`}</RowTimeDuring>
                        </Flex.Row>
                        <Flex.Row>{event.speaker}</Flex.Row>
                    </Flex.Between>
                    <RowTitleMobile>
                        {event.order && (
                            <RowTitleOrder>{event.order}</RowTitleOrder>
                        )}
                        {event.title}
                    </RowTitleMobile>
                </StyledRowMobile>
            </View.Mobile>
        </>
    );
}
export function MainSchedule() {
    return (
        <Divver id="schedule">
            <ScheduleSquare />
            <Title>Schedule</Title>
            <Table>
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        speaker: "지성빈",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:10",
                            end: "13:50",
                            during: "40m",
                        },
                        title: "미디어 플레이어 UDA 적용기",
                        speaker: "이기정",
                        order: "01",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:50",
                            end: "14:00",
                            during: "10m",
                        },
                        title: "쉬는 시간",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "14:00",
                            end: "14:40",
                            during: "40m",
                        },
                        title: "소스코드로 알아보는 안드로이드 Context",
                        speaker: "윤희성",
                        order: "02",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "14:40",
                            end: "14:50",
                            during: "10m",
                        },
                        title: "쉬는 시간",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "14:50",
                            end: "15:30",
                            during: "40m",
                        },
                        title: "이직! 그거 어떻게 하는건데?",
                        speaker: "이정욱",
                        order: "03",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "15:30",
                            end: "16:40",
                            during: "10m",
                        },
                        title: "쉬는 시간",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "15:40",
                            end: "16:20",
                            during: "40m",
                        },
                        title: "Compose Canvas로 예쁜 인터렉션 구현하기!",
                        speaker: "최우성",
                        order: "04",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "16:20",
                            end: "16:30",
                            during: "10m",
                        },
                        title: "쉬는 시간",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "16:30",
                            end: "17:10",
                            during: "40m",
                        },
                        title: "Compose 정식 출시보다 앞섰던 Compose 적용기",
                        speaker: "류기민",
                        order: "05",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "17:10",
                            end: "17:30",
                            during: "20m",
                        },
                        title: "행사 마무리 및 추가 질문",
                    }}
                />
            </Table>
        </Divver>
    );
}
