import Canvas from "../components/Canvas/Canvas";

import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import DashboardTask from "../components/DashboardTask/DashboardTask";
import DeadlineTaskCard from "../components/DeadlineTaskCard/DeadlineTaskCard";
import Header from "../components/Header/Header";
import ProfileAtHeader from "../components/ProfileAtHeader/ProfileAtHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import TaskCardHeader from "../components/TaskCardHeader/TaskCardHeader";
import TodayTaskCard from "../components/TodayTaskCard/TodayTaskCard";
import UpcomingTaskCard from "../components/UpcomingTaskCard/UpcomingTaskCard";

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
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                    <DashboardTask></DashboardTask>
                </DeadlineTaskCard>
            </DashboardContainer>
        </Canvas>
    );
};

export default Dashboard;
