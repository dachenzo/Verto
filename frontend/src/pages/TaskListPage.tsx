import Canvas from "../components/Canvas/Canvas";
import Header from "../components/HeaderComponents/Header/Header";
import ProfileAtHeader from "../components/HeaderComponents/ProfileAtHeader/ProfileAtHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import TaskList from "../components/TaskListComponents/TaskList/TaskList";
import TaskListCard from "../components/TaskListComponents/TaskListCard/TaskListCard";
import TaskListFilters from "../components/TaskListComponents/TaskListFilters/TaskListFilters";

const TaskListPage = () => {
    return (
        <Canvas>
            <Header>
                <SearchBar></SearchBar>
                <ProfileAtHeader></ProfileAtHeader>
            </Header>
            <TaskListCard>
                <TaskListFilters></TaskListFilters>
                <TaskList></TaskList>
            </TaskListCard>
        </Canvas>
    );
};

export default TaskListPage;
