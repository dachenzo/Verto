import { useState } from "react";
import CalendarContainer from "../components/CalendarComponents/CalendarContainer/CalendarContainer";
import CalendarHeader from "../components/CalendarComponents/CalendarHeader/CalendarHeader";
import CalendarNav from "../components/CalendarComponents/CalendarNav/CalendarNav";
import CurrentMonth from "../components/CalendarComponents/CurrentMonth/CurrentMonth";
import DayColumn from "../components/CalendarComponents/DayColumn/DayColumn";
import WeekGrid from "../components/CalendarComponents/WeekGrid/WeekGrid";
import Canvas from "../components/Canvas/Canvas";
import Header from "../components/HeaderComponents/Header/Header";
import ProfileAtHeader from "../components/HeaderComponents/ProfileAtHeader/ProfileAtHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import CalendarTask from "../components/CalendarComponents/CalendarTask/CalendarTask";

const CalendarPage = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [sunday, setSunday] = useState<Date>(getSundayDate());

    const dayDates = getWeekDates(sunday);

    const goToNextWeek = () => {
        const newSunday = new Date(sunday);
        newSunday.setDate(sunday.getDate() + 7);
        setSunday(newSunday);
    };

    const goToPreviousWeek = () => {
        const newSunday = new Date(sunday);
        newSunday.setDate(sunday.getDate() - 7);
        setSunday(newSunday);
    };

    const goToToday = () => {
        const today = getSundayDate();
        setSunday(today);
    };

    const [month, year, numMonth, numYear] = getMonthYear(sunday);

    return (
        <Canvas>
            <Header>
                <SearchBar></SearchBar>
                <ProfileAtHeader></ProfileAtHeader>
            </Header>
            <CalendarContainer>
                <CalendarHeader>
                    <CalendarNav
                        nextWeek={goToNextWeek}
                        previousWeek={goToPreviousWeek}
                        goToToday={goToToday}
                    ></CalendarNav>
                    <CurrentMonth month={month} year={year}></CurrentMonth>
                </CalendarHeader>
                <WeekGrid>
                    <DayColumn
                        dayDate={dayDates[0]}
                        dayName={days[0]}
                        isToday={getIsToday(numYear, numMonth, dayDates[0])}
                    >
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                    </DayColumn>
                    <DayColumn
                        dayDate={dayDates[1]}
                        dayName={days[1]}
                        isToday={getIsToday(numYear, numMonth, dayDates[1])}
                    >
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                    </DayColumn>
                    <DayColumn
                        dayDate={dayDates[2]}
                        dayName={days[2]}
                        isToday={getIsToday(numYear, numMonth, dayDates[2])}
                    >
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                    </DayColumn>
                    <DayColumn
                        dayDate={dayDates[3]}
                        dayName={days[3]}
                        isToday={getIsToday(numYear, numMonth, dayDates[3])}
                    >
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                    </DayColumn>
                    <DayColumn
                        dayDate={dayDates[4]}
                        dayName={days[4]}
                        isToday={getIsToday(numYear, numMonth, dayDates[4])}
                    >
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                    </DayColumn>
                    <DayColumn
                        dayDate={dayDates[5]}
                        dayName={days[5]}
                        isToday={getIsToday(numYear, numMonth, dayDates[5])}
                    >
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                    </DayColumn>
                    <DayColumn
                        dayDate={dayDates[6]}
                        dayName={days[6]}
                        isToday={getIsToday(numYear, numMonth, dayDates[6])}
                    >
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="LOW"></CalendarTask>
                        <CalendarTask priority="MED"></CalendarTask>
                        <CalendarTask priority="HIGH"></CalendarTask>
                    </DayColumn>
                </WeekGrid>
            </CalendarContainer>
        </Canvas>
    );
};

const getSundayDate = () => {
    const today = new Date();
    const weekday = today.getDay();
    const sunday = new Date();
    sunday.setDate(today.getDate() - weekday);
    return sunday;
};

const getWeekDates = (sunday: Date): number[] => {
    const days = [sunday];
    for (let i = 0; i < 6; i++) {
        const newDate = new Date();
        newDate.setDate(days[i].getDate() + 1);
        days.push(newDate);
    }

    const dayDates = [];
    for (let day of days) {
        dayDates.push(day.getDate());
    }

    return dayDates;
};

const getMonthYear = (sunday: Date): any[] => {
    const monthsMap: Record<number, string> = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    };

    const numMonth = sunday.getMonth();
    const month = monthsMap[numMonth];
    const numYear = sunday.getFullYear();
    const year = numYear.toString();

    return [month, year, numMonth, numYear];
};

const getIsToday = (year: number, month: number, day: number) => {
    const today = new Date();
    const isToday =
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === day;

    return isToday;
};
export default CalendarPage;
