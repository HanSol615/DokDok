import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parseISO } from 'date-fns';
import { Book } from '../../models/book';

interface RenderCellsProps {
    currentMonth: Date;
    currentDay: Date;
    bookFinished: Book[];
}

const RenderCells: React.FC<RenderCellsProps> = ({ currentMonth, currentDay, bookFinished }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const lastDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    const finishedBooksMap = bookFinished.reduce((map, book) => {
        const date = format(parseISO(book.endDate), 'yyyy-MM-dd');
        map[date] = book;
        return map;
    }, {} as Record<string, Book>);

    while (day <= lastDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const dateString = format(day, 'yyyy-MM-dd');
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const book = finishedBooksMap[dateString];

            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, currentDay)
                            ? 'today'
                            : ''
                    }`}
                    key={day.getTime()}
                >
                    <span className={!isCurrentMonth ? 'text not-valid' : ''}>
                        {formattedDate}
                    </span>
                    {book && (
                        <>
                            <img src={book.image} alt="Book cover" />
                        </>
                    )}
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day.getTime()}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};

export default RenderCells;
