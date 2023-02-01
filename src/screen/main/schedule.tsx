import styled from "styled-components";
import { ScheduleSquare } from "../../components/scheduleSquare";

const Divver = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 16px;
    margin-top: 64px;
    position: relative;
`;

const Title = styled.div`
    color: #0ef032;
    font-weight: 700;
    font-size: 20px;
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
`;
const RowTime = styled.div`
    flex: 3;
    display: flex;
    gap: 8px;
    padding: 16px 26px;
    align-items: center;
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
    color: ${(props) => (props.isBreakTime ? "#115f1e" : "#0EF032")};
    padding: 16px 26px;
    display: flex;
    align-items: center;

    border-left: solid 2px #0ef032;
    border-right: solid 2px #0ef032;
`;
const RowName = styled.div`
    width: 80px;
    font-weight: 600;
    font-size: 14px;
    padding: 16px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    };
}) {
    return (
        <StyledRow isBreakTime={!!event.isBreakTime}>
            <RowTime>
                {event.time.start}
                <RowTimeTilde>~</RowTimeTilde>
                {event.time.end}
                <RowTimeDuring>{`{${event.time.during}}`}</RowTimeDuring>
            </RowTime>
            <RowTitle isBreakTime={!!event.isBreakTime}>{event.title}</RowTitle>
            <RowName>{event.speaker}</RowName>
        </StyledRow>
    );
}
export function MainSchedule() {
    return (
        <Divver>
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
                        speaker: "박현우",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        speaker: "박현우",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        speaker: "박현우",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        speaker: "박현우",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        speaker: "박현우",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        isBreakTime: true,
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        speaker: "박현우",
                    }}
                />
                <TableRow
                    event={{
                        time: {
                            start: "13:00",
                            end: "13:10",
                            during: "10m",
                        },
                        title: "행사 시작 및 키노트",
                        isBreakTime: true,
                    }}
                />
            </Table>
        </Divver>
    );
}
