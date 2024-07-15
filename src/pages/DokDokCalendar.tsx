import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import styled from 'styled-components';
import RenderHeader from '../components/Calendar/RenderHeader';
import RenderDays from '../components/Calendar/RenderDays';
import RenderCells from '../components/Calendar/RenderCells';
import useDokDokCalendar from '../hooks/useDokDokCalendar';

const DokDokCalendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentDay, setCurrentDay] = useState(new Date());

    const { bookReadCount, bookFinishCount, bookFinished } = useDokDokCalendar(currentMonth);

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return (
        <CalendarContainer>
            <h2>독독 캘린더</h2>
            <div className="header-container">
                <div className='status-container'>
                    <p>읽는 중: {bookReadCount}권</p>
                    <p>완독: {bookFinishCount}권</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="calendar">
                    <RenderHeader
                        currentMonth={currentMonth}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                    />
                    <RenderDays />
                    <RenderCells
                        currentMonth={currentMonth}
                        currentDay={currentDay}
                        bookFinished={bookFinished}
                    />
                </div>
            </div>
        </CalendarContainer>
    );
};

export default DokDokCalendar;

const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 95vh;

    .header-container {
        flex: 0 0 auto;

        .status-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            p {
                margin: 0;
            }
        }
    }

    .calendar-container {
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        .calendar {
            width: 100%;
            height: 100%;
            
            .header {
                width: 100%;
                height: 7%;
                display: flex;
                justify-content: space-between;
                align-items: baseline;

                .col-first {
                    width: 80%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    margin-left: 1%;
                    
                    .text {
                        font-size: 0.8em;
                    }
                    
                    .text.month {
                        margin-right: 5px;
                        font-size: 1.6em;
                        font-weight: 600;
                    }
                }

                .col-end {
                    width: 20%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: baseline;

                    svg {
                        width: 11%;
                        height: fit-content;
                        margin-left: 5%;
                        color: rgba(128, 128, 128, 0.8);

                        &:hover {
                            cursor: pointer;
                            transition: 0.2s ease-in-out;
                            transform: scale(1.15);
                            color: #686868;
                        }
                    }
                }
            }

            .days {
                width: 100%;
                height: fit-content;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 600;
                font-size: 0.65em;
                padding: 2px;
                color: #686868;
                
                .col {
                    width: 12.9%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;
                    background: #CAF0F8;
                    border-radius: 10px;
                }
            }

            .body {
                width: 100%;
                height: 89%;
                display: flex;
                flex-direction: column;
                
                .row {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .col {
                        width: 13.5%;
                        height: 93%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                        border: 0.4px solid rgba(128, 128, 128, 0.6);
                        border-radius: 3px;
                        font-size: 0.8em;
                        position: relative;

                        span {
                            margin: 4px 0 0 4px;
                        }

                        .not-valid {
                            color: #c4c4c4;
                        }

                        img {
                            width: auto;
                            height: 80%;
                            position: absolute;
                            bottom: 10%;
                            right: 25%;
                            border-radius: 3px;
                        }
                    }

                    .col.cell.today {
                        border: 1px solid black;
                        color: #0077B6;
                        font-weight: 600;
                    }
                }
            }
        }
    }
`;