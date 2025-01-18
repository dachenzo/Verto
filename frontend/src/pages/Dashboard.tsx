import Canvas from "../components/Canvas/Canvas";

import DashboardContainer from "../components/DashboardComponents/DashboardContainer/DashboardContainer";
import DashboardTask from "../components/DashboardComponents/DashboardTask/DashboardTask";
import DeadlineTaskCard from "../components/DashboardComponents/DeadlineTaskCard/DeadlineTaskCard";
import Header from "../components/HeaderComponents/Header/Header";
import ProfileAtHeader from "../components/HeaderComponents/ProfileAtHeader/ProfileAtHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import TaskCardHeader from "../components/DashboardComponents/TaskCardHeader/TaskCardHeader";
import TodayTaskCard from "../components/DashboardComponents/TodayTaskCard/TodayTaskCard";
import UpcomingTaskCard from "../components/DashboardComponents/UpcomingTaskCard/UpcomingTaskCard";

const Dashboard = () => {
    return (
        <Canvas>
            <Header>
                <SearchBar></SearchBar>
                <ProfileAtHeader></ProfileAtHeader>
            </Header>
            <DashboardContainer>
                <TodayTaskCard>
                    <TaskCardHeader>Today's Tasks</TaskCardHeader>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                </TodayTaskCard>
                <UpcomingTaskCard>
                    <TaskCardHeader>Tommorows's Tasks</TaskCardHeader>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                </UpcomingTaskCard>
                <DeadlineTaskCard>
                    <TaskCardHeader>Upcoming Deadlines</TaskCardHeader>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                </DeadlineTaskCard>
            </DashboardContainer>
        </Canvas>
    );
};

export default Dashboard;
