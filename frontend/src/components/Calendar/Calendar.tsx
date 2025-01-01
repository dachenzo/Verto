import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css"; // Custom styles for the dark theme

type Value = Date | null | [Date | null, Date | null];
const TaskCalendar = () => {
    const [value, setValue] = useState<Value>(new Date());

    const handleDateChange = (
        date: Value,
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setValue(date);
        console.log(event);
    };

    return (
        <div className="calendar-wrapper">
            <Calendar
                onChange={handleDateChange}
                value={value}
                className="custom-calendar"
            />
        </div>
    );
};

export default TaskCalendar;
